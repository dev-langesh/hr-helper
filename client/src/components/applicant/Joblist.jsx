import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const res = {
  message: "all active jobs",
  data: [
    {
      _id: "64219f5127bbf279efb97491",
      title: "MERN stack developer",
      description: "desc",
      level: "beginer",
      job_type: "full time",
      skills: ["REACT", "NODE.JS"],
      salary_per_anum: 200000,
      experience: 3,
      required_employees: 50,
      status: "active",
      __v: 0,
    },
    {
      _id: "64219f9ceff1d30087b079cd",
      title: "Python developer",
      description: "desc",
      level: "beginer",
      job_type: "full time",
      skills: ["FLASK", "DJANGO"],
      salary_per_anum: 200000,
      experience: 5,
      required_employees: 100,
      status: "active",
      __v: 0,
    },
  ],
};

const Joblist = () => {
  return (
    <div className="p-5 bg-blue-200">
      <div>
        <h1 className="text-3xl font-bold ">Active Jobs Available Now</h1>
      </div>

      <div className="my-5">
        {res.data.map((n) => {
          return (
            <div>
              <Accordion className="my-2">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className="text-red-600 fontset">
                    <h1 className="text-2xl">{n.title}</h1>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <h1 className="text-2xl">
                      <span className="fontset">Description :</span>{" "}
                      {n.description}
                    </h1>
                  </Typography>
                  <button className="mt-4 bttng font-bold text-white py-1 px-3 rounded-md">
                    View Details
                  </button>
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Joblist;
