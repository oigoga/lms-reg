import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Welcome = () => {
  return (
    <>
      <div className="flex flex-col py-4   bg-bg-color h-screen text-black">
        <div>Logo</div>
        <div className="flex flex-col drop-shadow-2xl mx-[10%] md:mx-[25%] mt-16 h-full bg-bg-color rounded-xl">
          <div className="h-1/2 p-2 flex justify-center items-center border-b border-border">
            <p className=" w-3/4 md:w-1/2 text-center text-xl  md:text-2xl font-Montserrat font-bold">
              Sign In To The Learning{" "}
              <span className="text-brown">Management System</span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row h-1/2 font-Montserrat font-semibold">
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center border-border border-b md:border-r">
              <FaChalkboardTeacher className="w-full" />
              <button className="border-brown rounded-lg px-2  hover:bg-brown   hover:text-white border-2 my-3">
               <NavLink to="/admin-signup"> <p>I am an Admin</p></NavLink>
              </button>
            </div>

            <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center ">
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
