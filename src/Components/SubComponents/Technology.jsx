import React from "react";
import './technology.css';
import { useNavigate } from "react-router-dom";

const Technology = () => {
    const navigate=useNavigate();
    const ourpage=()=>{
        navigate('/technology')
    }
  return (
    <div className="Our-technology-container">
      <h2 className="Our-technology-title">Technology</h2>
      <p className="Our-technology-description">
      Realizing the potential of technology to be at the heart of all transformation and to cater the evolved consumer needs and preferences, and aligning towards digital innovations.</p>
      <button onClick={ourpage} className="Our-technology-button">VIEW MORE</button>
    </div>
  );
};

export default Technology;
