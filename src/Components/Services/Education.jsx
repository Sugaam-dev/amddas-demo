import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Education.css';
import education from './images/Education.webp';

function Education() {
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
        entry.target.classList.add('education-animate-in');
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
      title: 'Nutritional Balance',
      text: 'Age-appropriate meals designed to support growth and cognitive development'
    },
    {
      title: 'Learning Support', 
      text: 'Meals that enhance concentration and academic performance'
    },
    {
      title: 'Safety Standards',
      text: 'Strict food safety protocols for educational environments'
    }
  ], []);

  return (
    <div className="education-page" ref={sectionRef}>
      <div className="education-container">
        <div className="education-content">
          <h1 className="education-title">Educational Institution Services</h1>
          <p className="education-description">
            We partner with schools, colleges, and universities to deliver balanced and nutritious meals for students and staff, while maintaining high standards of food safety and taste.
          </p>
          <div className="education-features">
            {featuresData.map((feature, index) => (
              <div key={index} className="education-feature-item">
                <h3 className="education-feature-title">{feature.title}</h3>
                <p className="education-feature-text">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="education-image">
          <img 
            src={education} 
            alt="Educational Institution Services" 
            loading="lazy"
            decoding="async"
            width="600"
            height="400"
          />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Education);
