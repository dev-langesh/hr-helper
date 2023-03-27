const express = require("express");
const { ApplicationRouter } = require("./routes/application/application.route");
const { AuthRouter } = require("./routes/auth/auth.route");
const { JobRouter } = require("./routes/jobs/jobs.route");

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/auth", AuthRouter);
app.use("/job", JobRouter);
app.use("/application", ApplicationRouter);

// default
app.get("/", (req, res) => {
  res.send("server is running");
});

module.exports = app;
