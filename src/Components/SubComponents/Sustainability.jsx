import React from "react";
import './Sustainability.css';
import { useNavigate } from "react-router-dom";

const Sustainability = () => {
    const navigate=useNavigate();
    const sust=()=>{
        navigate('/sustainability')
    }
  return (
    <div className="Our-Sustainability-container">
      <h2 className="Our-Sustainability-title">Sustainability</h2>
      <p className="Our-Sustainability-description">
      Amddas Foods believes that food enriches the lives and health of the people physically, mentally and spiritually. This starts with focus on nutrition and wellbeing that ultimately impacts health, happiness and productivity. </p>
      <button onClick={sust} className="Our-Sustainability-button">READ MORE</button>
    </div>
  );
};

export default Sustainability;
