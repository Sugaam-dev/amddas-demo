import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Education.css';
import education from './images/Education.webp';

function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('education-animate-in');
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
      className="education-page"
      ref={sectionRef}
    >
      <div className="education-container">
        <div className="education-content">
          <h1 className="education-title">Educational Institution Services</h1>
          <p className="education-description">
            We partner with schools, colleges, and universities to deliver balanced and nutritious meals for students and staff, while maintaining high standards of food safety and taste.
          </p>
          <div className="education-features">
            <div className="education-feature-item">
              <h3 className="education-feature-title">Nutritional Balance</h3>
              <p className="education-feature-text">Age-appropriate meals designed to support growth and cognitive development</p>
            </div>
            <div className="education-feature-item">
              <h3 className="education-feature-title">Learning Support</h3>
              <p className="education-feature-text">Meals that enhance concentration and academic performance</p>
            </div>
            <div className="education-feature-item">
              <h3 className="education-feature-title">Safety Standards</h3>
              <p className="education-feature-text">Strict food safety protocols for educational environments</p>
            </div>
          </div>
        </div>
        <div className="education-image">
          <img src={education} alt="Educational Institution Services" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

export default Education;
