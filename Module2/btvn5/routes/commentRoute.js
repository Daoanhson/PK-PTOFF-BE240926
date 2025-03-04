const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// GET /api/v1/comments
router.get('/', commentController.getComments);

// GET /api/v1/comments/:id
router.get('/:id', commentController.getCommentById);

// POST /api/v1/comments
router.post('/', commentController.createComment);

// PUT /api/v1/comments/:id
router.put('/:id', commentController.updateComment);

// DELETE /api/v1/comments/:id
router.delete('/:id', commentController.deleteComment);

module.exports = router;