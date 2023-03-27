const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  level: { type: String, require: true },
  job_type: { type: String, require: true },
  skills: { type: [String], require: true },
  salary: { type: Number, required: true },
  experience: { type: Number, required: true },
  required_employees: { type: Number, required: true },
});

const Job = mongoose.model("job", schema);

module.exports = { Job };
