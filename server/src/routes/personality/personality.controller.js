const { Application } = require("../../../model/application.model");
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

async function postResult(req, res) {
  console.log(req.body);

  const applicant = await Application.findByIdAndUpdate(req.body.id, {
    $set: { personality: req.body.result },
  });

  console.log(applicant);

  res.json({ message: "success" });
}

module.exports = {
  postPersonalityQuestions,
  getPersonalityQuestions,
  postResult,
};
