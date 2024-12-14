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
      "Over three years of culinary experience in Food Catering to add delicious tastes of India to any special event – big or small. We offer quality hygienic dishes that are not only authentic to the Indian subcontinent, but are also made with fresh ingredients to bring out the true texture and flavor of Indian cuisine.",
  },
  {
    id: 3,
    title: "Feed your dreams…",
    description:
      "Name it a corporate event, office daily lunch & dinner, small lunch or get-together, evening dinner party, an office party or family reunions.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" style={{ height: "100vh", overflow: "hidden" }}>
      <div className="hero-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentSlide].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="carousel-item"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
          
              color: "#fff",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <div className="carousel-content">
              <h2>{slides[currentSlide].title}</h2>
              <p>{slides[currentSlide].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
