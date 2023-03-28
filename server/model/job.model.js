const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  level: { type: String, require: true },
  job_type: { type: String, require: true },
  skills: { type: [String], require: true },
  salary_per_anum: { type: Number, required: true },
  experience: { type: Number, default: 0 },
  required_employees: { type: Number, required: true },
  status: { type: String, default: "active" },
});

const Job = mongoose.model("job", schema);

module.exports = { Job };
