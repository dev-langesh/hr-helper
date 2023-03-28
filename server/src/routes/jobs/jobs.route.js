const router = require("express").Router();
const { postJob, getActiveJobs, getJob } = require("./jobs.controller");

router.route("/").get(getActiveJobs).post(postJob);
router.get("/:id", getJob);

module.exports = { JobRouter: router };
