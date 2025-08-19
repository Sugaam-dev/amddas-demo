
import React, { useEffect, useRef } from 'react';
import './Eve-Section2.css';

const EveSection2 = () => {
  const mainSectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const contentContainerRef = useRef(null);

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
    if (mainSectionRef.current) observer.observe(mainSectionRef.current);
    if (imageContainerRef.current) observer.observe(imageContainerRef.current);
    if (contentContainerRef.current) observer.observe(contentContainerRef.current);

    // Cleanup
    return () => {
      if (mainSectionRef.current) observer.unobserve(mainSectionRef.current);
      if (imageContainerRef.current) observer.unobserve(imageContainerRef.current);
      if (contentContainerRef.current) observer.unobserve(contentContainerRef.current);
    };
  }, []);

   const handleEventsNavigation = () => {
    // Navigate to events page - you can replace this with your routing logic
    window.location.href = '/amddas-events';
  };

  return (
    <div className="services-section">
      {/* Content Section with Image on Right */}
      <div className="main-content-section" ref={mainSectionRef}>
        <div className="layout-container">
          <div className="text-content-wrapper" ref={contentContainerRef}>
            <h2 className="section-heading">
              Corporate Event Catering Solutions
              <div className="heading-underline"></div>
            </h2>
            
            <p className="section-text">
             Provide your employees with nutritious and delicious. meals that boost productivity and morale. We offer flexible catering solutions tailored to your company's needs and budget
            </p>
            <button className="cta-buttonn" onClick={handleEventsNavigation}>
              Learn More
            </button>
          </div>
          
          <div className="image-container" ref={imageContainerRef}>
            <img 
              src="./images/Corporate-Events.jpg" 
              alt="Corporate cafeteria with professional food service"
              className="feature-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveSection2;