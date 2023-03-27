const router = require("express").Router();
const { postJob, getActiveJobs } = require("./jobs.controller");

router.route("/").get(getActiveJobs).post(postJob);

module.exports = { JobRouter: router };
