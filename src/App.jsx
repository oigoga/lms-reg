import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome"
import { } from "react-router-dom";
import AdminSignUp from "./pages/AdminSignUp";
import StudentSignUp from "./pages/StudentSignUp";
import Verification from "./pages/Verification";
import AdminSignIn from "./pages/AdminSignIn";
import StudentSignIn from "./pages/StudentSignIn";
import Resetpassword from "./pages/Resetpassword";
import Loginmain from "./pages/Loginmain";
import Dashboard from "./pages/Dashboard";
const Content = () => {
  return <>
    <Routes>
    
      <Route path="/" element={<Welcome/>}/>
      <Route path="/admin-signup" element={<AdminSignUp/>}/>
      <Route path="/student-signup" element={<StudentSignUp/>}/>
      <Route path="/verification" element={<Verification/>}/>
      <Route path="/admin-signin" element={<AdminSignIn/>}/>
      <Route path="/student-signin" element={<StudentSignIn/>}/>
      <Route path="/reset-password" element={<Resetpassword/>}/>
      <Route path="/main-login" element={<Loginmain/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
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
