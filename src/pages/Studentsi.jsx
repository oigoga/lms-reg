import React from "react";
import { useState, useEffect, useRef } from "react";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import Logo from "../assets/assets";
import axios from "axios";
function validatePassword(password) {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  return regex.test(password);
}

const Studentsi = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [error, setError] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [lockedUntil, setLockedUntil] = useState(null);

 

  function handlePasswordChange(event) {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setPasswordError(
      validatePassword(newPassword)
        ? ""
        : "Password must be at least 8 characters long, contain at least one uppercase letter, one symbol, and one number"
    );
  }
  function handleSubmit(event) {
    event.preventDefault();
    // Check if the username and password are correct
    if (username === "example" && password === "password") {
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
  }
  const signIn = (event) => {
    

    axios
      .post("https://learningmanagement-staging.up.railway.app/api/learning-mgt/v1/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        // Store the access token in local storage or a state variable
        localStorage.setItem("accessToken", response.data.accessToken);

        // Redirect to the dashboard or home page
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Failed to log in.");
      });
  };
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const isLocked = lockedUntil && lockedUntil > Date.now();
  const forgotPassword = async(email) => {
    return axios
      .post(
        "https://learningmanagement-staging.up.railway.app/api/learning-mgt/v1/auth/forgot-password/{email}",
        { email }
      )
      .then((response) => {
        console.log("Email sent successfully", response);
      })
      .catch((error) => {
        console.error("Error sending email", error);
      });
  };

  forgotPassword("");

  return (
    <>
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
                <div style={{ color: "red" }}>
                  Account locked until{" "}
                  {new Date(lockedUntil).toLocaleTimeString()}
                </div>
              )}
            </div>
            <div>
              <p className="font-bold text-center mt-5 ">
                Forgotten your password?{" "}
                <span className="text-brown" onClick={forgotPassword}>
                  <NavLink to="/reset-password">Reset password</NavLink>
                </span>
              </p>
            </div>

            <NavLink to="/dashboard">
              <div className="flex justify-center my-7">
                <button
                  type="submit"
                  onClick={signIn}
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
    </>
  );
};

export default Studentsi;
