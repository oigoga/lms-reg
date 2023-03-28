import React from "react";
import { useState, useEffect, useRef } from "react";
import Logo from "../assets/assets";
import { NavLink } from "react-router-dom";
import Loginmain from "./Loginmain";
const Verification = () => {
  return (
    <>
    <h2 className="font-Montserrat font-semibold text-3xl">Signed In Successfully!</h2>
     <Loginmain/>
    </>
  );
};

export default Verification;
