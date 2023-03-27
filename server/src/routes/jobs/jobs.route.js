const router = require("express").Router();
const { postJob } = require("./jobs.controller");

router.post("/", postJob);

module.exports = { JobRouter: router };
