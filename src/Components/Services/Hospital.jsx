import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import './Hospital.css';
import doctor from './images/Hospital Catering.webp';

function Hospital() {
  const sectionRef = useRef(null);
  const observerRef = useRef(null);

  // Memoize observer options to prevent recreation
  const observerOptions = useMemo(() => ({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }), []);

  // Memoized callback for intersection observer
  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('hospital-animate-in');
        // Optional: unobserve after animation for better performance
        observerRef.current?.unobserve(entry.target);
      }
    });
  }, []);

  useEffect(() => {
    // Create observer once
    observerRef.current = new IntersectionObserver(handleIntersection, observerOptions);

    const currentSection = sectionRef.current;
    if (currentSection && observerRef.current) {
      observerRef.current.observe(currentSection);
    }

    // Cleanup function
    return () => {
      if (observerRef.current) {
        if (currentSection) {
          observerRef.current.unobserve(currentSection);
        }
        observerRef.current.disconnect();
      }
    };
  }, [observerOptions, handleIntersection]);

  // Memoized features data to prevent recreation on every render
  const featuresData = useMemo(() => [
    {
      title: 'Medical Nutrition',
      text: 'Specialized diets for patient recovery and medical requirements'
    },
    {
      title: 'Hygiene Standards',
      text: 'Hospital-grade sanitation and food safety protocols'
    }
  ], []);

  return (
    <div 
      id="hospital-section" 
      className="hospital-section"
      ref={sectionRef}
    >
      <div className="hospital-container">
        <div className="hospital-image">
          <img 
            src={doctor} 
            alt="Hospital Services" 
            loading="lazy"
            decoding="async"
            width="600"
            height="400"
          />
        </div>
        <div className="hospital-content">
          <h1 className="hospital-title">Hospital & Healthcare Catering</h1>
          <p className="hospital-description">
            Specialized catering services tailored to hospitals, focusing on dietary needs, medical nutrition standards, and hygienic food preparation for patients, staff, and visitors.
          </p>
          <div className="hospital-features">
            {featuresData.map((feature, index) => (
              <div key={index} className="hospital-feature-item">
                <h3 className="hospital-feature-title">{feature.title}</h3>
                <p className="hospital-feature-text">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Hospital);
