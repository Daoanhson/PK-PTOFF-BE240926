const db = require('../config/knex-config')

// Get all product
exports.getProducts = async (req, res) => {
    try {
        let { minRate, maxRate, page = 1, limit = 10, sort, order } = req.query;

        minRate = minRate ? parseFloat(minRate) : undefined;
        maxRate = maxRate ? parseFloat(maxRate) : undefined;
        page = parseInt(page, 10);
        limit = parseInt(limit, 10);

        const query = db('product')
            .leftJoin('listing', 'product.id', 'listing.productId')
            .leftJoin('comment', 'product.id', 'comment.productId')
            .leftJoin('product_tag', 'product.id', 'product_tag.productId')
            .leftJoin('tag', 'product_tag.tagId', 'tag.tagId')
            .select('product.*', 'listing.description', 'listing.price', 'listing.rate', 'comment.content as commentContent', 'tag.tagName');

        if (minRate !== undefined) {
            query.where('listing.rate', '>=', minRate);
        }
        if (maxRate !== undefined) {
            query.where('listing.rate', '<=', maxRate);
        }

        if (sort && order) {
            query.orderBy(sort, order);
        }

        const totalItems = await query.count('products.id as count').first();
        const totalPages = Math.ceil(totalItems.count / limit);
        const products = await query.offset((page - 1) * limit).limit(limit);

        res.json({
            products,
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


// Get prodict by id
exports.getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await db('product').where({ id }).first();

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

    } catch (error) {
        res.json(error
        );
    }
    res.json(product);
};

// get listing by id product
exports.getProductListing = async (req, res) => {
    try {
        const { id } = req.params;
        const listing = await db('listing').where({ productId: id }).first();
        res.json(listing);
    } catch (error) {
        res.json(error)
    }
};

// get tag by id

exports.getProductTags = async (req, res) => {
    try {
        const { id } = req.params;
        const tags = await db('tags')
            .join('product_tag', 'tag.tagId', 'product_tag.tagId')
            .where('product_tag.productId', id);
        res.json(tags);
    } catch (error) {
        res.json(error)
    }

};


// Get comment by id product
exports.getProductComments = async (req, res) => {
    try {
        const { id } = req.params;
        const comments = await db('comment').where({ productId: id });
        res.json(comments);
    } catch (error) {
        res.json(error)
    }
};


// create product 
exports.createProduct = async (req, res) => {
    try {
        const { productName, listing } = req.body;
        const existingProduct = await db('product').where({ productName }).first();
        if (existingProduct) {
            return res.status(400).json({ message: "Product already exists" });
        }
        const [productId] = await db('product').insert({ productName });
        if (listing) {
            await knex('listing').insert({ productId, ...listing });
        }
        res.json({ message: "Create successfully" });

    } catch (error) {
        res.json(error)
    }

};


// add comment 
exports.addComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { content } = req.body;
        await db('comment').insert({ productId: id, content });
        res.json({ message: "Comment added successfully" });

    } catch (error) {
        res.json(error)
    }

};

// Update product
exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await db('product').where({ id }).update(req.body);
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json({ message: "Update successfully" });

    } catch (error) {
        res.json(error)
    }

};


// Delete product
exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await db('product').where({ id }).del();
    if (!deletedProduct) {
        return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Delete successfully" });
};
