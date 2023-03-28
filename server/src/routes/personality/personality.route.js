const {
  postPersonalityQuestions,
  getPersonalityQuestions,
} = require("./personality.controller");

const router = require("express").Router();

router.post("/", postPersonalityQuestions);
router.get("/", getPersonalityQuestions);

module.exports = { PersonalityRouter: router };
