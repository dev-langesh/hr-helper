import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { redirect, useParams } from "react-router-dom";

const Applyjob = (props) => {
  const [sendInfo, setInfo] = useState({
    email: "",
    name: "",
    otp: "",
    verified_email: false,
    phone: "",
    job_title: "",
    job_id: "",
  });
  const [otpStatus, setOtpStatus] = useState("Send Otp");

  const ref = useRef(null);

  const { job_id } = useParams();

  useEffect(() => {
    async function get() {
      const req = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/job/${job_id}`
      );

      console.log(req.data);

      setInfo((p) => {
        return {
          ...p,
          job_title: req.data.data.title,
        };
      });
    }
    get();
  }, []);

  async function sendOtp() {
    setOtpStatus("Loading...");
    const req = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/auth/send-otp`,
      { email: sendInfo.email }
    );

    setOtpStatus("Send Otp");
  }

  async function verifyOtp() {
    const req = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/auth/verify-otp`,
      { email: sendInfo.email, otp: sendInfo.otp }
    );

    if (!req.data.error) {
      sendInfo.verified_email = true;
      setOtpStatus("verified");
    } else {
      alert("Not verified");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (ref.current) {
      const formData = new FormData(ref.current);

      formData.append("job_id", job_id);
      formData.append("verified_email", sendInfo.verified_email);

      console.log("formdata", formData);

      const req = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/application`,
        formData
      );

      console.log(req.data);

      if (!req.data.error) {
        window.location = "/personality-test";
      }
    }
  }

  return (
    <div className=" p-5 flex justify-center">
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className="p-5 shadow-2xl rounded-lg"
      >
        <div className="flex justify-center">
          <h1 className="text-3xl text-gray-600 font-bold">
            Applying for{" "}
            <span className="text-xl text-red-600">{sendInfo.job_title}</span>
          </h1>
        </div>
        <div className="mt-4">
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="border mt-1 px-2 py-1  outline-none w-5/6"
            onChange={(e) => setInfo({ ...sendInfo, email: e.target.value })}
          />
        </div>

        <div className="mt-4">
          <label>Email</label>
          <br />
          <div className="flex items-center">
            <input
              name="email"
              type="text"
              placeholder="Example@gmail.com"
              className="border px-2 py-1  outline-none "
              onChange={(e) => setInfo({ ...sendInfo, email: e.target.value })}
            />
            <button
              onClick={sendOtp}
              className="bg-indigo-500 text-white p-1 px-2"
            >
              {otpStatus}
            </button>
          </div>
        </div>

        {otpStatus !== "verified" && (
          <div className="mt-4">
            <label>Enter Otp</label>
            <br />
            <div className="flex items-center">
              <input
                type="Number"
                placeholder="otp"
                className="border  px-2 py-1  outline-none "
                onChange={(e) => setInfo({ ...sendInfo, otp: e.target.value })}
              />
              <button
                onClick={verifyOtp}
                className="bg-indigo-500 text-white p-1 px-2"
              >
                verify Otp
              </button>
            </div>
          </div>
        )}

        <div className="mt-4">
          <label>Phone</label>
          <br />
          <input
            type="text"
            name="phone"
            placeholder="Enter your mobile Number"
            className="border mt-1 px-2 py-1  outline-none w-5/6"
            onChange={(e) => setInfo({ ...sendInfo, email: e.target.value })}
          />
        </div>

        <div className="mt-2">
          <label>Attach Your Resume Here,</label>
          <br />
          <input
            type="file"
            name="resume"
            placeholder="Example@gmail.com"
            className="border mt-1 px-2 py-1  bg-white w-5/6 cursor-pointer"
          />
        </div>

        {/* <iframe
          src="https://impira-docquery.hf.space"
          frameborder="0"
          width="850"
          height="450"
        ></iframe> */}

        <div className="mt-3">
          {/* <button
            onClick={() => {
              console.log(sendInfo);
            }}
            className=" py-1 text-white w-full font-bold rounded-md"
          >
            Apply
          </button> */}
          <button
            onClick={() => {
              console.log(sendInfo);
            }}
            className=" py-2 px-3 hover:ring  bg-indigo-500 text-white font-bold w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Applyjob;
