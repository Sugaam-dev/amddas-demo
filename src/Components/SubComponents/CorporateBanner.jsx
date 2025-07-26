import React from "react";
import './corporatebanner.css';
import { useNavigate } from "react-router-dom";

const CorporateBanner = () => {
    const navigate=useNavigate();
    const ourpage=()=>{
        navigate('/corporate-experience')
    }
  return (
    <div className="Our-corporatebanner-container">
      <h2 className="Our-corporatebanner-title">Corporate</h2>
      <p className="Our-corporatebanner-description">
      We are the only food service provider in India, to have a reach in all major cities through our well- equipped and certified Central Kitchens, and we continue to stay invested and grow through this model.  </p>
      <button onClick={ourpage} className="Our-corporatebanner-button">Know more</button>
    </div>
  );
};

export default CorporateBanner;
