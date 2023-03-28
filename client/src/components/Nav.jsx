import React, { useEffect, useState } from "react";
import "./Nav.css";

function Navbar() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      setAuth(true);
    }
  }, []);

  return (
    // <nav className="bg-gray-100 h-16 flex justify-between items-center px-4">
    //   <div className="text-lg font-bold text-gray-800">Company Name</div>
    //   <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
    //     Sign In
    //   </button>
    // </nav>
    <div>
      <ul className="bg-blue-400 p-5 flex justify-end gap-5">
        {!auth && (
          <>
            <li>
              <a href="/" className="text-white tex font-bold">
                Home
              </a>
            </li>
            <li>
              <a href="/active-jobs" className="text-white font-bold">
                Active Jobs
              </a>
            </li>
          </>
        )}

        {auth && (
          <div className="flex space-x-5">
            <li>
              <a href="/admin" className="text-white tex font-bold">
                Home
              </a>
            </li>
            <li>
              <a href="/admin/post-job" className="text-white tex font-bold">
                Post Job
              </a>
            </li>
            <li>
              <a
                href="/admin/post-personality"
                className="text-white tex font-bold"
              >
                Personality
              </a>
            </li>{" "}
            <li>
              <a
                href="/apptitude/add-questions"
                className="text-white tex font-bold"
              >
                Apptitude
              </a>
            </li>{" "}
          </div>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
