import React from 'react';
import './About_all.css'

const Leadership = () => {
  return (
    <div className="about-page-wrapper">
      <div className="leadership-container">
        <div className="leadership-content">
          <div className="text-section">
            <h1 className="main-title">All About Us</h1>
            
            <p className="description">
             Established in 2016, AMDDAS Foods has grown into a trusted name in the corporate and institutional catering space, delivering quality meals with consistency, hygiene, and heart. With a robust production capacity of 4,000 plates per day, we are equipped to serve large-scale requirements across corporate offices, events, and food courts. Our culinary repertoire includes a wide variety of cuisines — from Indian vegetarian and non-vegetarian, South Indian, Maharashtrian, Bengali, and Odiya specialties to popular Chinese, Continental, and Italian dishes. Each menu is thoughtfully curated to suit regional tastes and modern preferences.
            </p>
          </div>
          
          <div className="image-section">
            <img 
              src="/images/about-all.jpg" 
              alt="Leadership team meeting in modern office" 
              className="leadership-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;