import React from "react";
import './writetous.css';
import { Link } from "react-router-dom";
const WritetoUs = () => {
  const handlePhoneClick = () => {
    const phoneNumber = "+919632764963";
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    if (window.innerWidth < 768) {
  
      window.location.href = `tel:${phoneNumber}`;
    } else {

      window.open(whatsappLink, "_blank");
    }
  };

  return (
    <div className="Our-writetous-container">
      <h2 className="Our-writetous-title"> Write to Us </h2>
      <p className="Our-writetous-description">
        Mailing Address:
        AMDDAS FOODS PVT ltd SY NO : 67, SEEGEHALLI VILLAGE, BIDARAHALLI HOBLI BENGALURU EAST TALUK, BANGALORE-67 <br />
        or use the link below!
      </p>
      <p className="Our-writeto-description">
        Phone: 
        <span 
          className="Our-phone-link" 
          onClick={handlePhoneClick}
          style={{ cursor: "pointer", color: "#007bff"}}
        >
          +919632764963
        </span>
        <br />
        Email: 
        <Link to="mailto:info@amddas.net" className="Our-email-link"> info@amddas.net</Link>
      </p>
    </div>
  );
};

export default WritetoUs;
