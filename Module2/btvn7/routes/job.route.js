const express = require('express');
const router = express.Router();
const jobController = require('../controllers/job.controller');
const transformMiddleware = require('../middleware/transformData.middleware');

// Middleware để transform dữ liệu
router.use(transformMiddleware);

// GET /api/v1/jobs
router.get('/', jobController.getJobs);

// GET /api/v1/jobs/:id
router.get('/:id', jobController.getJobById);

// POST /api/v1/jobs
router.post('/', jobController.createJob);

// PUT /api/v1/jobs/:id
router.put('/:id', jobController.updateJob);

// DELETE /api/v1/jobs/:id
router.delete('/:id', jobController.deleteJob);

// POST /jobs/:id/skills
router.post('/:id/skills', jobController.addSkillToJob);

// GET /jobs/:id/skills
router.get('/:id/skills', jobController.getJobSkills);

module.exports = router;