const { Job } = require("../../../model/job.model");

async function postJob(req, res) {
  try {
    const job = await Job.create(req.body);

    res.json({ message: "Job posted" });
  } catch (err) {
    if (err) res.json({ error: err.message });
  }
}

async function getActiveJobs(req, res) {
  try {
    const job = await Job.find({ status: "active" });

    res.json({ message: "all active jobs", data: job });
  } catch (err) {
    if (err) res.json({ error: err.message });
  }
}

module.exports = { postJob, getActiveJobs };
