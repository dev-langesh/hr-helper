import React from "react";

const Nav = () => {
  return (
    <div>
      <ul className="bg-blue-600 p-5 flex justify-end gap-5">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Application</a>
        </li>
        <li>
          <a href="#">Sign In</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
