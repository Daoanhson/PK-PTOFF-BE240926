const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tagController');

// GET /tags
router.get('/', tagController.getTags);

// POST /tags
router.post('/', tagController.createTag);

// GET /tags/:tagId
router.get('/:tagId', tagController.getTagById);

// PUT /tags/:tagId
router.put('/:tagId', tagController.updateTag);

// DELETE /tags/:tagId
router.delete('/:tagId', tagController.deleteTag);

// GET /tags/:tagId/products
router.get('/:tagId/products', tagController.getProductsByTagId);

module.exports = router;