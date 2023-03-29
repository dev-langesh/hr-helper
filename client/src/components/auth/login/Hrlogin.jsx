import axios from "axios";
import React, { useState } from "react";
// import LockIcon from "@mui/icons-material/Lock";

const Hrlogin = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

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

    const res = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/auth/login`,
      state
    );

    console.log(res.data);
  }

  return (
    <div className="bg-gray-100 w-screen h-screen p-5 flex items-center justify-center">
      {/* <div className="bg-blue-600 "> */}
      <div className="bg-white p-5  rounded-xl w-fit shad">
        <form onSubmit={handleSubmit} className="p-5">
          <div className="flex justify-center">
            <h1 className="text-4xl font-bold text-blue-700 border-b-4 pb-1 ">
              Login
            </h1>
          </div>
          <div className="flex items-end mt-5">
            <label>
              <i class="bi bi-person-fill text-3xl "></i>
            </label>
            <br />
            <input
              type="text"
              name="email"
              value={state.email}
              onChange={changeHandler}
              className="ml-4 mt-4 px-2 py-1 rounded-md border-1 aa"
              placeholder="Enter Username"
            />
          </div>
          <div className="flex items-end mt-5">
            <label>
              <i class="bi bi-lock-fill text-3xl "></i>
            </label>
            <br />
            <input
              type="text"
              name="password"
              value={state.password}
              onChange={changeHandler}
              className="ml-4 mt-2 px-2 py-1 rounded-md aa"
              placeholder="Enter Password"
            />
          </div>
          {/* <div className="mt-3 flex justify-end">
            <a className="text-sm forget" href="#">
              forget password?
            </a>
          </div> */}

          <div className="mt-9">
            <button className="bttn w-full bg-blue-500 hover:bg-blue-700 rounded-md font-bold py-1">
              Sign In
            </button>
          </div>
        </form>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Hrlogin;
