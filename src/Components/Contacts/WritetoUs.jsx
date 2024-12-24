import React, {useState} from "react";
import './writetous.css';

const WritetoUs = () => {
   
  return (
    <div className="Our-writetous-container">
      <h2 className="Our-writetous-title"> Write to Us  </h2>
      <p className="Our-writetous-description">
       Mailing Address:
       AMDDAS FOODS PVT ltd SY NO : 67, SEEGEHALLI VILLAGE, BIDARAHALLI HOBLI BENGALURU EAST TALUK, BANGALORE-67 <br />
       or use the link below!
        
      </p>
      <p className="Our-writeto-description">
       Phone: +919632764963<br/>
       Email:  info@amddas.net
        </p>
    </div>
  );
};

export default WritetoUs;