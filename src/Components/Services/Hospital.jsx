import React, { useEffect, useRef } from 'react';
import './Hospital.css';
import doctor from './images/Hospital Catering.webp';

function Hospital() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('hospital-animate-in');
        }
      });
    }, observerOptions);

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      id="hospital-section" 
      className="hospital-section"
      ref={sectionRef}
    >
      <div className="hospital-container">
        <div className="hospital-image">
          <img src={doctor} alt="Hospital Services" loading="lazy" />
        </div>
        <div className="hospital-content">
          <h1 className="hospital-title">Hospital & Healthcare Catering</h1>
          <p className="hospital-description">
            Specialized catering services tailored to hospitals, focusing on dietary needs, medical nutrition standards, and hygienic food preparation for patients, staff, and visitors.
          </p>
          <div className="hospital-features">
            <div className="hospital-feature-item">
              <h3 className="hospital-feature-title">Medical Nutrition</h3>
              <p className="hospital-feature-text">Specialized diets for patient recovery and medical requirements</p>
            </div>
            <div className="hospital-feature-item">
              <h3 className="hospital-feature-title">Hygiene Standards</h3>
              <p className="hospital-feature-text">Hospital-grade sanitation and food safety protocols</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hospital;
