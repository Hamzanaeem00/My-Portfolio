import React from "react";
import "./Introduction.css";
import EmailSection from "../EmailSection/EmailSection";
import Achievements from "../Achievements/Achievements";

const Introduction = () => {
  return (
    <div>
      <div className="">
        <span className="about-me  w-100 mb-0">ABOUT ME</span>
        <p
          className=" know-me w-100 text-center mb-0 mt-3"
          style={{ bottom: "100px" }}
        >
          Know Me More
          <p
            className="  border-bottom border-3 border-success mx-auto"
            style={{ width: "80px" }}
          ></p>
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="intro col-lg-9 col-md-12 col-sm-12">
          <h2 className="fw-bold">
            I'm
            <span className="name mx-2 ">Hamza Naeem Khan,</span>a Web Developer
          </h2>
          <p className="para mt-3 ">
            Experienced Frontend React.js Developer with 1+ years of expertise
            and a proven track record of meeting deadlines and exceeding
            expectations. Successfully completed over 7 projects, showcasing
            proficiency in React.js, HTML, CSS, and JavaScript. A dedicated
            learner, always seeking to adopt new skills and technologies.
          </p>
          <p className="para">
            Collaborative and adaptable, committed to delivering high-quality
            work that aligns with business objectives. Passionate about creating
            engaging user interfaces and staying up-to-date with industry best
            practices. Ready to contribute expertise to drive innovation and
            success in future projects.
          </p>
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12 mt-3">
          <EmailSection />
        </div>
      </div>
      <Achievements />
    </div>
  );
};

export default Introduction;
