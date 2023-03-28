const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    // job_id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true, unique: true },
    resume: { type: String, required: true },
    verified_email: { type: Boolean, required: true },
  },
  { collection: "application" }
);

const model = mongoose.model("application", schema);

module.exports = { Application: model };
