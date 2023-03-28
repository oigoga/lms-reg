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

const AdminSignIn = () => {
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
  const forgotPassword = async(email) => {
    return axios.post('https://learningmanagement-staging.up.railway.app/api/learning-mgt/v1/auth/forgot-password/', { email })
      .then((response) => {
        console.log('Email sent successfully', response);
      })
      .catch((error) => {
        console.error('Error sending email', error);
      });
  };

  forgotPassword('gogaelisabeth21@gmail.com');
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
            Sign Into your Account
            <span className="text-brown"> (Admin)</span>
          </h2>

          <div className="my-20">
            <div className="border-b-2 border-border  w-full mt-4    py-2">
              <input
                type="email"
                className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                required
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
              {" "}
              <Button text="Submit" />{" "}
            </NavLink>
          </div>
        </form>
        <div>
          <p className="font-bold text-center mt-5 ">
            Don't have an account?{" "}
            <span className="text-brown">
              <NavLink to="/admin-signup">Sign Up</NavLink>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default AdminSignIn;
