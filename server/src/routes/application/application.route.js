const { uploadResume } = require("../../../middleware/uploadResume.middleware");
const { postApplication } = require("./application.controller");

const router = require("express").Router();

router.post("/", uploadResume, postApplication);

module.exports = { ApplicationRouter: router };
