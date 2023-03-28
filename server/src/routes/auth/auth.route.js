const { login, sendOtp, verifyOtp } = require("./auth.controller");
const router = require("express").Router();

router.post("/login", login);
router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);

module.exports = { AuthRouter: router };
