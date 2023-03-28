const { uploadFileToS3 } = require("../../../lib/aws/s3/uploadFileToS3");
const { sendMail } = require("../../../lib/sendMail");
const { Application } = require("../../../model/application.model");
const { Otp } = require("../../../model/otp.model");

async function postApplication(req, res) {
  try {
    if (!req.file) {
      throw new Error("Upload resume");
    }

    console.log(req.file);

    if (req.file.mimetype !== "application/pdf") {
      throw new Error("Upload in pdf format");
    }

    const s3_url = await uploadFileToS3(req.file);

    req.body.resume = s3_url;

    const application = await Application.create(req.body);

    console.log(application);

    res.json({ message: "application is created" });
  } catch (err) {
    if (err) res.json({ error: err.message });
  }
}

async function sendOtp(req, res) {
  try {
    const { email } = req.body;

    const otp = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

    const rec = await Otp.create({ email, otp });

    console.log(rec);

    await sendMail({
      subject: "OTP for email vderification",
      text: `Your otp for your job application is ${otp}`,
      to: email,
    });

    res.json({ message: "verification mail sent to your mail" });
  } catch (err) {
    if (err) res.json({ error: "Cant't send mail" });
  }
}

async function verifyOtp(req, res) {
  try {
    const { otp, email } = req.body;

    const rec = await Otp.findOneAndDelete({ email, otp });

    if (!rec) {
      res.json({ error: "Invalid credentials" });
    }

    res.json({ message: "verified" });
  } catch (err) {
    if (err) res.json({ error: "Not verified" });
  }
}

module.exports = { postApplication, sendOtp, verifyOtp };
