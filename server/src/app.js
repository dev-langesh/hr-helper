const express = require("express");
const { ApplicationRouter } = require("./routes/application/application.route");
const { AuthRouter } = require("./routes/auth/auth.route");
const { JobRouter } = require("./routes/jobs/jobs.route");
const cors = require("cors");
const { PersonalityRouter } = require("./routes/personality/personality.route");
const { ApptitudeRouter } = require("./routes/apptitude/apptitude.route");

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors
app.use(cors());

// routes
app.use("/auth", AuthRouter);
app.use("/job", JobRouter);
app.use("/application", ApplicationRouter);
app.use("/personality", PersonalityRouter);
app.use("/apptitude", ApptitudeRouter);

// default
app.get("/", (req, res) => {
  res.send("server is running");
});

module.exports = app;
