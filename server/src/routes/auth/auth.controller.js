const { Admin } = require("../../../model/admin.model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../../../lib/admin/generateToken");

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

module.exports = { login };
