
import React, { useEffect, useRef } from 'react';
import './Eve-Section3.css';

const EveSection3 = () => {
  const primarySectionRef = useRef(null);
  const pictureWrapperRef = useRef(null);
  const detailsWrapperRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements
    if (primarySectionRef.current) observer.observe(primarySectionRef.current);
    if (pictureWrapperRef.current) observer.observe(pictureWrapperRef.current);
    if (detailsWrapperRef.current) observer.observe(detailsWrapperRef.current);

    // Cleanup
    return () => {
      if (primarySectionRef.current) observer.unobserve(primarySectionRef.current);
      if (pictureWrapperRef.current) observer.unobserve(pictureWrapperRef.current);
      if (detailsWrapperRef.current) observer.unobserve(detailsWrapperRef.current);
    };
  }, []);

  const handleEventPageNavigation = () => {
    // Navigate to events page - you can replace this with your routing logic
    window.location.href = '/amddas-events';
  };

  return (
    <div className="portfolio-section">
      {/* Content Section with Image on Left */}
      <div className="display-content-section" ref={primarySectionRef}>
        <div className="arrangement-container">
          <div className="picture-wrapper" ref={pictureWrapperRef}>
            <img 
              src="./images/Community-Festival.jpg" 
              alt="Educational institution dining with students and healthy food options"
              className="showcase-image"
            />
          </div>
          
          <div className="details-wrapper" ref={detailsWrapperRef}>
            <h2 className="primary-heading">
             Community Festivals and Events
              <div className="primary-underline"></div>
            </h2>
            
            <p className="primary-description">
              Add flavor to your community events with our diverse and exciting catering options. We provide delicious food and efficient service to make your festival a success.
              </p>
            
            <button className="action-button" onClick={handleEventPageNavigation}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveSection3;