import React from "react";
import './Vision.css';

const Vision = () => {
  return (
    <div className="vision-container">
      {/* Left Side - Content */}
      <div className="vision-content">
        <h2 className="vision-title">Our Vision</h2>
        <p className="vision-description">
        To be India's most trusted and innovative partner in corporate catering and event dining, delivering excellence, taste, and memorable experiences at every table
        </p>
      </div>
      
      {/* Right Side - Image */}
      <div className="vision-image">
        <img 
          src="/images/story.jpg" 
          alt="Amddas Foods Events - Catering Service"
          className="vision-image-img"
        />
      </div>
    </div>
  );
};

export default Vision;