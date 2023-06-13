import React from "react";
import TechStack from "../../components/TechStack/TechStack";

const Skills = () => {
  return (
    <div>
      <div>
        <span className="about-me w-100 mb-0">SKILLS</span>
      </div>
      <div className="text-center opacity-75 my-3">
        <p>HOVER OVER A SKILL TO SEE CURRENT PROFICIENCY</p>
      </div>
      <div>
        <TechStack />
      </div>
    </div>
  );
};

export default Skills;
