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
      Amddas Foods believes in the transformative power of food to enhance lives and health—physically, mentally, and spiritually. By prioritizing nutrition and well-being, we aim to foster improved health, greater happiness, and increased productivity.
   </p>
      <button onClick={ourpage} className="Our-mission-button">READ MORE</button>
    </div>
  );
};

export default Mission;
