
// // // import React, { useState, useEffect, useRef } from 'react';
// // // import './Journeyvalues.css';

// // // const JourneyValues = () => {
// // //   const [counters, setCounters] = useState({
// // //     meals: 0,
// // //     courses: 0,
// // //     trainers: 0,
// // //     sessions: 0
// // //   });

// // //   const [isVisible, setIsVisible] = useState(false);
// // //   const sectionRef = useRef(null);

// // //   // Intersection Observer to trigger animation when section comes into view
// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         const [entry] = entries;
// // //         if (entry.isIntersecting && !isVisible) {
// // //           setIsVisible(true);
// // //           startCountAnimation();
// // //         }
// // //       },
// // //       { threshold: 0.3 }
// // //     );

// // //     if (sectionRef.current) {
// // //       observer.observe(sectionRef.current);
// // //     }

// // //     return () => observer.disconnect();
// // //   }, [isVisible]);

// // //   // Counter animation function
// // //   const startCountAnimation = () => {
// // //     const targets = {
// // //       meals: 2000,
// // //       courses: 150,
// // //       trainers: 50,
// // //       sessions: 10
// // //     };

// // //     const durations = {
// // //       meals: 2000,
// // //       courses: 1800,
// // //       trainers: 1500,
// // //       sessions: 1200
// // //     };

// // //     Object.keys(targets).forEach((key) => {
// // //       const target = targets[key];
// // //       const duration = durations[key];
// // //       const steps = 60;
// // //       const increment = target / steps;
// // //       let current = 0;
// // //       const stepTime = duration / steps;

// // //       const timer = setInterval(() => {
// // //         current += increment;
// // //         if (current >= target) {
// // //           current = target;
// // //           clearInterval(timer);
// // //         }
        
// // //         setCounters(prev => ({
// // //           ...prev,
// // //           [key]: Math.floor(current)
// // //         }));
// // //       }, stepTime);
// // //     });
// // //   };

// // //   return (
// // //     <section className="journey-values-section" ref={sectionRef}>
// // //       <div className="journey-container">
// // //         <div className="content-wrapper">
// // //           {/* Left Side - Image */}
// // //           <div className="image-section">
// // //             <div className="chef-image-container">
// // //               <img 
// // //                 src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
// // //                 alt="Professional chefs cooking in kitchen" 
// // //                 className="chef-image"
// // //               />
// // //               <div className="image-overlay"></div>
// // //             </div>
// // //           </div>

// // //           {/* Right Side - Content */}
// // //           <div className="content-section">
// // //             <div className="text-content">
// // //               <h2 className="section-title">Our Journey and Core Values</h2>
// // //               <p className="section-description">
// // //                 Since 2016, Amddas has been committed to delivering high-quality 
// // //                 catering and comprehensive culinary training. Our mission is to 
// // //                 ensure customer satisfaction through innovation, excellence, and 
// // //                 professional development, making us a trusted name in the industry.
// // //               </p>
// // //             </div>

// // //             {/* Stats Grid */}
// // //             <div className="stats-grid">
// // //               <div className="stat-item">
// // //                 <div className="stat-number">{counters.meals.toLocaleString()}</div>
// // //                 <div className="stat-label">meals</div>
// // //                 <div className="stat-description">Meals served annually</div>
// // //               </div>

// // //               <div className="stat-item">
// // //                 <div className="stat-number">{counters.courses}</div>
// // //                 <div className="stat-label">courses</div>
// // //                 <div className="stat-description">Training programs conducted</div>
// // //               </div>

// // //               <div className="stat-item">
// // //                 <div className="stat-number">{counters.trainers}</div>
// // //                 <div className="stat-label">trainers</div>
// // //                 <div className="stat-description">Professional trainers</div>
// // //               </div>

// // //               <div className="stat-item">
// // //                 <div className="stat-number">{counters.sessions}</div>
// // //                 <div className="stat-label">courses</div>
// // //                 <div className="stat-description">Specialized training sessions</div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default JourneyValues;

// // import React, { useState, useEffect, useRef } from 'react';
// // import './Journeyvalues.css';

// // const JourneyValues = () => {
// //   const [counters, setCounters] = useState({
// //     meals: 0,
// //     courses: 0,
// //     trainers: 0,
// //     sessions: 0
// //   });

// //   const [isVisible, setIsVisible] = useState(false);
// //   const sectionRef = useRef(null);

// //   // Intersection Observer to trigger animation when section comes into view
// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         const [entry] = entries;
// //         if (entry.isIntersecting && !isVisible) {
// //           setIsVisible(true);
// //           startCountAnimation();
// //         }
// //       },
// //       { threshold: 0.3 }
// //     );

// //     if (sectionRef.current) {
// //       observer.observe(sectionRef.current);
// //     }

// //     return () => observer.disconnect();
// //   }, [isVisible]);

// //   // Counter animation function
// //   const startCountAnimation = () => {
// //     const targets = {
// //       meals: 2000,
// //       courses: 150,
// //       trainers: 50,
// //       sessions: 10
// //     };

// //     const durations = {
// //       meals: 2000,
// //       courses: 1800,
// //       trainers: 1500,
// //       sessions: 1200
// //     };

// //     Object.keys(targets).forEach((key) => {
// //       const target = targets[key];
// //       const duration = durations[key];
// //       const steps = 60;
// //       const increment = target / steps;
// //       let current = 0;
// //       const stepTime = duration / steps;

// //       const timer = setInterval(() => {
// //         current += increment;
// //         if (current >= target) {
// //           current = target;
// //           clearInterval(timer);
// //         }

// //         setCounters(prev => ({
// //           ...prev,
// //           [key]: Math.floor(current)
// //         }));
// //       }, stepTime);
// //     });
// //   };

// //   return (
// //     <section className="journey-values-section" ref={sectionRef}>
// //       <div className="journey-container">
        
// //         {/* Left Side - Image */}
// //         <div className="content-sectionn">
// //           <h2 className="section-title">Our Journey and Core Values</h2>
// //           <p className="section-description">
// //             Since 2016, Amddas has been committed to delivering high-quality 
// //             catering and comprehensive culinary training. Our mission is to 
// //             ensure customer satisfaction through innovation, excellence, and 
// //             professional development, making us a trusted name in the industry.
// //           </p>

// //           {/* Stats Grid */}
// //           <div className="stats-grid">
// //             <div className="stat-item">
// //               <div className="stat-number">{counters.meals.toLocaleString()}</div>
// //               <div className="stat-label">meals</div>
// //               <div className="stat-description">Meals served annually</div>
// //             </div>

// //             <div className="stat-item">
// //               <div className="stat-number">{counters.courses}</div>
// //               <div className="stat-label">courses</div>
// //               <div className="stat-description">Training programs conducted</div>
// //             </div>

// //             <div className="stat-item">
// //               <div className="stat-number">{counters.trainers}</div>
// //               <div className="stat-label">trainers</div>
// //               <div className="stat-description">Professional trainers</div>
// //             </div>

// //             <div className="stat-item">
// //               <div className="stat-number">{counters.sessions}</div>
// //               <div className="stat-label">courses</div>
// //               <div className="stat-description">Specialized training sessions</div>
// //             </div>
// //           </div>
// //         </div>


// //         {/* Right Side - Content */}

// //            <div className="image-sectionn">
// //           <div className="chef-image-container">
// //             <img 
// //               src="/images/community.jpg" 
// //               alt="Professional chefs cooking in kitchen" 
// //               className="chef-image"
// //             />
// //             <div className="image-overlay"></div>
// //           </div>
// //         </div>
        
// //       </div>
// //     </section>
// //   );
// // };

// // export default JourneyValues;

// import React, { useState, useEffect, useRef } from 'react';
// import './Journeyvalues.css';

// const JourneyValues = () => {
//   const [counters, setCounters] = useState({
//     meals: 0,
//     courses: 0,
//     trainers: 0,
//     sessions: 0
//   });

//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   // Intersection Observer to trigger animation when section comes into view
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const [entry] = entries;
//         if (entry.isIntersecting && !isVisible) {
//           setIsVisible(true);
//           // Delay counter animation to start after other animations
//           setTimeout(() => startCountAnimation(), 800);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, [isVisible]);

//   // Counter animation function
//   const startCountAnimation = () => {
//     const targets = {
//       meals: 2000,
//       courses: 150,
//       trainers: 50,
//       sessions: 10
//     };

//     const durations = {
//       meals: 2000,
//       courses: 1800,
//       trainers: 1500,
//       sessions: 1200
//     };

//     Object.keys(targets).forEach((key) => {
//       const target = targets[key];
//       const duration = durations[key];
//       const steps = 60;
//       const increment = target / steps;
//       let current = 0;
//       const stepTime = duration / steps;

//       const timer = setInterval(() => {
//         current += increment;
//         if (current >= target) {
//           current = target;
//           clearInterval(timer);
//         }

//         setCounters(prev => ({
//           ...prev,
//           [key]: Math.floor(current)
//         }));
//       }, stepTime);
//     });
//   };

//   return (
//     <section className="journey-values-section" ref={sectionRef}>
//       <div className="journey-container">
        
//         {/* Left Side - Content with Scroll Animations */}
//         <div className="content-sectionn">
//           <h2 className="section-title fade-in-up">
//             Our Journey and Core Values
//           </h2>
//           <p className="section-description fade-in-up stagger-1">
//             Since 2016, Amddas has been committed to delivering high-quality 
//             catering and comprehensive culinary training. Our mission is to 
//             ensure customer satisfaction through innovation, excellence, and 
//             professional development, making us a trusted name in the industry.
//           </p>

//           {/* Stats Grid with Staggered Animations */}
//           <div className="stats-grid">
//             <div className="stat-item fade-in-up stagger-2">
//               <div className="stat-number">{counters.meals.toLocaleString()}</div>
//               <div className="stat-label">meals</div>
//               <div className="stat-description">Meals served annually</div>
//             </div>

//             <div className="stat-item fade-in-up stagger-3">
//               <div className="stat-number">{counters.courses}</div>
//               <div className="stat-label">courses</div>
//               <div className="stat-description">Training programs conducted</div>
//             </div>

//             <div className="stat-item fade-in-up stagger-4">
//               <div className="stat-number">{counters.trainers}</div>
//               <div className="stat-label">trainers</div>
//               <div className="stat-description">Professional trainers</div>
//             </div>

//             <div className="stat-item fade-in-up stagger-5">
//               <div className="stat-number">{counters.sessions}</div>
//               <div className="stat-label">courses</div>
//               <div className="stat-description">Specialized training sessions</div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Image with Scroll Animation */}
//         <div className="image-sectionn fade-in-right">
//           <div className="chef-image-container">
//             <img 
//               src="/images/journeyandcore.jpg" 
//               alt="Professional chefs cooking in kitchen" 
//               className="chef-image"
//             />
//             <div className="image-overlay"></div>
//           </div>
//         </div>
        
//       </div>
//     </section>
//   );
// };

// export default JourneyValues;

import React, { useState, useEffect, useRef } from 'react';
import './Journeyvalues.css';

const LazyImage = ({ src, alt, className, onLoad, onError }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleImageLoad = () => {
    // Add a slight delay to make the transition more noticeable
    setTimeout(() => {
      setImageLoaded(true);
      if (onLoad) onLoad();
    }, 300);
  };

  const handleImageError = () => {
    setImageError(true);
    if (onError) onError();
  };

  return (
    <div ref={imgRef} className="lazy-image-wrapper">
      {/* Loading skeleton */}
      {!imageLoaded && !imageError && (
        <div className="image-skeleton">
          <div className="skeleton-animation"></div>
        </div>
      )}
      
      {/* Error fallback */}
      {imageError && (
        <div className="image-error">
          <div className="error-icon">⚠️</div>
          <span className="error-text">Failed to load image</span>
        </div>
      )}
      
      {/* Actual image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`${className} ${imageLoaded ? 'image-loaded' : 'image-loading'}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
    </div>
  );
};

const JourneyValues = () => {
  const [counters, setCounters] = useState({
    meals: 0,
    courses: 0,
    trainers: 0,
    sessions: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to trigger animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
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

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageLoaded(true); // Still mark as loaded to show content
  };

  return (
    <section className="journey-values-section" ref={sectionRef}>
      <div className="journey-container">
        
        {/* Left Side - Content with Scroll Animations */}
        <div className="content-sectionn">
          <h2 className="section-title fade-in-up">
            Our Journey and Core Values
          </h2>
          <p className="section-description fade-in-up stagger-1">
            Since 2016, Amddas has been committed to delivering high-quality 
            catering and comprehensive culinary training. Our mission is to 
            ensure customer satisfaction through innovation, excellence, and 
            professional development, making us a trusted name in the industry.
          </p>

          {/* Stats Grid with Staggered Animations */}
          <div className="stats-grid">
            <div className="stat-item fade-in-up stagger-2">
              <div className={`stat-number ${!isVisible ? 'loading' : ''}`}>
                {counters.meals.toLocaleString()}
              </div>
              <div className="stat-label">meals</div>
              <div className="stat-description">Meals served annually</div>
            </div>

            <div className="stat-item fade-in-up stagger-3">
              <div className={`stat-number ${!isVisible ? 'loading' : ''}`}>
                {counters.courses}
              </div>
              <div className="stat-label">courses</div>
              <div className="stat-description">Training programs conducted</div>
            </div>

            <div className="stat-item fade-in-up stagger-4">
              <div className={`stat-number ${!isVisible ? 'loading' : ''}`}>
                {counters.trainers}
              </div>
              <div className="stat-label">trainers</div>
              <div className="stat-description">Professional trainers</div>
            </div>

            <div className="stat-item fade-in-up stagger-5">
              <div className={`stat-number ${!isVisible ? 'loading' : ''}`}>
                {counters.sessions}
              </div>
              <div className="stat-label">courses</div>
              <div className="stat-description">Specialized training sessions</div>
            </div>
          </div>
        </div>

        {/* Right Side - Image with Lazy Loading and Scroll Animation */}
        <div className={`image-sectionn fade-in-right ${imageLoaded ? 'loaded' : 'loading'}`}>
          <div className="chef-image-container">
            <LazyImage
              src="/images/journeyandcore.jpg"
              alt="Professional chefs cooking in kitchen"
              className="chef-image"
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
            <div className="image-overlay"></div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default JourneyValues;