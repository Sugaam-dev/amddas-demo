

import React from 'react';
import './Whyus_home.css';

const Whyus_home = () => {
  return (
    <div className="whyus-page-wrapper">
      <div className="whyus-container">
        <div className="content-wrapper">
          <p className="description">
            Our housekeeping teams follow strict cleaning protocols, using PPE to manage linen, laundry, spills, and bio-medical waste. With 
            meticulous duct cleaning and hygiene practices, we help prevent HAIs and support patient wellness.
          </p>
          
          <div className="services-grid">
            <div className="service-item">
              <div className="icon-image">
                <img src="/images/healthcare_icon1-1.webp" alt="Hygiene Maintenance" />
              </div>
              <h3 className="service-title">Hygiene Maintenance Services</h3>
            </div>
            
            <div className="service-item">
              <div className="icon-image">
                <img src="/images/healthcare_icon2-1.webp" alt="Building Utility" />
              </div>
              <h3 className="service-title">Building Utility Services</h3>
            </div>
            
            <div className="service-item">
              <div className="icon-image">
                <img src="/images/healthcare_icon3-1.webp" alt="Business Office" />
              </div>
              <h3 className="service-title">Business Office Support</h3>
            </div>
            
            <div className="service-item">
              <div className="icon-image">
                <img src="/images/healthcare_icon4-1.webp" alt="Ground Maintenance" />
              </div>
              <h3 className="service-title">Ground Maintenance Services</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus_home;