import React, { useState } from "react";

const Applyjob = (props) => {
  const [sendInfo, setInfo] = useState({
    email: "",
    name: "",
    file: "file link",
  });

  return (
    <div className=" p-5 flex justify-center">
      <form className="p-5 bg-blue-400 rounded-lg">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold">
            Applying for{" "}
            <span className="text-xl text-red-600">{props.jobrole}</span>
          </h1>
        </div>
        <div className="mt-4">
          <label>Email</label>
          <br />
          <input
            type="text"
            placeholder="Example@gmail.com"
            className="mt-1 px-2 py-1 rounded-md outline-none w-5/6"
            onChange={(e) => setInfo({ ...sendInfo, email: e.target.value })}
          />
        </div>
        <div className="mt-2">
          <label>Name</label>
          <br />
          <input
            type="text"
            placeholder="Your Name"
            className="mt-1 px-2 py-1 rounded-md  outline-none w-5/6"
            onChange={(e) => setInfo({ ...sendInfo, name: e.target.value })}
          />
        </div>
        <div className="mt-2">
          <label>Attach Your Resume Here,</label>
          <br />
          <input
            type="file"
            placeholder="Example@gmail.com"
            className="mt-1 px-2 py-1 rounded-md bg-white w-5/6 cursor-pointer"
          />
        </div>
        <div className="mt-3">
          <button
            onClick={() => {
              console.log(sendInfo);
            }}
            className="bttng py-1 text-white w-full font-bold rounded-md"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default Applyjob;
