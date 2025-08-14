import React, { memo, useEffect, useRef, useState } from 'react';
import './Festivals.css';
import Offers from './Offers';

const LazyImage = memo(({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={className}>
      {inView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
        />
      )}
    </div>
  );
});

const AnimatedSection = memo(({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={sectionRef}
      className={`${className} ${isVisible ? 'section-visible' : ''}`}
    >
      {children}
    </div>
  );
});

const Festivals = memo(() => {
  return (
    <div className="festivals-page">
      {/* Banner Section */}
      <div className="banner">
        <LazyImage 
          src="/images/ganapati-banner.jpg" 
          alt="Ganesh Chaturthi Banner" 
          className="banner-img-container"
        />
        <div className="banner-content">
          <h3 className="festival-title">Ganpati Feast Fest</h3>
          <h1 className="banner-text">Happy Ganesh Chaturthi From AMDDAS</h1>
          <div className="offer-button">
            Get 30% OFF
          </div>
        </div>
      </div>

      {/* Content Section */}
      <AnimatedSection className="festival-section">
        <div className="text-box">
          <h2>Community Festivals</h2>
          <p>
            At AMDDAS FOODS PVT LTD, we know that festivals are a time to come together with family and friends, sharing good food and great memories.
            We offer specialized services for all major celebrations, including Diwali, Holi, Eid, Christmas, and more.
            Our team is passionate about delivering authentic, traditional dishes that honor the spirit of the season.
          </p>
          <p>
            From rich sweets and delicacies for Diwali to hearty meals for Christmas, we prepare every dish with love and attention to detail.
            We cater to specific festival needs, offering prasadam, live counters, and eco-friendly serving options.
            Our chefs use only fresh ingredients to create meals that are not only delicious but also hygienic and safe.
          </p>
          <p>
            Celebrate your festivals with AMDDAS, where every meal is a blessing.
          </p>
        </div>
        <div className="image-box">
          <LazyImage 
            src="/images/ganesha-logo-removebg.png" 
            alt="Community Festival" 
            className="festival-img-container"
          />
        </div>
      </AnimatedSection>
      
      <Offers/>
    </div>
  );
});

export default Festivals;