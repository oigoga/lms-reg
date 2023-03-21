import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome"
import { } from "react-router-dom";
import Adminsu from "./components/Adminsu";
import StudentSu from "./components/Studentsu";
import Verification from "./components/Verification";
import Adminsi from "./components/Adminsi";
import Studentsi from "./components/Studentsi"
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

function App() {
  

  return (
    <>
      <BrowserRouter>
          
        <Content />
      </BrowserRouter>
    </>
  );
}

export default App;
