import React from "react";
import "./AmddasEvents.css";
import { useNavigate } from "react-router-dom";

const AmddasEvents = () => {

    const navigate=useNavigate()
    const event=()=>{
        navigate('/amddas-events')
    }
  return (
    <div className="amddas-events-container">
    

      {/* Right Section: Content */}
      <div className="amddas-events-content">
        <h2 className="events-title">Amddas Foods events</h2>
        <p className="events-description">
          At Compass India, excellence in supply chain is defined by streamlined
          processes & efficient logistics, supported by the latest technology.
        </p>
        <button className="events-button" onClick={event}>READ MORE</button>
      </div>


        {/* Left Section: Image */}
        <div className="amddas-events-image">
        <img
          src="https://content.jdmagicbox.com/comp/nadiad/n3/9999px268.x268.230607001329.s8n3/catalogue/the-leaf-garden-cafe-and-events-nadiad-coffee-shops-xcwp75fi1l.jpg" /* Replace with your actual image URL */
          alt="Supply Chain"
        />
      </div>
    </div>
  );
};

export default AmddasEvents;


