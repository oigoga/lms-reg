import React from "react";
import Welcome from "./Welcome";
import { Route, Routes } from "react-router-dom";
import Adminsu from "./Adminsu";
import StudentSu from "./Studentsu";
import Verification from "./Verification";
import Adminsi from "./Adminsi";
import Studentsi from "./Studentsi"
const Content = () => {
  return <>
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/admin-signup" element={<Adminsu/>}/>
      <Route path="/student-signup" element={<StudentSu/>}/>
      <Route path="/verification" element={<Verification/>}/>
      <Route path="/admin-signin" element={<Adminsi/>}/>
      <Route path="/student-signin" element={<Studentsi/>}/>
    </Routes>
    
  </>;
};

export default Content;
