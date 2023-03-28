import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hrlogin from "./components/auth/login/Hrlogin";
import Nav from "./components/Nav";
import Applyjob from "./components/applicant/Applyjob";
import Joblist from "./components/applicant/Joblist";
import Jobinfo from "./components/applicant/Jobinfo";
import Post_job from "./components/hr/screens/Post_job";
import Test from "./components/applicant/Test";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Nav />
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Hrlogin} />
          <Route exact path="/Post_job" Component={Post_job} />
        </Routes>
      </BrowserRouter> */}

      {/* <Hrlogin /> 
      {/* <Applyjob jobrole="MERN STACK Developer " /> */}
      {/*<Joblist />*/}
      {/* <Jobinfo id="64219f5127bbf279efb97491" /> */}
      {/* <Post_job /> */}
      <Test />
    </div>
  );
}

export default App;
