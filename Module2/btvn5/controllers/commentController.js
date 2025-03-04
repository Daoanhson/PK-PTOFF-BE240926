const db = require('../config/knex-config')

// get conment
exports.getComments = async (req, res) => {
    try {
        let { productId, page = 1, limit = 10, sort, order } = req.query;

        page = parseInt(page, 10);
        limit = parseInt(limit, 10);
    
        const query = db('comment');
    
        if (productId) {
            query.where({ productId });
        }
    
        if (sort && order) {
            query.orderBy(sort, order);
        }
    
        const totalItems = await query.count('id as count').first();
        const totalPages = Math.ceil(totalItems.count / limit);
        const comments = await query.offset((page - 1) * limit).limit(limit);
    
        res.json({
            comments,
            pagination: {
                currentPage: page,
                totalPages,
                totalItems: totalItems.count
            }
        });
        
    } catch (error) {
        res.json(error
        );
        
    }

};

// Get comment by id
exports.getCommentById = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await db('comment').where({ id }).first();
    
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }
    
        res.json(comment);
        
    } catch (error) {
        res.json(error);
        
    }
};

// Create comment

exports.createComment = async (req, res) => {
    try {
        const { productId, content } = req.body;

        await db('comment').insert({ productId, content });
        res.json({ message: "Create successfully" });
    } catch (error) {
        res.json(error);

    }

};

exports.updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedComment = await db('comment').where({ id }).update(req.body);
        if (!updatedComment) {
            return res.status(404).json({ message: "Comment not found" });
        }
        res.json({ message: "Update successfully" });
        
    } catch (error) {
        res.json(error);
    }

};

// Delete comment
exports.deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedComment = await db('comment').where({ id }).del();
        if (!deletedComment) {
            return res.status(404).json({ message: "Comment not found" });
        }

        res.json({ message: "Delete successfully" });
        
    } catch (error) {
        res.json(error);
    }

};