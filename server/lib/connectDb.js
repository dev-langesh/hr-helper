const mongoose = require("mongoose");

async function connectDb() {
  try {
    const MONGO_URI = process.env.MONGO_URI;

    const conn = await mongoose.connect(MONGO_URI);

    if (conn) {
      console.log("connected to mongodb");
    }
  } catch (err) {
    if (err) {
      console.log("error", err.message);
    }
  }
}

module.exports = { connectDb };
