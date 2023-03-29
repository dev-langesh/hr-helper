const {
  postPersonalityQuestions,
  getPersonalityQuestions,
  postResult,
} = require("./personality.controller");

const router = require("express").Router();

router.post("/", postPersonalityQuestions);
router.post("/result", postResult);
router.get("/", getPersonalityQuestions);

module.exports = { PersonalityRouter: router };
