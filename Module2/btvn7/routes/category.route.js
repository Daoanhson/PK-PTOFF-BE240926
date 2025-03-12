const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/category.controller')

// GET /api/v1/categories
router.get('/', categoryController.getCategories);

// GET /api/v1/categories/:id
router.get('/:id', categoryController.getCategoryById);

// GET /api/v1/categories/:id/books
router.get('/:id/books', categoryController.getBooksByCategoryId);

// POST /api/v1/categories
router.post('/', categoryController.createCategory);

// PUT /api/v1/categories/:id
router.put('/:id', categoryController.updateCategory);

// DELETE /api/v1/categories/:id
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;