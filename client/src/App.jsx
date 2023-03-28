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
import Model from "./components/Model";
import HrDashboard from "./components/hr/screens/HrDashboard";
import Applications from "./components/applicant/Applications";

function App() {
  return (
    <div className="">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route exact path="/admin" Component={HrDashboard} />
          <Route path="/" Component={Model} />
          <Route path="/admin/post-job" Component={Post_job} />
          <Route path="/Applyjob/:job_id" Component={Applyjob} />
          <Route path="/active-jobs" Component={JobList} />
          <Route path="/personality-test" Component={Test} />
          <Route path="/applications/:job_id" Component={Applications} />
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
