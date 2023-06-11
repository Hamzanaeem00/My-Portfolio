import React from "react";
import TypingAnimation from "../../components/TypingAnimation/TypingAnimation";
import './Home.css'

const Home = () => {
  return (
    <div>
      <div>
        <span className="introduction w-100 mb-0 my-3">INTRODUCTION</span>
      </div>
      <TypingAnimation />
    </div>
  );
};

export default Home;
