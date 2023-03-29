import { useNavigate } from "react-router-dom";
import React from "react";

function Home() {
  const navigate = useNavigate();

  const navigateConatct = () => {
    navigate("/Contact");
  };

  return (
    <div>
      <button onClick={navigateConatct} className=" bg-blue-500">
        Hello
      </button>
    </div>
  );
}

export default Home;
