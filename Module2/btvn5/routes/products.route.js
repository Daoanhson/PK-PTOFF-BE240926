const express = require("express")
const router = express.Router()
const productController = require('../controllers/productController')

// GET /api/v1/products
router.get('/', productController.getProducts);

// GET /api/v1/products/:id
router.get('/:id', productController.getProductById);

// GET /products/:id/listing
router.get('/:id/listing', productController.getProductListing);

// GET /products/:id/tags
router.get('/:id/tags', productController.getProductTags);

// GET /products/:id/comments
router.get('/:id/comments', productController.getProductComments);

// POST /api/v1/products
router.post('/', productController.createProduct);

// POST /products/:id/comments
router.post('/:id/comments', productController.addComment);

// PUT /api/v1/products/:id
router.put('/:id', productController.updateProduct);

// DELETE /api/v1/products/:id
router.delete('/:id', productController.deleteProduct);

module.exports = router;