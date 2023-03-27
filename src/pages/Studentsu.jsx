import React from "react";
import { useState, useEffect, useRef } from "react";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import Logo from "../assets/assets";
function validatePassword(password) {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  return regex.test(password);
}

const Studentsu = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [secondaryEmailAddress, setSecondaryEmailAddress] = useState("");

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
  
  const signUp = async (event) => {
    let data = { firstName,
      email,
      password,
      confirmPassword,
      dateOfBirth,
      securityQuestion,
      secondaryEmailAddress,

      }

      console.warn(data)
      
   let result =  await fetch("https://learningmanagement-staging.up.railway.app/api/learning-mgt/v1/user/sign-up", {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
          "content-type": 'application/json'
        }
      })
      result =await result.json()
      console.warn("result", result)
  }

  return (
    <>
      <div className="font-Montserrat md:h-screen pb-5  flex flex-col    bg-white ">
      <div className="h-[25%] w-[35%] md:h-[20%] md:w-[20%] -mt-10 -ml-5 md:mt-0 md:ml-0 fixed z-10">
          <img src={Logo} alt="" className='h-full w-full'/>
        </div>
        <form
          action="submit"
          
          className="h-3/4 drop-shadow-2xl rounded-xl mx-[5%] md:mx-[15%] bg-bg-color p-5 mt-20 "
        >
          <h2 className="font-bold text-center">Create new account <span className="text-brown">(Student)</span></h2>

          <div className="my-20">
            <div className="border-b-2 border-border  w-full mt-4    py-2">
              <input
                type="text"
                className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                required
                name="name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Full Name"
              />
            </div>
            <div className="border-b-2 border-border w-full mt-4  py-2">
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
            
            <div className="flex md:flex-row flex-col justify-between">
              <div className="flex border-b-2 border-border w-full mt-4  py-2">
                <input
                  type="text"
                  className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                  required
                  name="question"
                  value={securityQuestion}
                  onChange={(e) => setSecurityQuestion(e.target.value)}
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
              
            </div>
            <NavLink to="/Verification">
             
              <div className='flex justify-center my-7'>
  <button type="submit" onClick={signUp} className='px-2 w-3/4 hover:bg-brown border-border border-2 text-black font-Montserrat hover:text-white text-base md:w-1/4 rounded-md py-2'>Sign Up</button>
  </div>
            </NavLink>
          </div>
        </form><div>
        <p className="font-bold text-center mt-5 ">Already have an account? <span className="text-brown"><NavLink to="/student-signin">Log In</NavLink></span></p>
        </div>
      </div>
    </>
  );
};

export default Studentsu;
