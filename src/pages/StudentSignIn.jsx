import React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import Logo from "../assets/assets";
import axios from "../api/axios";
import Dashboard from "./Dashboard";
function validatePassword(password) {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  return regex.test(password);
}

const Login_url = 'auth/verify-login/{otp}';

const StudentSignIn = () => {
  const { setAuth } = useContext(AuthContext);


  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [error, setError] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [lockedUntil, setLockedUntil] = useState(null);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
 

  function handlePasswordChange(event) {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setPasswordError(
      validatePassword(newPassword)
        ? ""
        : "Password must be at least 8 characters long, contain at least one uppercase letter, one symbol, and one number"
    );
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Check if the username and password are correct
    if (email === "email" && password === "password") {
      // Successful login
      setAttempts(0);
      setError(null);
    } else {
      // Incorrect login credentials
      setAttempts(attempts + 1);
      setError("Invalid username or password");
      if (attempts === 2) {
        // Account locked after 3 unsuccessful attempts
        setLockedUntil(Date.now() + 30 * 60 * 1000); // Lock account for 30 minutes
      }
    }

try{
const response = await axios.post(Login_url, 
  JSON.stringify({email, password}),
  {
    headers: {'Content-Type': 'application/json'},
   withCredentials: true 
  });

  console.log(JSON.stringify(response?.data));

  const accessToken = response?.data?.accessToken;
  setAuth({email, password, accessToken})
} catch(error) {
 if(!error?.response) {
  setErrMsg('No server response')
 } else if (errMsg.response?.status === 4000) {
  setErrMsg('Missing details')
 } else{
  setErrMsg('Login failed')
 }
 
}
    console.log(email, password);
    setEmail('')
    setPassword('')
    
  }
  
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const isLocked = lockedUntil && lockedUntil > Date.now();
  
  
  return (
    <>
    {success ? (
        <Dashboard/>
      ) : (
      <div className="font-Montserrat md:h-screen pb-5  flex flex-col    bg-white ">
      <div className="h-[25%] w-[35%] md:h-[20%] md:w-[20%] -mt-10 -ml-5 md:mt-0 md:ml-0 fixed z-10">
          <img src={Logo} alt="" className='h-full w-full'/>
        </div>
        <form
          action="submit"
          onSubmit={handleSubmit}
          className="h-1/2 drop-shadow-2xl rounded-xl mx-[5%] md:mx-[15%] bg-bg-color p-5 mt-20 "
        >
          <h2 className="font-bold text-center">
            Sign In to your Account
            <span className="text-brown"> (Student)</span>
          </h2>

          <div className="my-20">
            <div className="border-b-2 border-border  w-full mt-4    py-2">
              <input
                type="email"
                className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                required
                value={email}
                onChange={handleEmailChange}
                disabled={isLocked}
                placeholder="Email"
              />
            </div>
            <div className="border-b-2 border-border w-full  mt-4   py-2">
              <input
                type="password"
                className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                required
                onChange={handlePasswordChange}
                value={password}
                placeholder="Password"
              />
              {passwordError && (
                <div style={{ color: "red" }}>{passwordError}</div>
              )}
              {error && <div style={{ color: "red" }}>{error}</div>}
              {isLocked && (
                <div style={{ color: "aqua" }}>
                  Account locked until{" "}
                  {new Date(lockedUntil).toLocaleTimeString()}
                </div>
              )}
            </div>
            <div>
              <p className="font-bold text-center mt-5 ">
                Forgotten your password?{" "}
                <span className="text-brown" >
                  <NavLink to="/reset-password">Reset password</NavLink>
                </span>
              </p>
            </div>

            <NavLink to="/dashboard">
              <div className="flex justify-center my-7">
                <button
                  type="submit"
                 
                  className="px-2 w-3/4 hover:bg-brown border-border border-2 text-black font-Montserrat hover:text-white text-base md:w-1/4 rounded-md py-2"
                >
                  Sign In
                </button>
              </div>
            </NavLink>
          </div>
        </form>
        <div>
          <p className="font-bold text-center mt-5 ">
            Don't have an account?{" "}
            <span className="text-brown">
              <NavLink to="/student-signup">Sign Up</NavLink>
            </span>
          </p>
        </div>
      </div>
      )}
    </>
  );
};

export default StudentSignIn;
