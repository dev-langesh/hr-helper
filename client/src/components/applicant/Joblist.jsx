import React, { useEffect, useState } from "react";
import axios from "axios";

const Joblist = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function get() {
      const req = await axios.get(`${import.meta.env.VITE_SERVER_URL}/job`);

      setState(req.data.data);
    }

    get();
  }, []);

  return (
    <div className="p-5 bg-blue-100 h-screen ">
      <div>
        <h1 className="text-3xl font-bold ">Active Jobs Available Now</h1>
      </div>

      <div className="my-5 space-y-4">
        {state.map((job) => {
          return <Card title={job.title} description={job.description} />;
        })}
      </div>
    </div>
  );
};

function Card({ title, description }) {
  return (
    <div className="shadow-lg rounded-none p-3 bg-white hover:cursor-pointer">
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="text-sm text-slate-500">{description}</p>
    </div>
  );
}

export default Joblist;
