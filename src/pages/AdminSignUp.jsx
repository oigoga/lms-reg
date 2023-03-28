import React from "react";
import { useState, useEffect, useRef } from "react";
import Logo from "../assets/assets";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Verification from "./Verification";
function validatePassword(password) {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  return regex.test(password);
}

function validateEmail(email) {
  const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return email_regex.test(email);
}

const Adminsu = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [adminVerificationCode, setAdminVerificationCode] = useState("");
  const [organization, setOrganization] = useState("");
  const [role, setRole] = useState("");
  
  const [secondaryEmailAddress, setSecondaryEmailAddress] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

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
  // const userRef = useRef();
  // const errRef = useRef();

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);
  // useEffect(() => {
  //   const result = email_regex.test(email);
  //   console.log(result);
  //   console.log(email);
  //   setValidName(result);
  // }, [email]);

  // useEffect(() => {}, [email, password, passwordsMatch]);
  const userData = {
    firstName,
    lastName,
    phone,
    email,
    password,
    confirmPassword,
    dateOfBirth,
    adminVerificationCode,
    organization,
    role,
    secondaryEmailAddress,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const v1 = email_regex.test(email);
    // const v2 = regex.test(password);
    // if (!v1 || !v2) {
    //   setErrMsg("Invalid Entry");
    //   return;
    // }
    try {
      const response = await axios.post(
        "https://learningmanagement-staging.up.railway.app/api/learning-mgt/v1/user/sign-up",
        JSON.stringify(userData),
        {
          headers: { "content-type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(userData);
      console.log(response.message);
      console.log(response.token);
      console.log(JSON.stringify(response));
      setSuccess(true);
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No server response");
      } else if (err.response?.status === 403) {
        setErrMsg("Forbidden");
      } else {
        setErrMsg("Sign Up Failed");
      }
    }
  };
  return (
    <>
      {success ? (
        <div>
          <div className="font-Montserrat    flex flex-col     bg-white ">
            <div className="h-[25%] w-[35%] md:h-[20%] md:w-[20%] -mt-10 -ml-5 md:mt-0 md:ml-0 fixed z-10">
              <img src={Logo} alt="" className="h-full w-full" />
            </div>

            <h2 className="font-Montserrat font-semibold text-3xl  text-center my-4 text-orange">
              Signed In Successfully!
            </h2>
            <div className="mb-3">
              <p className="font-bold text-center mt-5 ">
                Login as an{" "}
                <span className="text-brown">
                  <NavLink to="/admin-signin">Admin</NavLink>
                </span>
              </p>
            </div>
            <div className="mb-3">
              <p className="font-bold text-center mt-5 ">
                Login as a{" "}
                <span className="text-brown">
                  <NavLink to="/student-signin">Student</NavLink>
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="font-Montserrat    flex flex-col     bg-white ">
          <div className="h-[25%] w-[35%] md:h-[20%] md:w-[20%] -mt-10 -ml-5 md:mt-0 md:ml-0 fixed z-10">
            <img src={Logo} alt="" className="h-full w-full" />
          </div>

          <form
            action="submit"
            onSubmit={handleSubmit}
            className="h-4/5 mb-5 drop-shadow-2xl rounded-xl mx-[5%] md:mx-[15%] bg-bg-color pt-5 px-5 mt-20 "
          >
            <h2 className="font-bold text-center mt-5 ">
              Create new account <span className="text-brown">(Admin)</span>
            </h2>

            <div className="my-20">
              <div className="flex md:flex-row flex-col justify-between">
                <div className="border-b-2 border-border w-full md:mr-2 mt-4  md:w-1/2  py-2">
                  <input
                    type="text"
                    className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                    required
                    name="name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                  />
                </div>
                <div className="border-b-2 border-border w-full md:ml-2 mt-4  md:w-1/2  py-2">
                  <input
                    type="text"
                    className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                    required
                    name="name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="flex md:flex-row flex-col justify-between">
                <div className="border-b-2 border-border w-full md:mr-2 mt-4  md:w-1/2  py-2">
                  <input
                    type="email"
                    className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
                <div className="border-b-2 border-border w-full md:ml-2 mt-4  md:w-1/2  py-2">
                  <input
                    type="number"
                    className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                    required
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div className="flex md:flex-row flex-col justify-between">
                <div className="border-b-2 border-border w-full md:mr-2 mt-4  md:w-1/2  py-2">
                  <input
                    type="password"
                    className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                    required
                    onChange={handlePasswordChange}
                    value={password}
                    name="password"
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
                    name="password"
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
                    name="dateOfBirth"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    placeholder="Date Of Birth"
                  />
                </div>
                <div className="border-b-2 border-border w-full md:ml-2 mt-4  md:w-1/2  py-2">
                  <input
                    type="text/number"
                    className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                    required
                    name="code"
                    value={adminVerificationCode}
                    onChange={(e) => setAdminVerificationCode(e.target.value)}
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
                    name="organisation"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="Organisation"
                  />
                </div>
                <div className="border-b-2 border-border w-full md:ml-2 mt-4  md:w-1/2  py-2">
                  <input
                    type="text"
                    className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                    required
                    name="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="Role"
                  />
                </div>
              </div>
              <div className="flex md:flex-row flex-col justify-between">
                <div className="border-b-2 border-border w-full md:ml-2 mt-4  md:w-1/2  py-2">
                  <input
                    type="text"
                    className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                    required
                    name="alternativeEmail"
                    value={secondaryEmailAddress}
                    onChange={(e) => setSecondaryEmailAddress(e.target.value)}
                    placeholder="Alternative email"
                  />
                </div>
              </div>
              
              
                <div className="flex justify-center my-7">
                  <button className="px-2 w-3/4 hover:bg-brown border-border border-2 text-black font-Montserrat hover:text-white text-base md:w-1/4 rounded-md py-2">
                    Sign Up
                  </button>
                </div>
              
            </div>
          </form>

          <div className="mb-3">
            <p className="font-bold text-center mt-5 ">
              Already have an account?{" "}
              <span className="text-brown">
                <NavLink to="/admin-signin">Log In</NavLink>
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Adminsu;
