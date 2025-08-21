import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import './whatwedo.css';
import Corporate_new from './Corporate_new';
import Training from './Training';
import Education from './Education';
import Hospital from './Hospital';

function WhatWeDo() {
  // Cache refs for DOM sections to avoid querySelector/getElementById on scroll
  const corporateRef = useRef(null);
  const educationalRef = useRef(null);
  const hospitalRef = useRef(null);
  const trainingRef = useRef(null);

  // Memoize section map to prevent recreation on every render
  const SECTION_MAP = useMemo(() => ({
    scrollToCorporate: 'corporate-section',
    scrollToEducational: 'educational-section',
    scrollToHospital: 'hospital-section',
    scrollToTraining: 'training-section',
  }), []);

  // Memoize ref mapping for better performance
  const refMap = useMemo(() => ({
    'corporate-section': corporateRef,
    'educational-section': educationalRef,
    'hospital-section': hospitalRef,
    'training-section': trainingRef,
  }), []);

  // Memoized scroll function to prevent recreation
  const scrollToSection = useCallback((targetRef) => {
    if (targetRef?.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const navbarHeight = 90;
      const y = Math.max(0, rect.top + scrollY - navbarHeight);
      
      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        window.scrollTo({ top: y, behavior: 'smooth' });
      });
    }
  }, []);

  // Memoized cleanup function
  const clearSessionStorage = useCallback(() => {
    Object.keys(SECTION_MAP).forEach(key => {
      try {
        sessionStorage.removeItem(key);
      } catch (error) {
        // Handle cases where sessionStorage might not be available
        console.warn('SessionStorage not available:', error);
      }
    });
  }, [SECTION_MAP]);

  useEffect(() => {
    // Find which scroll key is set
    let scrollKey = null;
    try {
      scrollKey = Object.keys(SECTION_MAP).find(key => sessionStorage.getItem(key));
    } catch (error) {
      console.warn('SessionStorage not available:', error);
      return;
    }

    if (scrollKey) {
      // Remove all flags
      clearSessionStorage();
      
      // Use shorter timeout and requestAnimationFrame for better performance
      const timeoutId = setTimeout(() => {
        const sectionId = SECTION_MAP[scrollKey];
        const targetRef = refMap[sectionId];
        
        if (targetRef) {
          scrollToSection(targetRef);
        }
      }, 100); // Reduced delay for better perceived performance

      // Cleanup timeout if component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [SECTION_MAP, refMap, scrollToSection, clearSessionStorage]);

  return (
    <div className="Our-services-root">
      <div className="Our-services-container">
        <h2 className="Our-services-title">Our Services</h2>
        <span className="Our-services-description">
          Our solutions are tailor made to specific requirements of Business & Corporate sectors.
        </span>
      </div>

      <div
        ref={corporateRef}
        id="corporate-section"
        className="Our-services-section"
      >
        <Corporate_new />
      </div>

      <div
        ref={educationalRef}
        id="educational-section"
        className="Our-services-section"
      >
        <Education />
      </div>

      <div
        ref={hospitalRef}
        id="hospital-section"
        className="Our-services-section"
      >
        <Hospital />
      </div>

      <div
        ref={trainingRef}
        id="training-section"
        className="Our-services-section"
      >
        <Training />
      </div>
    </div>
  );
}

export default React.memo(WhatWeDo);
