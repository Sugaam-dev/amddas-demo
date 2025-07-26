import React from "react";
import './offsite.css';
import { useNavigate } from "react-router-dom";

const Corporateoffsite = () => {
    const navigate=useNavigate();
    const ourpage=()=>{
        navigate('/corporate-offsite')
    }
  return (
    <div className="Our-offsite-container">
      <h2 className="Our-offsite-title">Corporate - Offsite</h2>
      <p className="Our-offsite-description">
      We are the only food service provider in India, to have a reach in all major cities through our well- equipped and certified Central Kitchens, and we continue to stay invested and grow through this model.  </p>
      <button onClick={ourpage} className="Our-offsite-button">READ MORE</button>
    </div>
  );
};

export default Corporateoffsite;
