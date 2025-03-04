const db = require('../config/knex-config')

exports.getTags = async (req, res) => {
    try {
        let { productId, page = 1, limit = 10, sort, order } = req.query;
        page = parseInt(page, 10);
        limit = parseInt(limit, 10);
        const query = db('tag');
        if (productId) {
            query.where('productId', productId);
        }
        if (sort && order) {
            query.orderBy(sort, order);
        }
        const totalItems = await query.count('id as count').first();
        const totalPages = Math.ceil(totalItems.count / limit);
        const tags = await query.offset((page - 1) * limit).limit(limit);
        res.json({
            tags,
            pagination: {
                currentPage: page,
                totalPages,
                totalItems: totalItems.count
            }
        });  
    } catch (error) {
        res.json(error)
    }
};

// Create tag
exports.createTag = async (req, res) => {
    try {
        const { name } = req.body;
        await db('tag').insert({ name });
        res.json({ message: "Tag created successfully" });
    } catch (error) {
        res.json(error)
    }
};

exports.getTagById = async (req, res) => {
    try {
        const { tagId } = req.params;
        const tag = await db('tags').where({ id: tagId }).first();
        if (!tag) {
            return res.status(404).json({ message: "Tag not found" });
        }
        res.json(tag);
    } catch (error) {
        res.json(error)
    }

};

exports.updateTag = async (req, res) => {
    try {
        const { tagId } = req.params;
        const updatedTag = await db('tag').where({ id: tagId }).update(req.body);
        if (!updatedTag) {
            return res.status(404).json({ message: "Tag not found" });
        }
        res.json({ message: "Tag updated successfully" });
    } catch (error) {
        res.json(error) 
    }

};

exports.deleteTag = async (req, res) => {
    try {
        const { tagId } = req.params;
        const deletedTag = await db('tag').where({ id: tagId }).del();
        if (!deletedTag) {
            return res.status(404).json({ message: "Tag not found" });
        }
        res.json({ message: "Tag deleted successfully" });
    } catch (error) {
        res.json(error) 
    }

};

exports.getProductsByTagId = async (req, res) => {
    try {
        const { tagId } = req.params;
        const products = await knex('product')
            .join('product_tag', 'products.id', '=', 'product_tag.productId')
            .where('product_tag.tagId', tagId)
            .select('product.*');
        res.json(products);
        
    } catch (error) {
        res.json(error)
    }
};