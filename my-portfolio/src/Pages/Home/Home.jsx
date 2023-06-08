import React from "react";
import TypingAnimation from "../../components/TypingAnimation/TypingAnimation";
import './Home.css'

const Home = () => {
  return (
    <div>
      <div>
        <span className="introduction w-100 mb-0 my-3">INTRODUCTION</span>
      </div>
      <div className="mx-3  ">
      <TypingAnimation />
      </div>
    </div>
  );
};

export default Home;
