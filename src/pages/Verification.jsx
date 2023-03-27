import React from "react";
import { useState, useEffect, useRef } from "react";
import Logo from "../assets/assets";
import { NavLink } from "react-router-dom";
const Verification = () => {
  return (
    <>
      <div className="font-Montserrat h-screen   flex flex-col     bg-white ">
      <div className="h-[25%] w-[35%] md:h-[20%] md:w-[20%] -mt-10 -ml-5 md:mt-0 md:ml-0 fixed z-10">
          <img src={Logo} alt="" className='h-full w-full'/>
        </div>
        <form
          action="submit"
          className="h-1/2 mb-5 drop-shadow-2xl rounded-xl mx-[5%] md:mx-[15%] bg-bg-color pt-5 px-5 mt-20 "
        >
          <h2 className="font-bold text-center mt-5 ">
            Verify Account 
          </h2>

          <div className="my-20">
            <div className="border-b-2 border-border  w-full mt-4    py-2">
              <input
                type="text"
                className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                required
                name="name"
                placeholder="Verification code"
              />
            </div>

            <NavLink to="/main-login">
              {" "}
              <div className="flex justify-center my-7">
                <button
                  type="submit"
                  className="px-2 w-3/4 hover:bg-brown border-border border-2 text-black font-Montserrat hover:text-white text-base md:w-1/4 rounded-md py-2"
                >
                  Submit
                </button>
              </div>
            </NavLink>
          </div>
        </form>

        <div className="mb-3">
          <p className="font-bold text-center mt-5 ">
            Already have an account?{" "}
            <span className="text-brown">
              <NavLink to="/main-login">Log In</NavLink>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Verification;
