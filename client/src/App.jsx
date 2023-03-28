import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hrlogin from "./components/auth/login/Hrlogin";
import Nav from "./components/Nav";
import Applyjob from "./components/applicant/Applyjob";
import JobList from "./components/applicant/JobList";
import Jobinfo from "./components/applicant/Jobinfo";
import Post_job from "./components/hr/screens/Post_job";
import PostPersonalityQuestions from "./components/personality/PostPersonalityQuestions";
import Test from "./components/applicant/TestQ/Test";

function App() {
  return (
    <div className="">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route exact path="/admin" Component={Hrlogin} />
          <Route path="/admin/Post_job" Component={Post_job} />
          <Route path="/Applyjob" Component={Applyjob} />
          <Route path="/Jobinfo" Component={Jobinfo} />
          <Route path="/Joblist" Component={JobList} />
          <Route path="/personality-test" Component={Test} />
          <Route
            path="admin/post-personality"
            Component={PostPersonalityQuestions}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
