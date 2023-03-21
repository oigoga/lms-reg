import React from "react";
import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

function validatePassword(password) {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  return regex.test(password);
}

const Adminsu = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

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
    // handle form submission
  }

  return (
    <>
      <div className="font-Montserrat md:h-screen   flex flex-col     bg-bg-color ">
        <form
          action="submit"
          onSubmit={handleSubmit}
          className="h-4/5 mb-5 drop-shadow-2xl rounded-xl mx-[5%] md:mx-[15%] bg-bg-color p-5 mt-20 "
        >
          <h2 className="font-bold text-center mt-5 ">Create new account <span className="text-brown">(Admin)</span></h2>

          <div className="my-20">
            <div className="border-b-2 border-border  w-full mt-4    py-2">
              <input
                type="text"
                className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                required
                placeholder="Full Name"
              />
            </div>
            <div className="border-b-2 border-border w-full mt-4  py-2">
              <input
                type="email"
                className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                required
                placeholder="Email"
              />
            </div>

            <div className="flex md:flex-row flex-col justify-between">
              <div className="border-b-2 border-border w-full md:mr-2 mt-4  md:w-1/2  py-2">
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
              </div>
              <div className="border-b-2 border-border w-full md:ml-2 mt-4  md:w-1/2  py-2">
                <input
                  type="password"
                  className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                  required
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  placeholder="Confirm Password"
                />
                {!passwordsMatch && (
                  <div style={{ color: "red" }}>Passwords do not match</div>
                )}
              </div>
            </div>
            <div className="flex md:flex-row flex-col justify-between">
              <div className="border-b-2 border-border w-full md:mr-2 mt-4  md:w-1/2  py-2">
             
                <input
                  type="date"
                  className=" appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                  required
                  placeholder="Date Of Birth"
                />
              </div>
              <div className="border-b-2 border-border w-full md:ml-2 mt-4  md:w-1/2  py-2">
                <input
                  type="text/number"
                  className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                  required
                  placeholder="Admin Verification Code"
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col justify-between">
              <div className="border-b-2 border-border w-full md:mr-2 mt-4  md:w-1/2  py-2">
                <input
                  type="text"
                  className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                  required
                  placeholder="Organisation"
                />
              </div>
              <div className="border-b-2 border-border w-full md:ml-2 mt-4  md:w-1/2  py-2">
                <input
                  type="text"
                  className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                  required
                  placeholder="Role"
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col justify-between">
              <div className="flex border-b-2 border-border w-full md:mr-2 mt-4  md:w-1/2  py-2">
                <input
                  type="text"
                  className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                  required
                  placeholder="Security Question"
                />
                <select className="bg-bg-color w-1/2">
                  <option>In what city did your parents meet</option>
                  <option>What was the name of your first pet</option>
                  <option>
                    What is the name of your childhood best friend
                  </option>
                </select>
              </div>
              <div className="border-b-2 border-border w-full md:ml-2 mt-4  md:w-1/2  py-2">
                <input
                  type="text"
                  className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                  required
                  placeholder="Alternative email"
                />
              </div>
            </div>
            <NavLink to="/Verification">
              {" "}
              <Button text="Submit" />{" "}
            </NavLink>
          </div>
        </form>

        <div>
        <p className="font-bold text-center mt-5 ">Already have an account? <span className="text-brown"><NavLink to="/admin-signin">Log In</NavLink></span></p>
        </div>
      </div>
    </>
  );
};

export default Adminsu;
