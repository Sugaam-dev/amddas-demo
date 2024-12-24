import React from "react";
import "./Amddassupply.css";
import { useNavigate } from "react-router-dom";

const Amddassupply = () => {
    
        const navigate=useNavigate()
        const supply=()=>{
            navigate('/supply-chain')
        }
  return (
    <>
    
 
    <div className="amddas-supply-container">
      {/* Left Section: Image */}
      <div className="amddas-supply-image">
        <img
          src="./images/supply.jpeg" /* Replace with your actual image URL */
          alt="Supply Chain"
        />
      </div>

      {/* Right Section: Content */}
      <div className="amddas-supply-content">
        <h2 className="supply-title">Supply Chain</h2>
        <p className="supply-description">
        At Compass India excellence in supply chain is defined by streamlined process & efficient logistics, supported by the latest technology.
        </p>
        <button className="supply-button" onClick={supply}>READ MORE</button>
      </div>
    </div>
    </>
  );
};

export default Amddassupply;


