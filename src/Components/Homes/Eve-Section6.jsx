
import React, { useEffect, useRef } from 'react';
import './Eve-Section6.css';

const EveSection6 = () => {
  const mainContentRef = useRef(null);
  const visualRef = useRef(null);
  const textualRef = useRef(null);

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
    if (mainContentRef.current) observer.observe(mainContentRef.current);
    if (visualRef.current) observer.observe(visualRef.current);
    if (textualRef.current) observer.observe(textualRef.current);

    // Cleanup
    return () => {
      if (mainContentRef.current) observer.unobserve(mainContentRef.current);
      if (visualRef.current) observer.unobserve(visualRef.current);
      if (textualRef.current) observer.unobserve(textualRef.current);
    };
  }, []);

  const handleEventsNavigation = () => {
    // Navigate to events page - you can replace this with your routing logic
    window.location.href = '/amddas-events';
  };

  return (
    <div className="experience-section">
      {/* Content Section with Image */}
      <div className="core-content-section" ref={mainContentRef}>
        <div className="grid-container">
          <div className="visual-wrapper" ref={visualRef}>
            <img 
              src="./images/Kitchen-Essential.jpg" 
              alt="Outdoor event catering with tents and professional service setup"
              className="display-media"
            />
          </div>
          
          <div className="textual-wrapper" ref={textualRef}>
            <h2 className="display-title">
              Kitchen Management Essentials
              <div className="display-underline"></div>
            </h2>
            
            <p className="display-content">
              Gain the skills to effectively manage a kitchen, including inventory control, staff management, and cost optimization. Our program prepares you for leadership roles in the food service industry.
            </p>
            
            <button className="navigate-btn" onClick={handleEventsNavigation}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveSection6;