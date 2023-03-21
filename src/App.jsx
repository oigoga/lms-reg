import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome"
import { } from "react-router-dom";
import Adminsu from "./pages/Adminsu";
import StudentSu from "./pages/Studentsu";
import Verification from "./pages/Verification";
import Adminsi from "./pages/Adminsi";
import Studentsi from "./pages/Studentsi"
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
