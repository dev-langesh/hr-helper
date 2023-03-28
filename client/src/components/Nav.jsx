import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-100 h-16 flex justify-between items-center px-4">
      <div className="text-lg font-bold text-gray-800">Company Name</div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Sign In
      </button>
    </nav>
  );
}

export default Navbar;
