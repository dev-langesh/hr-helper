import axios from "axios";
import React, { useRef, useState } from "react";

const Applyjob = (props) => {
  const [sendInfo, setInfo] = useState({
    email: "",
    name: "",
    otp: "",
    verified_email: false,
    phone: "",
  });
  const [otpStatus, setOtpStatus] = useState("Send Otp");

  const ref = useRef(null);

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

      console.log("formdata", formData);

      const req = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/application`,
        formData
      );

      console.log(req.data);
    }

    console.log(sendInfo);
  }

  return (
    <div className=" p-5 flex justify-center">
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className="p-5 shadow-2xl rounded-lg"
      >
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold">
            Applying for{" "}
            <span className="text-xl text-red-600">{props.jobrole}</span>
          </h1>
        </div>
        <div className="mt-4">
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={sendInfo.name}
            placeholder="Enter your name"
            className="mt-1 px-2 py-1 rounded-md outline-none w-5/6"
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
              value={sendInfo.email}
              placeholder="Example@gmail.com"
              className="mt-1 px-2 py-1 rounded-md outline-none "
              onChange={(e) => setInfo({ ...sendInfo, email: e.target.value })}
            />
            <button onClick={sendOtp} className="bg-blue-500 text-white p-1">
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
                className="mt-1 px-2 py-1 rounded-md outline-none "
                onChange={(e) => setInfo({ ...sendInfo, otp: e.target.value })}
              />
              <button
                onClick={verifyOtp}
                className="bg-blue-500 text-white p-1"
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
            value={sendInfo.phone}
            placeholder="Enter your mobile Number"
            className="mt-1 px-2 py-1 rounded-md outline-none w-5/6"
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
