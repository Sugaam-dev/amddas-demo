import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => {
  const phoneNumber = "919632764963"; // Your WhatsApp number (without + symbol)
  const message = "Hello! I'm interested in your catering services."; // Default message
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="whatsapp-float" onClick={handleWhatsAppClick}>
      <FaWhatsapp className="whatsapp-icon" />
    </div>
  );
};

export default WhatsAppFloat;