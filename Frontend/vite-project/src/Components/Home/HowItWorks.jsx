import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
   <div className="howitworks">
    <div className="container">
      <h3>How JobZee works</h3>
      <div className="banner">
        <div className="card">
          <FaUserPlus/>
          <p>Create Account</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos maiores eaque porro! Ex, consequuntur error.</p>
        </div>
        <div className="card">
          <MdFindInPage/>
          <p>Find a job / Post a job</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos maiores eaque porro! Ex, consequuntur error.</p>
        </div>
        <div className="card">
          <IoMdSend/>
          <p>Apply For Job/Recruit Suitable Candidates</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos maiores eaque porro! Ex, consequuntur error.</p>
        </div>
      </div>
    </div>
   </div>
  )
}

export default HowItWorks