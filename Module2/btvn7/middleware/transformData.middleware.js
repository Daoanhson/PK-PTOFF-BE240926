const _ = require('lodash');

const transformJobData = (req, res, next) => {
    res.transformJobs = (jobs) => {
        return jobs.map(job => ({
            jobId: job.jobId,
            jobTitle: job.jobTitle,
            jobDescription: job.jobDescription,
            jobRequirement: job.jobRequirement,
            salaryMin: job.salaryMin,
            salaryMax: job.salaryMax,
            skills: job.skills ? job.skills.split(',') : [], // Giả sử skills được lưu dưới dạng chuỗi
            category: job.categoryName,
            location: job.locationName,
            company: {
                id: job.companyId,
                name: job.companyName,
                logo: job.companyLogo,
            },
            benefits: job.benefitName ? job.benefitName.split(',') : []
        }));
    };
    next();
};

module.exports = transformJobData;