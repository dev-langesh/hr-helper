const { Admin } = require("../../../model/admin.model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../../../lib/admin/generateToken");
const { Otp } = require("../../../model/otp.model");
const { sendMail } = require("../../../lib/sendMail");

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      throw new Error("Invalid credentials");
    }

    const passMatch = await bcrypt.compare(password, admin.password);

    if (!passMatch) {
      throw new Error("Invalid credentials");
    }

    const payload = {
      id: admin._id,
    };

    const token = generateToken(payload);

    res.json({ message: "login success", token });
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
    if (err) {
      console.log(err);
      res.json({ error: "Cant't send mail" });
    }
  }
}

async function verifyOtp(req, res) {
  try {
    const { otp, email } = req.body;

    const rec = await Otp.findOneAndDelete({ email, otp });

    if (!rec) {
      return res.json({ error: "Invalid credentials" });
    }

    return res.json({ message: "verified" });
  } catch (err) {
    if (err) res.json({ error: "Not verified" });
  }
}

module.exports = { login, verifyOtp, sendOtp };
