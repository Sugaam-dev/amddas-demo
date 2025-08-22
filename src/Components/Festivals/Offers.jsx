import React, { useState, useEffect, memo, useRef } from 'react';
import './Offers.css';

const Offers = memo(() => {
  // Calculate dynamic countdown based on Ganesh Festival dates
  const getInitialCountdown = () => {
    const now = new Date();
    // Offer ends on Ganesh Visarjan: September 6, 2025 (10-day festival)
    const offerEndDate = new Date(2025, 8, 6, 23, 59, 59); // End of September 6
    
    const timeDifference = offerEndDate - now;
    
    if (timeDifference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }
    
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    return { days, hours, minutes, seconds, expired: false };
  };

  const [countdown, setCountdown] = useState(getInitialCountdown());
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

  // Dynamic countdown timer effect
  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      const now = new Date();
      const offerEndDate = new Date(2025, 8, 6, 23, 59, 59); // September 6, 2025 end of day
      
      const timeDifference = offerEndDate - now;
      
      if (timeDifference <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true });
        return;
      }
      
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      
      setCountdown({ days, hours, minutes, seconds, expired: false });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVisible]);

  // Optimized sparkle effect (disabled when offer expired)
  useEffect(() => {
    if (!isVisible || countdown.expired) return;

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
  }, [isVisible, countdown.expired]);

  const orderNow = () => {
    if (countdown.expired) return;
    
    const message = encodeURIComponent(
      "🍽️ Hi! I would like to place an order for the Ganesh Festival special with 30% OFF. Please share the menu and help me place my order.\n\n" +
      "Items I'm interested in:\n" +
      "Looking forward to celebrating with authentic flavors!"
    );
    const whatsappNumber = "919632764963";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  const viewMenu = () => {
    const message = encodeURIComponent(
      countdown.expired 
        ? "📋 Hi! I would like to see your regular menu and current offers.\n\nThank you! 🙏"
        : "📋 Hi! I would like to see the complete Ganesh Festival special menu with 30% OFF offers.\n\n" +
          "Please share details about:\n" +
          "• All festival specials\n" +
          "• Pricing with discount\n" +
          "• Family combo deals\n" +
          "• Free home delivery options\n\n" +
          "Thank you! 🙏"
    );
    const whatsappNumber = "9632764963";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  const formatNumber = (num) => num.toString().padStart(2, '0');

  return (
    <div ref={containerRef} className={`offer-container ${countdown.expired ? 'offer-expired' : ''}`}>
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
          {countdown.expired ? (
            <>
              <div className="festival-badge expired">🎊 GANESH FESTIVAL CONCLUDED 🎊</div>
              
              <div className="restaurant-name">"Taste of Tradition" Restaurant</div>
              
              <h1 className="main-heading expired-heading">OFFER ENDED!</h1>
              <h2 className="sub-heading">Thank you for your interest in our Ganesh Festival Special</h2>
              
              <div className="offer-details">
                <div className="expired-message">
                  <div className="expired-icon">⏰</div>
                  <div className="expired-text">
                    <h3>Festival Offer Has Ended</h3>
                    <p>Our special Ganesh Festival offer concluded on September 6, 2025.</p>
                    <p>But don't worry! We still serve delicious authentic food daily.</p>
                  </div>
                </div>
                
                <div className="regular-offerings">
                  <div className="offer-item">🍽️ Regular Menu Available</div>
                  <div className="offer-item">🚚 Free Delivery on Orders Above ₹500</div>
                  <div className="offer-item">📞 Call for Daily Specials</div>
                  <div className="offer-item">👨‍👩‍👧‍👦 Family Meals Available</div>
                </div>
              </div>
              
              <div className="cta-buttons">
                <button className="cta-button secondary" onClick={viewMenu}>
                  VIEW REGULAR MENU
                </button>
                <button className="cta-button" onClick={() => {
                  const message = encodeURIComponent("Hi! I'd like to know about your current offers and place an order. Thank you!");
                  window.open(`https://wa.me/919632764963?text=${message}`, '_blank');
                }}>
                  CONTACT US
                </button>
              </div>
            </>
          ) : (
            <>
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
            </>
          )}
          
          <div className="blessing-text">
            🙏 "Happy Ganesh Chaturthi" 🙏<br />
            {countdown.expired 
              ? "Thank you for celebrating with us!" 
              : "Celebrate with authentic flavors & divine blessings"
            }
          </div>
        </div>
      </div>
    </div>
  );
});

export default Offers;
