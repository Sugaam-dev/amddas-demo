import React from "react";
import "./Amddascorporate.css";
import { useNavigate } from "react-router-dom";

const Corporate = () => {
    
        const navigate=useNavigate()
        const corporate=()=>{
            navigate('/corporate')
        }
  return (
    <>
    
 
    <div className="amddas-corporate-container">
      {/* Left Section: Image */}
      <div className="amddas-corporate-image" >
        <img 
          src="./images/corporate.jpg" /* Replace with your actual image URL */
          alt="Supply Chain"
        />
      </div>

      {/* Right Section: Content */}
      <div className="amddas-corporate-content">
        <h2 className="corporate-title"> Corporate</h2>
        <p className="corporate-description">
        We bring together a blend of onsite research and knowledge about the local area and demographics, aligned with emerging consumer trends, to deliver customized & innovative culinary solutions.
        </p>
        <button className="corporate-button" onClick={corporate}>READ MORE</button>
      </div>
    </div>
    </>
  );
};

export default Corporate;


