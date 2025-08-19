import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./hero.css";

const bannerImages = [
  {
    id: 1,
    url: "./images/Banner1.jpeg",
    title: "AMDDAS: Catering & Culinary Training",
    description: "Since 2016, Amddas has been a trusted kitchen, capable of serving 4000+ meals at once. We specialize in corporate catering and offer comprehensive culinary training programs. Discover excellence with us!"
  },
  {
    id: 2,
    url: "./images/Banner-Corporate.jpeg",
    title: "Corporate Catering Excellence",
    description: "Fueling Workdays with Fresh, Hygienic, and Delicious Meals"
  },
  {
    id: 3,
    url: "./images/Banner-Marriage.jpeg",
    title: "Weddings",
    description: "Flavors of Love, Crafted for Your Perfect Day"
  },
  {
    id: 4,
    url: "./images/Banner-Festivals.jpeg",
    title: "Festivals",
    description: "Celebrating Traditions with Food That Feels Like Home"
  },
  {
    id: 5,
    url: "./images/Baner-Corporate-events.jpeg",
    title: "Corporate Events",
    description: "From Boardrooms to Ballrooms — Exceptional Food for Every Corporate Occasion"
  },
  {
    id: 6,
    url: "./images/Culinary-training.png",
    title: "Training",
    description: "Nurturing Culinary Talent with Fresh Ingredients and Safe Practices"
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="hero" className="amddas-hero-section">
      <div className="amddas-hero-container">
        {/* Background Images - Only Opacity Changes */}
        {bannerImages.map((image, index) => (
          <div
            key={image.id}
            className="amddas-carousel-slide"
            style={{
              backgroundImage: `url(${image.url})`,
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          />
        ))}

        {/* Dark Overlay */}
        <div className="amddas-dark-overlay" />

        {/* Content Overlay - Fixed Container */}
        <div className="amddas-content-overlay">
          <div className="amddas-content-wrapper">
            {/* Animated Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeInOut" 
                }}
              >
                <h1 className="amddas-hero-title">
                  {bannerImages[currentSlide].title}
                </h1>
                <p className="amddas-hero-description">
                  {bannerImages[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="amddas-pagination-dots">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`amddas-pagination-dot ${index === currentSlide ? 'amddas-active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
