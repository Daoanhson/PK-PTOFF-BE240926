const jobService = require('../services/job.service');


exports.getJobs = async (req, res) => {
    const filter = req.query;
    const jobs = await jobService.getJobs(filter);
    res.json(res.transformJobs(jobs));
};

exports.getJobById = async (req, res) => {
    const job = await jobService.getJobById(req.params.id);
    if (!job) {
        return res.status(404).json({ message: "Job not found" });
    }
    res.json(res.transformJobs([job]));
};

exports.createJob = async (req, res) => {
    const job = req.body;
    const result = await jobService.createJob(job);
    if (result.exists) {
        return res.json({ message: "Job already exists" });
    }
    res.json({ message: "Create successfully" });
};

exports.updateJob = async (req, res) => {
    const updated = await jobService.updateJob(req.params.id, req.body);
    if (!updated) {
        return res.status(404).json({ message: "Job not found" });
    }
    res.json({ message: "Update successfully" });
};

exports.deleteJob = async (req, res) => {
    const deleted = await jobService.deleteJob(req.params.id);
    if (!deleted) {
        return res.status(404).json({ message: "Job not found" });
    }
    res.json({ message: "Delete successfully" });
};

exports.addSkillToJob = async (req, res) => {
    const jobId = req.params.id;
    const skill = req.body.skill;
    await jobService.addSkillToJob(jobId, skill);
    res.json({ message: "Skill added successfully" });
};

exports.getJobSkills = async (req, res) => {
    const skills = await jobService.getJobSkills(req.params.id);
    res.json(skills);
};