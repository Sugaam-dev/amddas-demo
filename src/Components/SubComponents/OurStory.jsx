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
      Amddas Foods blends a legacy of culinary excellence with a focus on innovation, delivering a wide array of international flavors and exceptional service. We are dedicated to crafting memorable dining experiences for every special moment.
        </p>
      <button onClick={ourpage} className="our-story-button">READ MORE</button>
    </div>
  );
};

export default OurStory;
