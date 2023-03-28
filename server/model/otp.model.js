const mongoose = require("mongoose");

const schema = mongoose.Schema({
  email: { type: String, required: true },
  otp: { type: Number },
});

const model = mongoose.model("otp", schema);

module.exports = { Otp: model };
