import React from "react";
import './OurStory.css';
import { useNavigate } from "react-router-dom";

const OurStory = () => {
    const navigate=useNavigate();
    const ourpage=()=>{
        navigate('/ourstory')
    }
  return (
    <div className="our-story-container">
      <h2 className="our-story-title">Our Story</h2>
      <p className="our-story-description">
        As part of the leading food service and support services company, Compass Group India believes in building great experiences for all of its customers. We serve corporate cafes, hospitals, schools & colleges with our specialised multi-sectoral approach.
      </p>
      <button onClick={ourpage} className="our-story-button">READ MORE</button>
    </div>
  );
};

export default OurStory;
