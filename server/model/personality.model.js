const mongoose = require("mongoose");

const schema = mongoose.Schema({
  questions: [
    {
      question_text: {
        type: String,
        required: true,
      },
      ans_type: String,
    },
  ],
});

const model = mongoose.model("personality", schema);

module.exports = { Personality: model };
