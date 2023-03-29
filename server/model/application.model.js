const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true, unique: true },
    resume: { type: String, required: true },
    verified_email: { type: Boolean, default: false },
    job_id: { type: String, required: true },
    apptitude: {
      quants: { type: Number, default: 0 },
      verbal: { type: Number, default: 0 },
      logical: { type: Number, default: 0 },
    },

    resume_result: [
      {
        question: String,
        answer: String,
      },
    ],
  },
  { collection: "application" }
);

const model = mongoose.model("application", schema);

module.exports = { Application: model };
