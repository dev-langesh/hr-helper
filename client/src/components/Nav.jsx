import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <ul className="bg-blue-400 p-5 flex justify-end gap-5">
        <li>
          <a href="#" className="text-white tex font-bold">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-white font-bold">
            Application
          </a>
        </li>
        <li>
          <a href="#" className="text-white font-bold">
            Sign In
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
