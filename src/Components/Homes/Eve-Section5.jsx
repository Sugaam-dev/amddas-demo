
import React, { useEffect, useRef } from 'react';
import './Eve-Section5.css';

const EveSection5 = () => {
  const mainAreaRef = useRef(null);
  const galleryRef = useRef(null);
  const narrativeRef = useRef(null);

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
    if (mainAreaRef.current) observer.observe(mainAreaRef.current);
    if (galleryRef.current) observer.observe(galleryRef.current);
    if (narrativeRef.current) observer.observe(narrativeRef.current);

    // Cleanup
    return () => {
      if (mainAreaRef.current) observer.unobserve(mainAreaRef.current);
      if (galleryRef.current) observer.unobserve(galleryRef.current);
      if (narrativeRef.current) observer.unobserve(narrativeRef.current);
    };
  }, []);

  const handleEventPageRedirect = () => {
    // Navigate to events page - you can replace this with your routing logic
    window.location.href = '/amddas-events';
  };

  return (
    <div className="portfolio-showcase">
      {/* Content Section with Image on Right */}
      <div className="main-area" ref={mainAreaRef}>
        <div className="flex-layout">
          <div className="narrative-wrapper" ref={narrativeRef}>
            <h2 className="story-heading">
              Food Safety and Handling
              <div className="story-accent"></div>
            </h2>
            
            <p className="story-narrative">
              Ensure the safety and quality of food with our comprehensive food handling course. Learn about hygiene, sanitation, and regulatory compliance to protect your customers and your business.
            </p>
            
            <button className="explore-button" onClick={handleEventPageRedirect}>
              Learn More
            </button>
          </div>
          
          <div className="gallery-wrapper" ref={galleryRef}>
            <img 
              src="./images/Food-Sefty.jpeg" 
              alt="Private function catering with elegant table setup and intimate dining atmosphere"
              className="gallery-visual"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveSection5;