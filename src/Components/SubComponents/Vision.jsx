import React from "react";
import './Vision.css';
import { useNavigate } from "react-router-dom";

const Vision = () => {
  const navigate = useNavigate();
  
  const ourpage = () => {
    navigate('/our-mission')
  }

  return (
    <div className="vision-container">
      {/* Left Side - Content */}
      <div className="vision-content">
        <h2 className="vision-title">Our Vision</h2>
        <p className="vision-description">
        To be India’s most trusted and innovative partner in corporate catering and event dining, delivering excellence, taste, and memorable experiences at every table
        </p>
        <button onClick={ourpage} className="Our-mission-button">
          READ MORE
        </button>
      </div>
      
      {/* Right Side - Image */}
      <div className="vision-image">
        <img 
          src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
          alt="Amddas Foods Events - Catering Service"
          className="vision-image-img"
        />
      </div>
    </div>
  );
};

export default Vision;