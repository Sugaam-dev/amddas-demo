import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Styles/hero.css";

const slides = [
  {
    id: 1,
    title: "Delicious Food",
    description:
      "AMDDAS Foods Catering Service offers the same elite service and quality dining experience for any occasion and for any number of Guests.",
  },
  {
    id: 2,
    title: "Authentic Indian Flavors",
    description:
      "Over three years of culinary experience in Food Catering to add delicious tastes of India to any special event – big or small.",
  },
  {
    id: 3,
    title: "Feed your dreams…",
    description:
      "Name it a corporate event, office daily lunch & dinner, small lunch or get-together, evening dinner party, or family reunions.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(interval);
  }, []);

  // Variants for animations
  const slideVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="hero" style={{ height: "100vh", overflow: "hidden" }}>
      <div
        className="hero-container"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
         
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentSlide].id}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.8 }}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            
          
            }}
          >
            <motion.div
              className="carousel-content"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              style={{
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "600",
                  marginBottom: "1rem",
                }}
              >
                {slides[currentSlide].title}
              </h2>
              <p
                style={{
                  fontSize: "1.25rem",
                  lineHeight: "1.6",
                }}
              >
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
