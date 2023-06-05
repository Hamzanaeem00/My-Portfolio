import React, { useEffect, useState } from 'react';
import './TypingAnimation.css'
import Pic from '../../assets/picture.png'
import SidePic from '../../assets/slider-overlay.png'


const TypingAnimation = () => {
  const words = ['Hi I am Hamza Naeem', 'I am Frontend Developer!', ];
  const [text, setText] = useState('');
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
      const part = words[i].substr(0, offset);
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
        <div >
            <div className='mx-5'>
                <h3>
                Welcome                   
                </h3>
            </div>
            <div className='row '>
        <div className='col-lg-4 col-md-12 col-sm-12'>
          <h1  className="word my-5">{text}</h1>
        </div>

        <div className=' col-lg-8 col-md-12 col-sm-12 '>
            <div className='row'>
                <img className='overlay image-fluid col-lg-5' style={{width:"300px"}}   src={SidePic} alt=""  />
                <img className='my-pic image-fluid col-lg-7'  src={Pic} alt="" />
            </div>
                <div className='line w-100'>
            </div>
            </div>
            </div>
            

        </div>
      );
    };
    export default TypingAnimation;

