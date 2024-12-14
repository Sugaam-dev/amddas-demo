import React from "react";
import "./AmddasGallery.css";
import { useNavigate } from "react-router-dom";

const AmddasGallery = () => {
    
        const navigate=useNavigate()
        const gallery=()=>{
            navigate('/amddas-gallery')
        }
  return (
    <>
    
 
    <div className="amddas-gallery-container">
      {/* Left Section: Image */}
      <div className="amddas-gallery-image">
        <img
          src="http://localhost:3000/images/amd3.webp" /* Replace with your actual image URL */
          alt="Supply Chain"
        />
      </div>

      {/* Right Section: Content */}
      <div className="amddas-gallery-content">
        <h2 className="gallery-title">Amddas Foods Gallery</h2>
        <p className="gallery-description">
          At Compass India, excellence in supply chain is defined by streamlined
          processes & efficient logistics, supported by the latest technology.
        </p>
        <button className="gallery-button" onClick={gallery}>READ MORE</button>
      </div>
    </div>
    </>
  );
};

export default AmddasGallery;


