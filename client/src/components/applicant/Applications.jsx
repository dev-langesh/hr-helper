import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Applications() {
  const [state, setState] = useState([]);

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
    }

    get();
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold text-gray-800 pb-6 ">Applications</h1>

      {state.map((application) => {
        return <Card key={application._id} {...application} />;
      })}
    </div>
  );
}

function Card({ name, email }) {
  return (
    <div className="bg-white shadow-xl p-3 md:w-1/2 border-l-4 border-blue-500">
      <h1 className="text-gray-600 font-bold ">{name}</h1>
      <p className="text-xs text-slate-500">{email}</p>
    </div>
  );
}
