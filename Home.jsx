import React, { useEffect, useRef } from 'react';
import { TweenLite } from 'gsap';
import './Home.css';
import avatar from './avatar.png';

function Home() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Use current property of refs to access the DOM elements
    const textElements = [textRef.current.querySelector('h1'), textRef.current.querySelector('h4')];
    TweenLite.from(textElements, { opacity: 0, y: 10, duration: 1 });

    const imageElement = imageRef.current;
    const handleMouseOver = () => {
      imageElement.classList.add('overlay');
    };
    const handleMouseOut = () => {
      imageElement.classList.remove('overlay');
    };

    imageElement.addEventListener('mouseover', handleMouseOver);
    imageElement.addEventListener('mouseout', handleMouseOut);

    // Clean up event listeners when the component unmounts
    return () => {
      imageElement.removeEventListener('mouseover', handleMouseOver);
      imageElement.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div id='home' className="main2">
      <div className="container">
        <div className="text" ref={textRef}>
          <h1>
            Hi <span className="text2">There,</span> <br />I'm{' '}
            <span className="text2">Jagadisha Palai.</span>
          </h1>
          <h4 id="prince">
            <span className="text2">Full Stack </span> Python Developer
          </h4>
        </div>
        <div className="pic" ref={imageRef}>
          <img src={avatar} alt="profile pic" />
        </div>
      </div>
    </div>
  );
}

export default Home;
