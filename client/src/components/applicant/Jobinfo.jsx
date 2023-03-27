import React, { useState } from "react";

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

const Jobinfo = (props) => {
  return (
    <div className="p-5 bg-blue-200">
      <h1 className="text-3xl font-bold">Job Details</h1>
      <div className="mt-3">
        {res.data.map((n) => {
          if (n._id == props.id) {
            return (
              <div>
                <h1 className="text-3xl font-bold">{n.title}</h1>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Jobinfo;
