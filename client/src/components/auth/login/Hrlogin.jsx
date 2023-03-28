import axios from "axios";
import React, { useState } from "react";
import { redirect } from "react-router-dom";
// import LockIcon from "@mui/icons-material/Lock";

const Hrlogin = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  function changeHandler(e) {
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const res = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/auth/login`,
      state
    );

    setLoading(false);

    console.log(res.data);

    const token = res.data.token;

    window.localStorage.setItem("token", token);

    window.location = "/admin";

    // redirect("/admin/post-job");
  }

  return (
    <div className="bg-blue-600 w-screen h-screen p-5 flex items-center justify-center">
      {/* <div className="bg-blue-600 "> */}
      <div className="bg-red-600 p-5 border-4 rounded-xl w-fit shad">
        <form onSubmit={handleSubmit} className="p-5">
          <div className="flex justify-center">
            <h1 className="text-4xl font-bold border-b-4 pb-1 text-white">
              Login
            </h1>
          </div>
          <div className="mt-5">
            {/* <label>Username</label>
            <br /> */}
            <input
              type="text"
              name="email"
              value={state.email}
              onChange={changeHandler}
              className="mt-4 px-2 py-1 rounded-md aa"
              placeholder="Enter Username"
            />
          </div>
          <div>
            <label>{/* <LockIcon /> */}</label>
            <br />
            <input
              type="text"
              name="password"
              value={state.password}
              onChange={changeHandler}
              className="mt-2 px-2 py-1 rounded-md aa"
              placeholder="Enter Password"
            />
          </div>
          <div className="mt-3 flex justify-end">
            <a className="text-sm forget" href="#">
              forget password?
            </a>
          </div>

          <div className="mt-9">
            <button className="bttn w-full rounded-md font-bold py-1">
              {loading ? "Loading.." : "Sign In"}
            </button>
          </div>
        </form>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Hrlogin;
