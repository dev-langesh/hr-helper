const fs = require("fs").promises;
const { PutObjectCommand } = require("@aws-sdk/client-s3");
const { s3Client } = require("./s3Client");

async function uploadFileToS3(file) {
  const Body = await fs.readFile(file.path);

  const Key = file.filename;

  const params = {
    Bucket: process.env.S3_BUCKET,
    Key,
    Body,
  };

  await s3Client.send(new PutObjectCommand(params));

  const url = `https://hr-helper.s3.amazonaws.com/${Key}`;

  return url;
}

module.exports = { uploadFileToS3 };
