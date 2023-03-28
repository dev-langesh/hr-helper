import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hrlogin from "./components/auth/login/Hrlogin";
import Nav from "./components/Nav";
import Applyjob from "./components/applicant/Applyjob";
import Joblist from "./components/applicant/Joblist";
import Jobinfo from "./components/applicant/Jobinfo";
import Post_job from "./components/hr/screens/Post_job";
import Test from "./components/applicant/TestQ/Test";
import Contact from "./components/applicant/Contact";

function App() {
  return (
    <div className="">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Hrlogin} />
          <Route exact path="/Post_job" Component={Post_job} />
          <Route exact path="/Contact" Component={Contact} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
