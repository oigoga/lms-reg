import React from "react";
import Logo from "../assets/assets";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Resetpassword = () => {

    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [token, setToken] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
  
    
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
      const handlePasswordReset = (event) => {
        event.preventDefault();
    
        fetch("/api/reset-password", {
          method: "POST",
          body: JSON.stringify({ token, newPassword }),
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => {
            if (response.ok) {
              setSuccessMessage("Password reset successfully.");
              setErrorMessage(null);
            } else {
              setErrorMessage("Failed to reset password.");
              setSuccessMessage(null);
            }
          })
          .catch((error) => {
            console.error(error);
            setErrorMessage("Failed to reset password.");
            setSuccessMessage(null);
          });
      };

      const handlePassword = (event) => {
handlePasswordChange();
setNewPassword(event.target.value);

      };


  return (
    <>
     {errorMessage && <div>{errorMessage}</div>}
      {successMessage && <div>{successMessage}</div>}
      <div className="font-Montserrat md:h-screen pb-5  flex flex-col    bg-bg-white ">
        <div className="h-[20%] w-[25%] md:h-[7%] md:w-[12%] fixed">
          <img src={Logo} alt="" />
        </div>
        <form
          action="submit"
          className="h-1/2 drop-shadow-2xl rounded-xl mx-[5%] md:mx-[15%] bg-bg-color p-5 mt-20 "
        >
          <h2 className="font-bold text-center">Reset Your Password</h2>

          <div className="my-20">
           
            <div className="border-b-2 border-border w-full  mt-4   py-2">
              <input
                type="password"
                className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                required
                value={rePassword}
                placeholder="Password"
                onChange={handlePassword}
              />
              {passwordError && (
                <div style={{ color: "red" }}>{passwordError}</div>
              )}
            </div>

            <div className="border-b-2 border-border w-full md:ml-2 mt-4   py-2">
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

            <div className="border-b-2 border-border  w-full mt-4    py-2">
              <input
                type="text"
                className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                required
                value={token}
                onChange={(event) => setToken(event.target.value)}
                placeholder="Password Verification Code"
              />
            </div>

            <NavLink to="/">
              <div className="flex justify-center my-7">
                <button
                  type="submit"
                  onClick={handlePasswordReset}
                  className="px-2 w-3/4 hover:bg-brown border-border border-2 text-black font-Montserrat hover:text-white text-base md:w-1/4 rounded-md py-2"
                >
                  Reset Password
                </button>
              </div>
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default Resetpassword;
