const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: { type: String, required: true },
    id: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
  },
  { collection: "admin" }
);

const model = mongoose.model("admin", schema);

module.exports = { Admin: model };
