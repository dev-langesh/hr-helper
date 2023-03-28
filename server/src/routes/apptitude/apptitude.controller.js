const { Apptitude } = require("../../../model/apptitude.model");

async function addApptitudeQuestions(req, res) {
  const q = await Apptitude.create(req.body);

  console.log(q);

  res.json({ message: "success" });
}

async function getApptitudeQuestions(req, res) {
  const questions = await Apptitude.find({});

  res.json({ data: questions });
}

module.exports = { getApptitudeQuestions, addApptitudeQuestions };
