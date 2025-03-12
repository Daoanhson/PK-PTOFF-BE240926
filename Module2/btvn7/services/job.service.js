const knex = require('../config/database')

const jobService = {
    // Get jobs
    getJobs: async (filter) => {
        const query = knex('jobs')
            .leftJoin('companies', 'jobs.companyId', 'companies.id')
            .leftJoin('categories', 'jobs.categoryId', 'categories.id')
            .leftJoin('locations', 'jobs.locationId', 'locations.id')
            .leftJoin('benefits', 'jobs.jobId', 'benefits.id')
            .select('jobs.*', 'companies.name as companyName', 'companies.logo as companyLogo',
                'categories.name as categoryName', 'locations.name as locationName',
                'benefits.name as benefitName')

        // Filter category
        if (filter.salaryMin) {
            query.where('jobs.salaryMin', '>=', filter.salaryMin)
        }

        if (filter.salaryMax) {
            query.where('jobs.salaryMax', '<=', filter.salaryMax)
        }

        if (filter.category) {
            query.where('categories.name', filter.category)
        }

        if (filter.location) {
            query.where('locations.name', filter.location)
        }

        if (filter.skills) {
            filter.skills.forEach(skill => {
                query.whereRaw('FIND_IN_SET(?,skills)', skill)
            });
        }

        // Pagination 
        const page = filter.page || 1;
        const limit = filter.limit || 10
        const offset = (page - 1) * limit

        query.limit(limit).offset(offset)

        // Sort
        if (filter.sort && filter.order) {
            query.orderBy(filter.sort, filter.order)
        }

        return await query
    },

    getJobById: async (id) => {
        return await knex('jobs')
            .leftJoin('companies', 'jobs.companyId', 'companies.id')
            .leftJoin('categories', 'jobs.categoryId', 'categories.id')
            .leftJoin('locations', 'jobs.locationId', 'locations.id')
            .leftJoin('benefits', 'jobs.jobId', 'benefits.id')
            .where('jobs.jobId', id)
            .select('jobs.*', 'companies.name as companyName', 'companies.logo as companyLogo', 
                    'categories.name as categoryName', 'locations.name as locationName', 
                    'benefits.name as benefitName')
            .first();
    },

    createJob: async (job) => {
        // Check job
        const existingJob = await knex('jobs').where('jobTitle', job.jobTitle).first();
        if (existingJob) {
            return { exists: true };
        }
        await knex('jobs').insert(job);
        return { exists: false };
    },

    updateJob: async (id, job) => {
        const updated = await knex('jobs').where('jobId', id).update(job);
        return updated;
    },

    deleteJob: async (id) => {
        const deleted = await knex('jobs').where('jobId', id).del();
        return deleted;
    },

    addSkillToJob: async (jobId, skill) => {
        await knex('job_skills').insert({ jobId, skill });
    },

    getJobSkills: async (jobId) => {
        return await knex('job_skills').where('jobId', jobId);
    }
}

module.exports = jobService