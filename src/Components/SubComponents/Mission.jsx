import React from "react";
import './Mission.css';
import { useNavigate } from "react-router-dom";

const Mission = () => {
    const navigate=useNavigate();
    const ourpage=()=>{
        navigate('/our-mission')
    }
  return (
    <div className="Our-mission-container">
      <h2 className="Our-mission-title">Mission & Vision</h2>
      <p className="Our-mission-description">
      Every individual associated with Compass Group is committed to consistently delivering superior service in the most responsible and efficient way, for the shared benefit of our customers, stakeholders, and associates  </p>
      <button onClick={ourpage} className="Our-mission-button">READ MORE</button>
    </div>
  );
};

export default Mission;
