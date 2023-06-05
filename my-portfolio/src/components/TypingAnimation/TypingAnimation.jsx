import React, { useEffect, useState } from "react";
import "./TypingAnimation.css";
import picture from "../../assets/pictures.png";
import { Link } from "react-router-dom";

const TypingAnimation = () => {
  const words = ["I'm Hamza Naeem Khan", "I'm Frontend Developer!"];
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const skipDelay = 15;
  const speed = 70;

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          setSkipCount(skipCount + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setI((i + 1) % words.length);
          setOffset(0);
        }
      }
      const part = words[i].substring(0, offset);
      if (skipCount === 0) {
        if (forwards) {
          setOffset(offset + 1);
        } else {
          setOffset(offset - 1);
        }
      }
      setText(part);
    }, speed);
    return () => clearInterval(interval);
  }, [words, i, offset, forwards, skipCount]);

  return (
    <div>
      <div className="row">
        <div className="col-lg-8 col-md-12 col-sm-12">
          <h4 className="">Welcome 👋</h4>
          <span className="word ">{text}</span>
          <div>
            <h4 className="">based in Pakistan, Karachi </h4>
          </div>
          <div className=" mt-5 hire">
            <Link style={{ textDecoration: "none" }} to="/contact">
              <button className="btn-hire">Hire Me</button>
            </Link>
          </div>
        </div>
        <div className=" col-lg-4 col-md-12 col-sm-12 ">
          <img
            src={picture}
            className="img-fluid"
            alt=""
            style={{ width: "400px" }}
          />
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};
export default TypingAnimation;
