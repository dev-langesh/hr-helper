const { uploadResume } = require("../../../middleware/uploadResume.middleware");
const { postApplication, getApplication } = require("./application.controller");

const router = require("express").Router();

router.get("/:job_id", getApplication);
router.post("/", uploadResume, postApplication);

module.exports = { ApplicationRouter: router };
