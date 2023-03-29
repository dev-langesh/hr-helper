import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Navbar() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      setAuth(true);
    }
  }, []);

  return (
    <nav className="sm:flex md:flex block p-3 justify-between">
      <h1 className="sm:text-2xl md:text-2xl text-xl sm:text-start md:text-start text-center font-bold text-white">
        Company Name
      </h1>
      <ul className="flex sm:justify-end md:justify-end justify-center gap-5 pr-4 sm:mt-0 md:mt-0 mt-4">
        <li>
          <a
            onClick={navigateHome}
            className="text-white font-bold foot cursor-pointer"
          >
            Home
          </a>
        </li>
        <li>
          <a
            onClick={navigateCareer}
            className="text-white font-bold foot cursor-pointer"
          >
            Careers
          </a>
        </li>
        <li>
          <a
            onClick={navigateContact}
            className="text-white font-bold foot cursor-pointer"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
