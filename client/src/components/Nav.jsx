import React from "react";
import "./Nav.css";

function Navbar() {
  return (
    // <nav className="bg-gray-100 h-16 flex justify-between items-center px-4">
    //   <div className="text-lg font-bold text-gray-800">Company Name</div>
    //   <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
    //     Sign In
    //   </button>
    // </nav>
    <div>
      <ul className="bg-blue-400 p-5 flex justify-end gap-5">
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
      </ul>
    </div>
  );
}

export default Navbar;
