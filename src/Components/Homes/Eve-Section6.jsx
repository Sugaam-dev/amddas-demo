import React, { useEffect, useRef, useCallback } from 'react';
import './Eve-Section6.css';
import { useNavigate } from 'react-router-dom';

const EveSection6 = () => {
  const mainContentRef = useRef(null);
  const visualRef = useRef(null);
  const textualRef = useRef(null);
  const navigate = useNavigate();

  // Constants for scroll behavior (matching other components)
  const SCROLL_DELAY = 800;
  const NAVBAR_HEIGHT = 110;
  const SCROLL_OFFSET = 20;

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

  // Scroll to section utility function (matching navbar and footer logic)
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const scrollToPosition = Math.max(0, absoluteElementTop - NAVBAR_HEIGHT - SCROLL_OFFSET);
      
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  // Handle Training navigation using the same logic as navbar and footer
  const handleEventsNavigation = useCallback(() => {
    const serviceType = 'Training'; // Training key for services navigation
    const sectionId = `${serviceType.toLowerCase()}-section`; // Creates 'training-section'
    const currentPath = window.location.pathname;
    
    if (currentPath === '/services') {
      // If already on services page, scroll to training section
      scrollToSection(sectionId);
    } else {
      // Navigate to services page and then scroll to training section
      navigate('/services');
      sessionStorage.setItem('scrollTarget', sectionId);
      setTimeout(() => scrollToSection(sectionId), SCROLL_DELAY);
    }
  }, [navigate, scrollToSection]);

  return (
    <div className="experience-section">
      {/* Content Section with Image */}
      <div className="core-content-section" ref={mainContentRef}>
        <div className="grid-container">
          <div className="visual-wrapper" ref={visualRef}>
            <img 
              src="./images/Kitchen-Essential.jpg" 
              alt="Kitchen management essentials training with professional guidance"
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
