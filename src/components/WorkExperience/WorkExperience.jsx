import React from "react";
import "./WorkExperience.css";
import js from '../../assets/javascript.png'
import react from '../../assets/React.png'
import redux from '../../assets/Redux.png'
import mui from '../../assets/Mui.png'
import antd from '../../assets/AntD.png'
import firebase from '../../assets/Firebase.png'
import pakauto from '../../assets/Pak auto.png'


const WorkExperience = () => {
  return (
    <div className=" d-flex justify-content-center text-center my-3 company-exp ">
        <div className=" text-center work-exp p-4 ">
      <div className="picture"> 
        <img src={pakauto} className="image-fluid logo" alt="" />
      </div>
      <h4 >Pakistan Automation</h4>
      <div className="d-flex justify-content-center">
        <img className="image-fluid tech-logo" src={js} alt="" />
        <img className="image-fluid tech-logo" src={react} alt="" />
        <img className="image-fluid tech-logo" src={redux} alt="" />
        <img className="image-fluid tech-logo" src={mui} alt="" />
        <img className="image-fluid tech-logo" src={antd} alt="" />
        <img className="image-fluid tech-logo" src={firebase} alt="" />
      </div>
      <div className="my-2"> June 2022 - Present</div>
      <div>
        <p>
          I am primarily responsible to convert <br/>
          figma design into the functional
          web apps. 
        </p>
        <p>
        I have got hands-on to figure out
        <br /> the solutions for the
          complex problems.
        </p>
      </div>
    </div>
    </div>

  );
};

export default WorkExperience;
