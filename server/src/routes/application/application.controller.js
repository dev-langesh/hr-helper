const { uploadFileToS3 } = require("../../../lib/aws/s3/uploadFileToS3");
const { Application } = require("../../../model/application.model");

async function postApplication(req, res) {
  try {
    if (!req.file) {
      throw new Error("Upload resume");
    }

    console.log(req.file);

    // if (req.file.mimetype !== "application/pdf") {
    //   throw new Error("Upload in pdf format");
    // }

    const s3_url = await uploadFileToS3(req.file);

    req.body.resume = s3_url;

    const application = await Application.create(req.body);

    console.log(application);

    res.json({ message: "application is created" });
  } catch (err) {
    if (err) res.json({ error: err.message });
  }
}

module.exports = { postApplication };
