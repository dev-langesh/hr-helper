const { Personality } = require("../../../model/personality.model");

async function postPersonalityQuestions(req, res) {
  const { questions } = req.body;

  console.log(questions);

  const rec = await Personality.create({ questions });

  console.log(rec);

  res.json({ message: "success" });
}

async function getPersonalityQuestions(req, res) {
  const questions = await Personality.find({});

  res.json({ data: questions });
}

module.exports = { postPersonalityQuestions, getPersonalityQuestions };
