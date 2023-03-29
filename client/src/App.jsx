import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hrlogin from "./components/auth/login/Hrlogin";
import Applyjob from "./components/applicant/Applyjob";
import Joblist from "./components/applicant/Joblist";
import Jobinfo from "./components/applicant/Jobinfo";
import Post_job from "./components/hr/screens/Post_job";
import Test from "./components/applicant/TestQ/Test";
import Contact from "./components/applicant/Contact";
import Home from "./components/applicant/Home";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/Contact" Component={Contact} />
          <Route exact path="/admin" Component={Hrlogin} />
          <Route path="/admin/postjob" Component={Post_job} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
