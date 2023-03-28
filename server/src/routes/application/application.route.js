const { uploadResume } = require("../../../middleware/uploadResume.middleware");
const {
  postApplication,
  sendOtp,
  verifyOtp,
} = require("./application.controller");

const router = require("express").Router();

router.post("/", uploadResume, postApplication);
router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);

module.exports = { ApplicationRouter: router };
