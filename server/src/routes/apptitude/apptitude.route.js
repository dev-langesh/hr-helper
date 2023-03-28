const {
  addApptitudeQuestions,
  getApptitudeQuestions,
  updateScore,
} = require("./apptitude.controller");

const router = require("express").Router();

router.post("/", addApptitudeQuestions);
router.post("/score", updateScore);
router.get("/", getApptitudeQuestions);

module.exports = { ApptitudeRouter: router };
