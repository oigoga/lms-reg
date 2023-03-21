import React from "react";
import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

function validatePassword(password) {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  return regex.test(password);
}

const Studentsi = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [error, setError] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [lockedUntil, setLockedUntil] = useState(null);

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    setPasswordsMatch(event.target.value === confirmPassword);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
    setPasswordsMatch(event.target.value === password);
  }

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

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const isLocked = lockedUntil && lockedUntil > Date.now();

  return (
    <>
      <div className="font-Montserrat md:h-screen pb-5  flex flex-col    bg-bg-color ">
        <form
          action="submit"
          onSubmit={handleSubmit}
          className="h-1/2 drop-shadow-2xl rounded-xl mx-[5%] md:mx-[15%] bg-bg-color p-5 mt-20 "
        >
          <h2 className="font-bold text-center">
            Sign In to your Account<span className="text-brown"> (Student)</span>
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

            <NavLink to="/Verification">
              {" "}
              <Button text="Submit" />{" "}
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
