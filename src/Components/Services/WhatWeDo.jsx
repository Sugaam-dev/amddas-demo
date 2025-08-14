import React, { useEffect } from 'react';
import './whatwedo.css';
import Corporate_new from './Corporate_new';
import Training from './Training';
import Education from './Education';
import Hospital from './Hospital';

function WhatWeDo() {
  useEffect(() => {
    // Handle session storage scroll flags for navigation
    const scrollFlags = [
      { key: 'scrollToCorporate', sectionId: 'corporate-section' },
      { key: 'scrollToEducational', sectionId: 'educational-section' },
      { key: 'scrollToHospital', sectionId: 'hospital-section' },
      { key: 'scrollToTraining', sectionId: 'training-section' }
    ];

    let scrollTarget = null;
    scrollFlags.forEach(({ key, sectionId }) => {
      if (sessionStorage.getItem(key)) {
        scrollTarget = { key, sectionId };
      }
    });

    if (scrollTarget) {
      scrollFlags.forEach(({ key }) => {
        sessionStorage.removeItem(key);
      });

      setTimeout(() => {
        const element = document.getElementById(scrollTarget.sectionId);
        if (element) {
          const elementRect = element.getBoundingClientRect();
          const absoluteElementTop = elementRect.top + window.pageYOffset;
          const navbarHeight = 90;
          const scrollToPosition = Math.max(0, absoluteElementTop - navbarHeight);
          
          window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
          });
        }
      }, 300);
    }
  }, []);

  return (
    <div style={{ 
      overflowX: 'hidden', 
      maxWidth: '100vw', 
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div className="Our-services-container">
        <h2 className="Our-services-title">Our Services</h2>
        <span className="Our-services-description">
          Our solutions are tailor made to specific requirements of Business & Corporate sectors.
        </span>
      </div>

      <div id="corporate-section" style={{ 
        overflowX: 'hidden', 
        maxWidth: '100%', 
        boxSizing: 'border-box' 
      }}>
        <Corporate_new />
      </div>

      <div id="educational-section" style={{ 
        overflowX: 'hidden', 
        maxWidth: '100%', 
        boxSizing: 'border-box' 
      }}>
        <Education/>
      </div>

      <div id="hospital-section" style={{ 
        overflowX: 'hidden', 
        maxWidth: '100%', 
        boxSizing: 'border-box' 
      }}>
        <Hospital/>
      </div>

      <div id="training-section" style={{ 
        overflowX: 'hidden', 
        maxWidth: '100%', 
        boxSizing: 'border-box' 
      }}>
        <Training/>
      </div>
    </div>
  );
}

export default WhatWeDo;
