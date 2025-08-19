import React, { useState, useEffect, memo, useRef } from 'react';
import './Offers.css';

const Offers = memo(() => {
  const [countdown, setCountdown] = useState({
    days: 8,
    hours: 18,
    minutes: 42,
    seconds: 15
  });

  const containerRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Countdown timer effect
  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      setCountdown(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
              days--;
              if (days < 0) {
                days = 0;
                hours = 0;
                minutes = 0;
                seconds = 0;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVisible]);

  // Optimized sparkle effect
  useEffect(() => {
    if (!isVisible) return;

    let sparkleCount = 0;
    const maxSparkles = 2;
    
    const createSparkle = () => {
      if (sparkleCount >= maxSparkles) return;
      
      sparkleCount++;
      const sparkle = document.createElement('div');
      sparkle.className = 'floating-sparkle';
      sparkle.style.cssText = `
        position: fixed;
        left: ${Math.random() * window.innerWidth}px;
        top: ${Math.random() * window.innerHeight}px;
        width: 6px;
        height: 6px;
        background: #57F6E7;
        border-radius: 50%;
        animation: sparkle 1.5s ease-out forwards;
        pointer-events: none;
        z-index: 1000;
      `;
      
      document.body.appendChild(sparkle);
      
      setTimeout(() => {
        if (sparkle.parentNode) {
          sparkle.remove();
          sparkleCount--;
        }
      }, 1500);
    };
    
    const sparkleInterval = setInterval(createSparkle, 3000);
    return () => {
      clearInterval(sparkleInterval);
      document.querySelectorAll('.floating-sparkle').forEach(el => el.remove());
    };
  }, [isVisible]);

  const orderNow = () => {
    alert('🍽️ Thank you! Redirecting to our online ordering system...\n\nEnjoy 30% OFF on all Ganesh Festival specials!');
  };

  const viewMenu = () => {
    alert('📋 Opening our special Ganesh Festival Menu...\n\nFeaturing traditional sweets, thalis, and festive delicacies!');
  };

  const formatNumber = (num) => num.toString().padStart(2, '0');

  return (
    <div ref={containerRef} className="offer-container">
      <div className="decorative-elements">
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
      </div>
      
      <div className="content-wrapperr">
        <div className="image-section">
          <img 
            src="/images/ganesh-removebg.webp" 
            alt="Lord Ganesh" 
            className="ganesh-image"
            loading="lazy"
          />
        </div>
        
        <div className="text-section">
          <div className="festival-badge">🍽️ GANESH FESTIVAL FEAST 🍽️</div>
          
          <div className="restaurant-name">"Taste of Tradition" Restaurant</div>
          
          <h1 className="main-heading">HURRY UP!</h1>
          <h2 className="sub-heading">OFFERS WILL END SOON</h2>
          
          <div className="offer-details">
            <div className="discount-text">30% OFF</div>
            <div className="menu-items">
              <span className="menu-item">🥟 Modak Special</span>
              <span className="menu-item">🍛 Festive Thali</span>
              <span className="menu-item">🍮 Puran Poli</span>
              <span className="menu-item">🥛 Shrikhand</span>
            </div>
            
            <div className="special-offers">
              <div className="offer-item">🚚 Free Home Delivery</div>
              <div className="offer-item">🎁 Complimentary Dessert</div>
              <div className="offer-item">👨‍👩‍👧‍👦 Family Combo Deals</div>
              <div className="offer-item">📞 Pre-Order Available</div>
            </div>
            
            <div className="timer">
              <div className="timer-text">⏰ Festival Offer Ends In:</div>
              <div className="countdown">
                <div className="countdown-item">
                  <span className="countdown-number">{formatNumber(countdown.days)}</span>
                  <span className="countdown-label">Days</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-number">{formatNumber(countdown.hours)}</span>
                  <span className="countdown-label">Hours</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-number">{formatNumber(countdown.minutes)}</span>
                  <span className="countdown-label">Min</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-number">{formatNumber(countdown.seconds)}</span>
                  <span className="countdown-label">Sec</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="cta-buttons">
            <button className="cta-button" onClick={orderNow}>
              ORDER NOW
            </button>
            <button className="cta-button secondary" onClick={viewMenu}>
              VIEW MENU
            </button>
          </div>
          
          <div className="blessing-text">
            🙏 "Happy Ganesh Chaturthi" 🙏<br />
            Celebrate with authentic flavors & divine blessings
          </div>
        </div>
      </div>
    </div>
  );
});

export default Offers;