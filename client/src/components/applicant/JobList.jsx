import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const JobList = (props) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function get() {
      const req = await axios.get(`${import.meta.env.VITE_SERVER_URL}/job`);

      console.log(req.data);

      setState(req.data.data);
    }

    get();
  }, []);

  return (
    <>
      <div className="p-5 bg-gray-200 h-screen ">
        <div>
          <h1 className="text-2xl font-bold text-gray-700 ">
            Active Jobs Available Now
          </h1>
        </div>

        <div className="my-5 space-y-4">
          {state.map((job) => {
            return (
              <Card
                key={job._id}
                id={job._id}
                title={job.title}
                description={job.description}
                level={job.level}
                job_type={job.job_type}
                skills={job.skills}
                salary_per_anum={job.salary_per_anum}
                experience={job.experience}
                required_employees={job.required_employees}
                mode={props.mode}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

function Card({
  id,
  title,
  description,
  level,
  job_type,
  skills,
  salary_per_anum,
  experience,
  required_employees,
  mode,
}) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleApply = () => {
    if (mode === "hr") {
      window.location.href = `/applications/${id}`;
    } else {
      window.location.href = `/Applyjob/${id}`;
      window.localStorage.setItem("job_id", id);
    }
  };

  return (
    <div
      className="shadow-lg rounded-md p-6 bg-white hover:cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100"
      onClick={toggleDetails}
    >
      <div className="flex justify-between">
        <h1 className="font-bold text-xl text-gray-700">{title}</h1>
      </div>
      {!showDetails && (
        <p className="text-sm py-2 text-gray-500">{description}</p>
      )}
      {showDetails && (
        <div>
          <p className="text-sm text-gray-500 mt-2">
            Description: {description}
          </p>
          <p className="text-sm text-gray-500 mt-2">Level: {level}</p>
          <p className="text-sm text-gray-500 mt-2">Job Type: {job_type}</p>
          <p className="text-sm text-gray-500 mt-2">
            Skills: {skills.join(", ")}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Salary per annum: {salary_per_anum}
          </p>
          <p className="text-sm text-gray-500 mt-2">Experience: {experience}</p>
          <p className="text-sm text-gray-500 mt-2">
            Required employees: {required_employees}
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleApply}
          >
            {mode === "hr" ? "Show Applications" : "Apply Now"}
          </button>
        </div>
      )}
    </div>
  );
}

export default JobList;
