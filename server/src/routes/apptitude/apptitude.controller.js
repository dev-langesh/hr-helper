const { Application } = require("../../../model/application.model");
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

// POST /application/score/?application_id=
async function updateScore(req, res) {
  const { application_id } = req.query;

  console.log(req.body);

  const data = await Application.findByIdAndUpdate(
    application_id,
    {
      $set: { apptitude: req.body },
    },
    { new: true }
  );

  console.log(data);

  res.json({ message: "success" });
}

module.exports = { getApptitudeQuestions, addApptitudeQuestions, updateScore };
