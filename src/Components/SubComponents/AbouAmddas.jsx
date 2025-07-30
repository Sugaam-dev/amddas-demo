import React from "react";
import './aboutAmddas.css';
import { useNavigate } from "react-router-dom";

const AboutAmddas = () => {
    const navigate=useNavigate();
    const ourpage=()=>{
        navigate('/why-us')
    }
  return (
    <div className="Our-about-container">
      <h2 className="Our-about-title">Why Choose Amddas Foods</h2>
      <h3 className="Our-about-description">Risk Management Standards, Quality standard, Manufacturing Unit Standards, Employee Standard, Certified Kitchen </h3>
      <button onClick={ourpage} className="Our-about-button">READ MORE</button>
    </div>
  );
};

export default AboutAmddas;
