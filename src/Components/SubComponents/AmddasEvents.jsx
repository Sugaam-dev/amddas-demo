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
        Amddas transforms every event into a memorable experience with curated menus, exceptional service, and a vibrant ambiance. From personal milestones to corporate gatherings, we ensure every occasion is extraordinary.
        </p>
        <button className="events-button" onClick={event}>READ MORE</button>
      </div>


        {/* Left Section: Image */}
        <div className="amddas-events-image">
        <img
          src="./images/events.jpg" /* Replace with your actual image URL */
          alt="eventys"
        />
      </div>
    </div>
  );
};

export default AmddasEvents;


