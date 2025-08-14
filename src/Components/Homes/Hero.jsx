// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import "./hero.css";

// const bannerImages = [
//   {
//     id: 1,
//     url: "./images/gallery.jpg",
//     description: "Smart.Meal.Solution"
//   },
//   {
//     id: 2,
//     url: "./images/meal.jpg",
//     description: "Quick.Clean.Convinient"
//   },
//   {
//     id: 3,
//     url: "./images/amdback.jpg",
//     description: "Fast.Fresh.Flexible"
//   },
//   {
//     id: 4,
//     url: "./images/story.jpg",
//     description: "Events.Elevated.Seemlessly"
//   },
// ];

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
//     }, 5000); // Change slide every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <section id="hero" className="hero-section">
//       <div className="hero-container">
//         {/* All Images Rendered - Only Opacity Changes */}
//         {bannerImages.map((image, index) => (
//           <div
//             key={image.id}
//             className="carousel-slide"
//             style={{
//               backgroundImage: `url(${image.url})`,
//               opacity: index === currentSlide ? 1 : 0,
//               transition: 'opacity 1s ease-in-out',
//             }}
//           />
//         ))}

//         {/* Dark Overlay */}
//         <div className="dark-overlay" />

//         {/* Content Overlay */}
//         <motion.div
//           key={`content-${currentSlide}`}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="content-overlay"
//         >
//           <p className="hero-description">
//             {bannerImages[currentSlide].description}
//           </p>
//         </motion.div>

//         {/* Pagination Dots */}
//         <div className="pagination-dots">
//           {bannerImages.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>


//       </div>
//     </section>
//   );
// };

// export default Hero;

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
    url: "./images/amdback.jpg",
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
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);

  // Preload images function
  const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(src);
      img.onerror = reject;
      img.src = src;
    });
  };

  // Load images on component mount
  useEffect(() => {
    const loadImages = async () => {
      try {
        // Load the first image immediately for better UX
        await preloadImage(bannerImages[0].url);
        setLoadedImages(new Set([bannerImages[0].url]));
        setIsLoading(false);

        // Load remaining images in the background
        const remainingImages = bannerImages.slice(1).map(img => img.url);
        const loadPromises = remainingImages.map(preloadImage);
        
        // Load images one by one to avoid overwhelming the browser
        for (const promise of loadPromises) {
          try {
            const loadedSrc = await promise;
            setLoadedImages(prev => new Set([...prev, loadedSrc]));
          } catch (error) {
            console.warn(`Failed to load image: ${promise}`);
          }
        }
      } catch (error) {
        console.error('Failed to load initial image:', error);
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  // Carousel auto-slide effect
  useEffect(() => {
    if (isLoading) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isLoading]);

  const goToSlide = (index) => {
    if (!isLoading) {
      setCurrentSlide(index);
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* Loading State */}
        {isLoading && (
          <div className="loading-skeleton">
            <div className="loading-animation"></div>
          </div>
        )}
        
        {/* Image Slides - Only render when loaded */}
        {!isLoading && bannerImages.map((image, index) => (
          <div
            key={image.id}
            className="carousel-slide"
            style={{
              backgroundImage: loadedImages.has(image.url) ? `url(${image.url})` : 'none',
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          />
        ))}

        {/* Dark Overlay */}
        {!isLoading && <div className="dark-overlay" />}

        {/* Content Overlay */}
        {!isLoading && (
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
        )}

        {/* Pagination Dots */}
        {!isLoading && (
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
        )}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="loading-indicator">
            <div className="spinner"></div>
            <p className="loading-text">Loading...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;