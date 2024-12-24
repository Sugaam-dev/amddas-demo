import React, {useState} from "react";
import './client.css';
import { useNavigate } from "react-router-dom";
const Client = () => {
    const navigate=useNavigate();
    const ourpage=()=>{
        navigate('/start')
    }
  return (
    <div className="Our-client-container">
      <h2 className="Our-client-title"> Are you a Prospective Client? </h2>
      <p className="Our-client-description">
       For sales inquiries/RFPs/RFIs, please
       call us at 8938838838<br/>
       or use the link below!
        
      </p>
      <button onClick={ourpage} className="Our-client-button">CONTACT COMPASS SALES</button>
    </div>
  );
};

export default Client;