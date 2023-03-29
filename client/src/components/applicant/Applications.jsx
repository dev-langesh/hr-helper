import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BarChart from "../chart/BarChart";

export default function Applications() {
  const [state, setState] = useState([]);
  const [applicant, setApplicant] = useState([]);
  const [personality, setPersonality] = useState("");
  const [score, setScore] = useState(0);

  const { job_id } = useParams();

  useEffect(() => {
    async function get() {
      const req = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/application/${job_id}`
      );

      console.log(req.data);

      if (req.data) {
        setState(req.data.data);
      }

      setApplicant(req.data.data[0]);
    }

    get();
  }, []);

  useEffect(() => {
    async function get() {
      if (applicant.personality) {
        console.log(applicant.personality);
        const req = await axios.post(`http://localhost:8001/personality/`, {
          personality: applicant.personality,
        });

        const req1 = await axios.get(`http://localhost:8001/candidate/`);

        console.log(req1.data);

        const data = JSON.parse(req.data);

        const sc = JSON.parse(req1.data);

        setScore(sc.score);

        setPersonality(data.personality_type);
      }
    }

    get();
  }, [applicant]);

  function updateApplicant(id) {
    console.log(id);

    const newApplicant = state.find((app) => {
      return app._id === id;
    });

    console.log(newApplicant);

    setApplicant(newApplicant);
  }

  return (
    <div className="p-6 space-y-4 grid grid-cols-12">
      <section className="col-span-4 space-y-4">
        <h1 className="text-xl font-bold text-gray-800 pb-6 ">
          Applicants Dashboard
        </h1>

        {state.map((application) => {
          return (
            <Card
              applicant_id={applicant._id}
              updateApplicant={updateApplicant}
              key={application._id}
              {...application}
            />
          );
        })}
      </section>

      <section className="col-span-8 p-2">
        {applicant.apptitude && <BarChart apptitude={applicant.apptitude} />}

        <h1 className="text-sm text-gray-500 py-2">
          Personality : {personality}
        </h1>
        <h1 className="text-sm text-gray-500 py-2">
          Candidate Score : {score}
        </h1>
      </section>
    </div>
  );
}

function Card({ name, email, _id, applicant_id, updateApplicant }) {
  console.log(_id, applicant_id);

  if (_id === applicant_id) {
    return (
      <div
        onClick={() => updateApplicant(_id)}
        className={`bg-white shadow-xl p-3 md:w-60 border-l-4  border-blue-500
      `}
      >
        <h1 className="text-gray-600 font-bold ">{name}</h1>
        <p className="text-xs text-slate-500">{email}</p>
      </div>
    );
  }

  return (
    <div
      onClick={() => updateApplicant(_id)}
      className={`bg-white shadow-xl p-3 md:w-60 border-l-4  border-gray-500
      `}
    >
      <h1 className="text-gray-600 font-bold ">{name}</h1>
      <p className="text-xs text-slate-500">{email}</p>
    </div>
  );
}
