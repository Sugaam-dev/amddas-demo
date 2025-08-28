import React, { useEffect, useRef, useCallback } from 'react';
import './Eve-Section5.css';
import { useNavigate } from 'react-router-dom';

const EveSection5 = () => {
  const mainAreaRef = useRef(null);
  const galleryRef = useRef(null);
  const narrativeRef = useRef(null);
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

// Scroll to section utility function with improved centering
const scrollToSection = useCallback((sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.pageYOffset;
    const elementHeight = elementRect.height;
    const viewportHeight = window.innerHeight;
    
    // Calculate position to center the element
    const centerPosition = absoluteElementTop - (viewportHeight / 2) + (elementHeight / 2);
    const scrollToPosition = Math.max(0, centerPosition);
    
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });
  }
}, []);


  // Handle Training navigation using the same logic as navbar and footer
  const handleEventPageRedirect = useCallback(() => {
    const sectionId = 'food-handler-training-section'; // Specific section ID
    const currentPath = window.location.pathname;
    
    if (currentPath === '/services') {
      // If already on services page, scroll to food handler training section
      scrollToSection(sectionId);
    } else {
      // Navigate to services page and then scroll to food handler training section
      navigate('/services');
      sessionStorage.setItem('scrollTarget', sectionId);
      setTimeout(() => scrollToSection(sectionId), SCROLL_DELAY);
    }
  }, [navigate, scrollToSection]);

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
              alt="Food safety and handling training with professional certification"
              className="gallery-visual"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveSection5;
