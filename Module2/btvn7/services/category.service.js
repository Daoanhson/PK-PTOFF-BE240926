const knex = require('../config/database')

const categoryService = {
    getCategories: async (filter) => {
        const query = knex('categories');

        // Pagination
        const page = filter.page || 1;
        const limit = filter.limit || 10;
        const offset = (page - 1) * limit;

        query.limit(limit).offset(offset);

        // Sort
        if (filter.sort && filter.order) {
            query.orderBy(filter.sort, filter.order);
        }

        return await query;
    },


    getCategoryById: async (id) => {
        return await knex('categories').where('categoryId', id).first();
    },

    getBooksByCategoryId: async (id) => {
        const category = await knex('categories').where('categoryId', id).first();
        if (!category) return null; // Nếu không tìm thấy category

        const jobs = await knex('jobs')
            .where('categoryId', id)
            .select('jobId', 'jobTitle');

        return {
            categoryName: category.name, // Giả sử tên danh mục là 'name'
            jobs: jobs
        };
    },

    createCategory: async (category) => {
        await knex('categories').insert(category);
    },

    updateCategory: async (id, category) => {
        const updated = await knex('categories').where('categoryId', id).update(category);
        return updated > 0;
    },

    deleteCategory: async (id) => {
        const deleted = await knex('categories').where('categoryId', id).del();
        return deleted > 0;
    }
}

module.exports = categoryService;
