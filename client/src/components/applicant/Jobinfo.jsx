import React, { useState } from "react";

const res = {
  message: "all active jobs",
  data: {
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
};

const Jobinfo = (props) => {
  console.log("d");
  return (
    <div className="p-5 bg-blue-200">
      <h1 className="text-3xl font-bold">Job Details</h1>
      <div className="mt-3"></div>
    </div>
  );
};

export default Jobinfo;
