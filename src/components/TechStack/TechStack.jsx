import React from "react";
import "./TechStack.css";
import react from "../../assets/React.png";
import redux from "../../assets/Redux.png";
import javascript from "../../assets/javascript.png";
import github from "../../assets/Github.png";
import firebase from "../../assets/Firebase.png";
import html from "../../assets/Html.png";
import css from "../../assets/Css.png";
import antd from "../../assets/AntD.png";
import mui from "../../assets/Mui.png";
import tailwind from "../../assets/Tailwaind.png";
import bootstrap from "../../assets/Boostrap.png";
import vite from "../../assets/Vite.png";

const TechStack = () => {
  return (
    <div>
      <div className="d-flex justify-content-center mt-3  ">
        <div className="tech-logos mx-3 ">
          <img src={react} alt="" className="image-fluid tech-stack" />
          <h3 className="percentage fw-bold ">75%</h3>
        </div>
        <div className="tech-logos mx-3">
          <img src={redux} alt="" className="image-fluid tech-stack" />
          <h3 className="percentage fw-bold ">70%</h3>
        </div>
        <div className="tech-logos mx-3 ">
          <img src={javascript} alt="" className="image-fluid tech-stack" />
          <h3 className="percentage fw-bold ">70%</h3>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-3" >
        <div className="tech-logos mx-3 ">
          <img src={github} alt="" className="image-fluid tech-stack" />
          <h3 className="percentage fw-bold ">60%</h3>
        </div>
        <div className="tech-logos mx-3 ">
          <img src={firebase} alt="" className="image-fluid tech-stack" />
          <h3 className="percentage fw-bold ">40%</h3>
        </div>
        <div className="tech-logos mx-3 ">
          <img src={vite} alt="" className="image-fluid tech-stack" />
          <h3 className="percentage fw-bold ">50%</h3>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <div className="tech-logos mx-3 ">
          <img src={antd} alt="" className="image-fluid tech-stack" />
          <h3 className="percentage fw-bold ">60%</h3>
        </div>
        <div className="tech-logos mx-3 ">
          <img src={mui} alt="" className="image-fluid tech-stack" />
          <h3 className="percentage fw-bold ">70%</h3>
        </div>
        <div className="tech-logos mx-3 ">
          <img src={html} alt="" className="image-fluid tech-stack" />
          <h3 className="percentage fw-bold ">90%</h3>
        </div>
      </div>
      <div className="d-flex  justify-content-center mt-3">
        <div className="tech-logos mx-3 ">
          <img src={css} alt="" className="image-fluid tech-stack" />
          <h3 className="percentage fw-bold ">80%</h3>
        </div>
        <div className="tech-logos mx-3 ">
          <img src={bootstrap} alt="" className="image-fluid tech-stack" />
          <h3 className="percentage fw-bold ">90%</h3>
        </div>
        <div className="tech-logos mx-3 ">
          <img src={tailwind} alt="" className="image-fluid tech-stack" />
          <h3 className="percentage fw-bold ">30%</h3>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
