import React from "react";
import './aboutAmddas.css';
import { useNavigate } from "react-router-dom";

const AboutAmddas = () => {
    const navigate=useNavigate();
    const ourpage=()=>{
        navigate('/about')
    }
  return (
    <div className="Our-about-container">
      <h2 className="Our-about-title">About Amddas Foods</h2>
      <p className="Our-about-description">Amddas Foods brings together a rich culinary heritage and a commitment to innovation, offering diverse global flavors and impeccable service. Our passion lies in creating unforgettable dining experiences for every occasion. </p>
      <button onClick={ourpage} className="Our-about-button">READ MORE</button>
    </div>
  );
};

export default AboutAmddas;
