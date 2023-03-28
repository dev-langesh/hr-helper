import React from "react";

function Nav() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <p className="text-2 text-white font-bold text-2xl">Company name</p>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 py-3 flex items-center md:ml-6">
              <button className="bg-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
