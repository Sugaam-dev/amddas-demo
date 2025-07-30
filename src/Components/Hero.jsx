// // // import React, { useState, useEffect } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import "../Styles/hero.css";

// // // const slides = [
// // //   {
// // //     id: 1,
// // //     title: "Delicious Food",
// // //     description:
// // //       "AMDDAS Foods Catering Service offers the same elite service and quality dining experience for any occasion and for any number of Guests.",
// // //   },
// // //   {
// // //     id: 2,
// // //     title: "Authentic Indian Flavors",
// // //     description:
// // //       "Over three years of culinary experience in Food Catering to add delicious tastes of India to any special event – big or small.",
// // //   },
// // //   {
// // //     id: 3,
// // //     title: "Feed your dreams…",
// // //     description:
// // //       "Name it a corporate event, office daily lunch & dinner, small lunch or get-together, evening dinner party, or family reunions.",
// // //   },
// // // ];

// // // const Hero = () => {
// // //   const [currentSlide, setCurrentSlide] = useState(0);

// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setCurrentSlide((prev) => (prev + 1) % slides.length);
// // //     }, 6000); // Change slide every 6 seconds
// // //     return () => clearInterval(interval);
// // //   }, []);

// // //   // Variants for animations
// // //   const slideVariants = {
// // //     initial: { opacity: 0 },
// // //     animate: { opacity: 1 },
// // //     exit: { opacity: 0 },
// // //   };

// // //   const textVariants = {
// // //     hidden: { opacity: 0, y: 10 },
// // //     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// // //   };

// // //   return (
// // //     <section id="hero" >
// // //       <div
// // //         className="hero-container"
// // //         style={{
// // //           width: "100%",
// // //           height: "100%",
// // //           position: "relative",
         
// // //         }}
// // //       >
// // //         <AnimatePresence mode="wait">
// // //           <motion.div
// // //             key={slides[currentSlide].id}
// // //             variants={slideVariants}
// // //             initial="initial"
// // //             animate="animate"
// // //             exit="exit"
// // //             transition={{ duration: 0.8 }}
// // //             style={{
// // //               position: "absolute",
// // //               width: "100%",
// // //               height: "100%",
// // //               display: "flex",
// // //               alignItems: "center",
// // //               justifyContent: "center",
// // //               textAlign: "center",
            
          
// // //             }}
// // //           >
// // //             <motion.div
// // //               className="carousel-content"
// // //               initial="hidden"
// // //               animate="visible"
// // //               variants={textVariants}
// // //               style={{
// // //                 maxWidth: "600px",
// // //                 margin: "0 auto",
// // //               }}
// // //             >
// // //               <h3
             
// // //               >
// // //                 {slides[currentSlide].title}
// // //               </h3>
// // //               <p
// // //                 style={{
// // //                   fontSize: "18px",
// // //                   lineHeight: "1.6",
// // //                 }}
// // //               >
// // //                 {slides[currentSlide].description}
// // //               </p>
// // //             </motion.div>
// // //           </motion.div>
// // //         </AnimatePresence>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Hero;

// // import React, { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import "../Styles/hero.css";

// // const bannerImages = [
// //   {
// //     id: 1,
// //     url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
// //     // title: "Smart.Meal.Solution",
// //     description: "Smart.Meal.Solution"
// //   },
// //   {
// //     id: 2,
// //     url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
// //     // title: "Quick.Clean.Convinient",
// //     description: "Quick.Clean.Convinient"
// //   },
// //   {
// //     id: 3,
// //     url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
// //     // title: "Fast.Fresh.Flexible",
// //     description: "Fast.Fresh.Flexible"
// //   },
// //   {
// //     id: 2,
// //     url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
// //     // title: "Events.Elevated.Seemlessly",
// //     description: "Events.Elevated.Seemlessly"
// //   },
// // ];

// // const Hero = () => {
// //   const [currentSlide, setCurrentSlide] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
// //     }, 5000); // Change slide every 5 seconds
// //     return () => clearInterval(interval);
// //   }, []);

// //   const goToSlide = (index) => {
// //     setCurrentSlide(index);
// //   };

// //   const goToPrevious = () => {
// //     setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
// //   };

// //   const goToNext = () => {
// //     setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
// //   };

// //   // Animation variants
// //   const slideVariants = {
// //     initial: { opacity: 0, scale: 1.1 },
// //     animate: { opacity: 1, scale: 1 },
// //     exit: { opacity: 0, scale: 0.95 },
// //   };

// //   const overlayVariants = {
// //     hidden: { opacity: 0, y: 30 },
// //     visible: { 
// //       opacity: 1, 
// //       y: 0, 
// //       transition: { duration: 0.8, delay: 0.3 } 
// //     },
// //   };

// //   return (
// //     <section id="hero" className="hero-section">
// //       <div className="hero-container">
// //         {/* Image Carousel */}
// //         <AnimatePresence mode="wait">
// //           <motion.div
// //             key={bannerImages[currentSlide].id}
// //             variants={slideVariants}
// //             initial="initial"
// //             animate="animate"
// //             exit="exit"
// //             transition={{ duration: 1 }}
// //             className="carousel-slide"
// //             style={{
// //               backgroundImage: `url(${bannerImages[currentSlide].url})`,
// //             }}
// //           />
// //         </AnimatePresence>

// //         {/* Dark Overlay */}
// //         <div className="dark-overlay" />

// //         {/* Content Overlay */}
// //         <motion.div
// //           key={`content-${currentSlide}`}
// //           variants={overlayVariants}
// //           initial="hidden"
// //           animate="visible"
// //           className="content-overlay"
// //         >
// //           <h1 className="hero-title">
// //             {bannerImages[currentSlide].title}
// //           </h1>
// //           <p className="hero-description">
// //             {bannerImages[currentSlide].description}
// //           </p>
// //         </motion.div>

// //         {/* Navigation Arrows */}
// //         <button
// //           onClick={goToPrevious}
// //           className="nav-arrow nav-arrow-left"
// //         >
// //           ‹
// //         </button>

// //         <button
// //           onClick={goToNext}
// //           className="nav-arrow nav-arrow-right"
// //         >
// //           ›
// //         </button>

// //         {/* Dot Indicators */}
// //         {/* <div className="dot-indicators">
// //           {bannerImages.map((_, index) => (
// //             <button
// //               key={index}
// //               onClick={() => goToSlide(index)}
// //               className={`dot-indicator ${index === currentSlide ? 'active' : ''}`}
// //             />
// //           ))}
// //         </div> */}

// //         {/* Progress Bar */}
// //         <div className="progress-container">
// //           <motion.div
// //             key={`progress-${currentSlide}`}
// //             initial={{ width: '0%' }}
// //             animate={{ width: '100%' }}
// //             transition={{ duration: 5, ease: 'linear' }}
// //             className="progress-bar"
// //           />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import "../Styles/hero.css";

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
//     url: "./images/mission.jpg",
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

//   const goToPrevious = () => {
//     setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
//   };

//   const goToNext = () => {
//     setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
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

//         {/* Navigation Arrows */}
//         <button
//           onClick={goToPrevious}
//           className="nav-arrow nav-arrow-left"
//         >
//           ‹
//         </button>

//         <button
//           onClick={goToNext}
//           className="nav-arrow nav-arrow-right"
//         >
//           ›
//         </button>

//         {/* Progress Bar */}
//         <div className="progress-container">
//           <motion.div
//             key={`progress-${currentSlide}`}
//             initial={{ width: '0%' }}
//             animate={{ width: '100%' }}
//             transition={{ duration: 5, ease: 'linear' }}
//             className="progress-bar"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../Styles/hero.css";

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