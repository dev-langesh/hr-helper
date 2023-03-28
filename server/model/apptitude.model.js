const mongoose = require("mongoose");

const schema = mongoose.Schema({
  category: String,
  questions: [
    {
      question_text: String,
      option1: String,
      option2: String,
      option3: String,
      option4: String,
      answer: String,
    },
  ],
});

const model = mongoose.model("apptitude", schema);

module.exports = { Apptitude: model };
