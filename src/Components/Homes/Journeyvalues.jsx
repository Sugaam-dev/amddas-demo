import React, { useState, useEffect, useRef } from 'react';
import './Journeyvalues.css';

const JourneyValues = () => {
  const [counters, setCounters] = useState({
    meals: 0,
    courses: 0,
    trainers: 0,
    sessions: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to trigger animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Add animate class to trigger animations
          if (sectionRef.current) {
            sectionRef.current.classList.add('animate-in');
          }
          // Delay counter animation to start after other animations
          setTimeout(() => startCountAnimation(), 800);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Counter animation function
  const startCountAnimation = () => {
    const targets = {
      meals: 2000,
      courses: 150,
      trainers: 50,
      sessions: 10
    };

    const durations = {
      meals: 2000,
      courses: 1800,
      trainers: 1500,
      sessions: 1200
    };

    Object.keys(targets).forEach((key) => {
      const target = targets[key];
      const duration = durations[key];
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      const stepTime = duration / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }

        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepTime);
    });
  };

  return (
    <section className="journey-values-section" ref={sectionRef}>
      <div className="journey-container">
        
        {/* Left Side - Content with Scroll Animations */}
        <div className="content-sectionn">
          <h2 className="section-title fade-in-up">
            Our Journey and Core Values
            <div className="title-underline"></div>
          </h2>
          <p className="section-description fade-in-up stagger-1">
            Since 2016, AMDDAS has been committed to delivering high-quality 
            catering and comprehensive culinary training. Our mission is to 
            ensure customer satisfaction through innovation, excellence, and 
            professional development, making us a trusted name in the industry.
          </p>

          {/* Stats Grid with Staggered Animations */}
          <div className="stats-grid">
            <div className="stat-item fade-in-up stagger-2">
              <div className="stat-number">{counters.meals.toLocaleString()}</div>
              <div className="stat-label">meals</div>
              <div className="stat-description">Served Monthly</div>
            </div>

            <div className="stat-item fade-in-up stagger-3">
              <div className="stat-number">{counters.courses}</div>
              <div className="stat-label">courses</div>
              <div className="stat-description">Training programs conducted</div>
            </div>

            <div className="stat-item fade-in-up stagger-4">
              <div className="stat-number">{counters.trainers}</div>
              <div className="stat-label">trainers</div>
              <div className="stat-description">Professional trainers</div>
            </div>

            <div className="stat-item fade-in-up stagger-5">
              <div className="stat-number">{counters.sessions}</div>
              <div className="stat-label">courses</div>
              <div className="stat-description">Specialized training sessions</div>
            </div>
          </div>
        </div>

        {/* Right Side - Image with Scroll Animation */}
        <div className="image-sectionn fade-in-right">
          <div className="chef-image-container">
            <img 
              src="/images/journeyandcore.jpg" 
              alt="Professional chefs cooking in kitchen" 
              className="chef-image"
            />
            <div className="image-overlay"></div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default JourneyValues;
