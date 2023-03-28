const { uploadResume } = require("../../../middleware/uploadResume.middleware");
const { postApplication, sendOtp } = require("./application.controller");

const router = require("express").Router();

router.post("/", uploadResume, postApplication);
router.post("/send-otp", sendOtp);

module.exports = { ApplicationRouter: router };
