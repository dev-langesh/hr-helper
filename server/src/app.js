const express = require("express");
const { JobRouter } = require("./routes/jobs/jobs.route");
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/job", JobRouter);

// default
app.get("/", (req, res) => {
  res.send("server is running");
});

module.exports = app;
