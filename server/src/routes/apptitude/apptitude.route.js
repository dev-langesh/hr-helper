const {
  addApptitudeQuestions,
  getApptitudeQuestions,
} = require("./apptitude.controller");

const router = require("express").Router();

router.post("/", addApptitudeQuestions);
router.get("/", getApptitudeQuestions);

module.exports = { ApptitudeRouter: router };
