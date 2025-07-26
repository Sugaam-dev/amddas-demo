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
          src="./images/amd3.webp" /* Replace with your actual image URL */
          alt="Supply Chain"
        />
      </div>

      {/* Right Section: Content */}
      <div className="amddas-gallery-content">
        <h2 className="gallery-title">Amddas Foods Gallery</h2>
        <p className="gallery-description">
        Discover the essence of Amddas Foods through our gallery, featuring delicious creations and moments of culinary excellence that define our corporate dining experience.
        </p>
        <button className="gallery-button" onClick={gallery}>READ MORE</button>
      </div>
    </div>
    </>
  );
};

export default AmddasGallery;


