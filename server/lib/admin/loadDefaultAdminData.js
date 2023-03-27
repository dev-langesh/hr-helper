const { Admin } = require("../../model/admin.model");
const { defaultAdminData } = require("./defaultAdminData");
const bcrypt = require("bcrypt");

async function loadDefaultAdminData() {
  try {
    const admin = await Admin.findOne({});

    if (!admin) {
      const adminDataCopy = { ...defaultAdminData };

      // hashing password
      const hashedPassword = await bcrypt.hash(adminDataCopy.password, 16);

      adminDataCopy.password = hashedPassword;

      // updating to db
      await Admin.create(defaultAdminData);

      console.log("loaded admin data");
    }
  } catch (err) {
    if (err) console.log(err);
  }
}

module.exports = { loadDefaultAdminData };
