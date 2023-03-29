const { uploadFileToS3 } = require("../../../lib/aws/s3/uploadFileToS3");
const { Application } = require("../../../model/application.model");
const axios = require("axios");
const { Job } = require("../../../model/job.model");

async function getApplication(req, res) {
  const { job_id } = req.params;

  const applications = await Application.find({ job_id });

  res.json({ data: applications });
}

async function postApplication(req, res) {
  try {
    if (!req.file) {
      throw new Error("Upload resume");
    }

    const s3_url = await uploadFileToS3(req.file);

    req.body.resume = s3_url;

    // const { job_id } = req.body;

    // const job = await Job.findById(job_id);

    let questions = req.body.questions;

    if (typeof questions == "string") {
      questions = [questions];
    }

    console.log(questions);

    // scraping

    const model = await axios.post("http://localhost:8001/scrap/", {
      resume_url: s3_url,
      questions: req.body.questions,
      url: "http://localhost:5173/model",
    });

    const resume_result = model.data;

    console.log(resume_result);

    req.body.resume_result = JSON.parse(resume_result);

    console.log(req.body);

    const application = await Application.create(req.body);

    console.log(application);

    res.json({
      message: "application is created",
      application_id: application._id,
    });
  } catch (err) {
    if (err) res.json({ error: err.message });
  }
}

module.exports = { postApplication, getApplication };
