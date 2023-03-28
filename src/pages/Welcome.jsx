import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import Logo from "../assets/assets"
import { NavLink } from "react-router-dom";
const Welcome = () => {
  return (
    <>
      <div className="flex flex-col py-4   bg-white h-screen text-white">
      <div className="h-[25%] w-[35%] md:h-[20%] md:w-[20%] -mt-10 -ml-5 md:mt-0 md:ml-0 fixed z-10">
          <img src={Logo} alt="" className='h-full w-full'/>
        </div>
        <div className="flex flex-col drop-shadow-2xl mx-[10%] md:mx-[25%] mt-10 h-full bg-bg-color rounded-xl">
          <div className="h-1/2 p-2 flex justify-center items-center border-b border-border">
            <p className=" w-3/4 md:w-1/2 text-center text-xl text-border  md:text-2xl font-Montserrat font-bold">
              Sign In To The Learning{" "}
              <span className="text-brown">Management System</span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row h-1/2 font-Montserrat font-semibold">
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center hover:bg-teal hover:text-white border-border border-b md:border-r">
              <FaChalkboardTeacher className="w-full" />
              <button className="border-brown rounded-lg px-2  hover:bg-brown   hover:text-white border-2 my-3">
               <NavLink to="admin-signup"> <p>I am an Admin</p></NavLink>
              </button>
            </div>

            <div className="w-full md:w-1/2 h-full flex flex-col items-center hover:bg-teal hover:text-white justify-center ">
              <BsPersonWorkspace className="w-10" />
              <button className="border-brown rounded-lg px-2  hover:bg-brown   hover:text-white border-2 my-3">
              <NavLink to="/student-signup"> <p>I am a Student</p></NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
