import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./hero.css";

const bannerImages = [
  {
    id: 1,
    url: "./images/gallery.jpg",
    description: "Smart.Meal.Solution"
  },
  {
    id: 2,
    url: "./images/meal.jpg",
    description: "Quick.Clean.Convinient"
  },
  {
    id: 3,
    url: "./images/mission.jpg",
    description: "Fast.Fresh.Flexible"
  },
  {
    id: 4,
    url: "./images/story.jpg",
    description: "Events.Elevated.Seemlessly"
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* All Images Rendered - Only Opacity Changes */}
        {bannerImages.map((image, index) => (
          <div
            key={image.id}
            className="carousel-slide"
            style={{
              backgroundImage: `url(${image.url})`,
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          />
        ))}

        {/* Dark Overlay */}
        <div className="dark-overlay" />

        {/* Content Overlay */}
        <motion.div
          key={`content-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="content-overlay"
        >
          <p className="hero-description">
            {bannerImages[currentSlide].description}
          </p>
        </motion.div>

        {/* Pagination Dots */}
        <div className="pagination-dots">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>


      </div>
    </section>
  );
};

export default Hero;