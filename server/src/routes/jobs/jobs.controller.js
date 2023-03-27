const { Job, Job } = require("../../../model/job.model");

// POST /job
async function postJob(req, res) {
  try {
    const job = await Job.create(req.body);

    res.json({ message: "Job posted" });
  } catch (err) {
    if (err) res.json({ error: err.message });
  }
}

// GET /job
async function getActiveJobs(req, res) {
  try {
    const jobs = await Job.find({ status: "active" });

    res.json({ message: "all active jobs", data: jobs });
  } catch (err) {
    if (err) res.json({ error: err.message });
  }
}

// GET /job/:id
async function getJob(req, res) {
  try {
    const id = req.params.id;

    const job = await Job.findById(id);

    res.json({ data: job });
  } catch (err) {
    if (err) res.json({ error: err.message });
  }
}

module.exports = { postJob, getActiveJobs };
