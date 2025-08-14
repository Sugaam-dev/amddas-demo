
// // import React from 'react';
// // import './Standards.css'; // replace with actual path
// // import { FaSchool, FaTools } from 'react-icons/fa'; // Optional icons

// // const Standards = () => {
// //   return (
// //     <section className="standards-section">
// //        <div className="section-title">
// //             <h2>Our <span>Standards</span></h2>
// //             <p>Excellence in every aspect of our food service operations</p>
// //           </div>
// //       <div className="standards-container">
// //         <div className="standard-card">
// //           <img src='/images/standard1.jpg' alt="Campus Hygiene" className="standard-img" />
// //           <div className="standard-info">
// //             <h3>Risk Management Standards</h3>
// //             <div className='standart-info-text'>
// //               <p>Public Liability Policy is issued per site where our food is being supplied/consumed. Strictly GST compliant with updated ledger and bank records. Regular on-time tax return filing done.</p>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="standard-card">
// //           <img src='/images/standard2.jpg' alt="Building Utility Services" className="standard-img" />
// //           <div className="standard-info">
// //             <h3> Employee Standards</h3>
// //            <div className='standart-info-text'>
// //               <p>All employees undergo quarterly medical fitness test clearance while in service at AMDDAS Foods. All staff have segregated dress codes based on their job roles. Company-provided staff quarters adjacent to the manufacturing unit to ensure hassle-free operation.</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="standards-container">
// //         <div className="standard-card">
// //           <img src='/images/standard3.jpeg' alt="Campus Hygiene" className="standard-img" />
// //           <div className="standard-info">
// //             <h3>Manufacturing Unit Standards</h3>
// //             <div className='standart-info-text'>
// //               <p>HACCP (Hazard Analysis and Critical Control Points) standards met. Segregated veg and non-veg cooking & storage sections. Gas bank located outside the kitchen. Fire extinguishers installed at all strategic locations.</p>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="standard-card">
// //           <img src='/images/standard4.jpg' alt="Building Utility Services" className="standard-img" />
// //           <div className="standard-info">
// //             <h3> Certified Kitchen</h3>
// //            <div className='standart-info-text'>
// //               <p>Our kitchen is certified by food safety authorities and follows international hygiene protocols. Regular third-party audits ensure compliance with health department regulations. Temperature-controlled storage facilities maintain food quality and freshness at all times.</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="standards-container">
// //         <div className="standard-card">
// //           <img src='/images/standard5.jpg' alt="Campus Hygiene" className="standard-img" />
// //           <div className="standard-info">
// //             <h3>Quality Standards</h3>
// //             <div className='standart-info-text'>
// //               <p>ISO 22000 food safety management system implementation. Stringent quality control measures at every stage of food preparation. Fresh ingredients sourced daily from verified suppliers. Regular taste testing and nutritional analysis of all menu items.</p>
// //             </div>
// //           </div>
// //         </div>
// //         {/* <div className="standard-card">
// //           <img src='/images/about-ser.jpg' alt="Building Utility Services" className="standard-img" />
// //           <div className="standard-info">
// //             <h3><FaTools className="icon" /> Certified Kitchen</h3>
// //            <div className='standart-info-text'>
// //               <p>Our kitchen is certified by food safety authorities and follows international hygiene protocols. Regular third-party audits ensure compliance with health department regulations. Temperature-controlled storage facilities maintain food quality and freshness at all times.</p>
// //             </div>
// //           </div>
// //         </div> */}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Standards;



// import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
// import './Standards.css';

// // Custom hook for intersection observer with enhanced options
// const useIntersectionObserver = (options = {}) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [hasAnimated, setHasAnimated] = useState(false);
//   const elementRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting && !hasAnimated) {
//         setIsVisible(true);
//         setHasAnimated(true);
//         if (options.once !== false) {
//           observer.unobserve(entry.target);
//         }
//       }
//     }, {
//       threshold: options.threshold || 0.1,
//       rootMargin: options.rootMargin || '0px 0px -30px 0px',
//       ...options
//     });

//     const currentElement = elementRef.current;
//     if (currentElement) {
//       observer.observe(currentElement);
//     }

//     return () => {
//       if (currentElement) {
//         observer.unobserve(currentElement);
//       }
//     };
//   }, [hasAnimated, options]);

//   return [elementRef, isVisible, hasAnimated];
// };

// // Custom hook for image lazy loading with performance optimizations
// const useImageLoader = (src, options = {}) => {
//   const [imageState, setImageState] = useState({
//     loaded: false,
//     error: false,
//     src: null,
//     webpSupported: false
//   });

//   useEffect(() => {
//     // Check WebP support once
//     const checkWebPSupport = () => {
//       const webP = new Image();
//       webP.onload = webP.onerror = () => {
//         setImageState(prev => ({
//           ...prev,
//           webpSupported: webP.height === 2
//         }));
//       };
//       webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
//     };

//     checkWebPSupport();
//   }, []);

//   useEffect(() => {
//     if (!src) return;

//     const img = new Image();
    
//     const handleLoad = () => {
//       setImageState(prev => ({
//         ...prev,
//         loaded: true,
//         error: false,
//         src: src
//       }));
//     };

//     const handleError = () => {
//       setImageState(prev => ({
//         ...prev,
//         loaded: false,
//         error: true,
//         src: options.fallback || null
//       }));
//     };

//     img.onload = handleLoad;
//     img.onerror = handleError;
    
//     // Use WebP if supported and available
//     const imageSrc = imageState.webpSupported && options.webpSrc ? options.webpSrc : src;
//     img.src = imageSrc;

//     return () => {
//       img.onload = null;
//       img.onerror = null;
//     };
//   }, [src, options.fallback, options.webpSrc, imageState.webpSupported]);

//   return imageState;
// };

// // Enhanced Lazy Image Component
// const LazyImage = memo(({ 
//   src, 
//   webpSrc,
//   alt, 
//   className = '', 
//   fallback = '/images/placeholder-standard.jpg',
//   onLoad,
//   onError,
//   ...props 
// }) => {
//   const [isInView, setIsInView] = useState(false);
//   const containerRef = useRef(null);
//   const imageState = useImageLoader(src, { fallback, webpSrc });

//   // Intersection observer for lazy loading
//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         setIsInView(true);
//         observer.unobserve(entry.target);
//       }
//     }, {
//       threshold: 0.1,
//       rootMargin: '100px 0px'
//     });

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => {
//       if (containerRef.current) {
//         observer.unobserve(containerRef.current);
//       }
//     };
//   }, []);

//   // Handle callbacks
//   useEffect(() => {
//     if (imageState.loaded && onLoad) {
//       onLoad();
//     }
//     if (imageState.error && onError) {
//       onError();
//     }
//   }, [imageState.loaded, imageState.error, onLoad, onError]);

//   return (
//     <div 
//       ref={containerRef}
//       className={`standard-lazy-image-container ${className} ${imageState.loaded ? 'loaded' : ''} ${imageState.error ? 'error' : ''}`}
//       {...props}
//     >
//       {/* Loading placeholder */}
//       {!imageState.loaded && !imageState.error && (
//         <div className="standard-image-placeholder">
//           <div className="standard-loading-content">
//             <div className="standard-loading-spinner"></div>
//             <span className="standard-loading-text">Loading...</span>
//           </div>
//         </div>
//       )}
      
//       {/* Main image */}
//       {isInView && (
//         <img
//           src={imageState.src || src}
//           alt={alt}
//           className={`standard-lazy-image ${imageState.loaded ? 'fade-in' : ''}`}
//           loading="lazy"
//           decoding="async"
//         />
//       )}
      
//       {/* Error fallback */}
//       {imageState.error && (
//         <div className="standard-image-error">
//           <div className="standard-error-icon">🏢</div>
//           <span className="standard-error-text">Image unavailable</span>
//         </div>
//       )}
//     </div>
//   );
// });

// LazyImage.displayName = 'LazyImage';

// // Enhanced Standard Card Component
// const StandardCard = memo(({ standard, index, isVisible }) => {
//   const [cardRef, isCardVisible] = useIntersectionObserver({
//     threshold: 0.15,
//     rootMargin: '0px 0px -20px 0px'
//   });

//   const handleImageLoad = useCallback(() => {
//     // Image loaded callback if needed
//   }, []);

//   const handleImageError = useCallback(() => {
//     console.warn(`Standards: Image failed to load for ${standard.title}`);
//   }, [standard.title]);

//   return (
//     <div 
//       ref={cardRef}
//       className={`standard-card ${isCardVisible ? `animate-card-${index + 1}` : ''}`}
//     >
//       <div className="standard-image-wrapper">
//         <LazyImage
//           src={standard.image}
//           webpSrc={standard.webpImage}
//           alt={`${standard.title} - AMDDAS Foods quality standards`}
//           className="standard-img"
//           fallback="/images/standard-fallback.jpg"
//           onLoad={handleImageLoad}
//           onError={handleImageError}
//         />
//         <div className="standard-overlay">
//           <span className="standard-number">{String(index + 1).padStart(2, '0')}</span>
//         </div>
//       </div>
      
//       <div className="standard-info">
//         <h3 className={`standard-title ${isCardVisible ? 'animate-title' : ''}`}>
//           {standard.title}
//         </h3>
//         <div className={`standard-info-text ${isCardVisible ? 'animate-text' : ''}`}>
//           <p>{standard.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// });

// StandardCard.displayName = 'StandardCard';

// // Enhanced Section Title Component
// const SectionTitle = memo(({ isVisible }) => {
//   return (
//     <div className={`section-title ${isVisible ? 'animate-title-section' : ''}`}>
//       <h2 className={`section-main-title ${isVisible ? 'animate-main-title' : ''}`}>
//         Our <span className="title-accent">Standards</span>
//       </h2>
//       <p className={`section-subtitle ${isVisible ? 'animate-subtitle' : ''}`}>
//         Excellence in every aspect of our food service operations
//       </p>
//     </div>
//   );
// });

// SectionTitle.displayName = 'SectionTitle';

// // Main Standards Component
// const Standards = memo(({ onLoad }) => {
//   const [sectionRef, isSectionVisible] = useIntersectionObserver();
//   const [titleRef, isTitleVisible] = useIntersectionObserver({
//     threshold: 0.2,
//     rootMargin: '0px 0px -40px 0px'
//   });

//   // Standards data with enhanced structure
//   const standardsData = [
//     {
//       id: 'risk-management',
//       title: 'Risk Management Standards',
//       description: 'Public Liability Policy is issued per site where our food is being supplied/consumed. Strictly GST compliant with updated ledger and bank records. Regular on-time tax return filing done.',
//       image: '/images/standard1.jpg',
//       // webpImage: '/images/standard1.webp'
//     },
//     {
//       id: 'employee-standards',
//       title: 'Employee Standards',
//       description: 'All employees undergo quarterly medical fitness test clearance while in service at AMDDAS Foods. All staff have segregated dress codes based on their job roles. Company-provided staff quarters .',
//       image: '/images/standard2.jpg',
//       // webpImage: '/images/standard2.webp'
//     },
//     {
//       id: 'manufacturing-standards',
//       title: 'Manufacturing Unit Standards',
//       description: 'HACCP (Hazard Analysis and Critical Control Points) standards met. Segregated veg and non-veg cooking & storage sections. Gas bank located outside the kitchen. Fire extinguishers installed .',
//       image: '/images/standard3.jpeg',
//       // webpImage: '/images/standard3.webp'
//     },
//     {
//       id: 'certified-kitchen',
//       title: 'Certified Kitchen',
//       description: 'Our kitchen is certified by food safety authorities and follows international hygiene protocols. Regular third-party audits ensure compliance with health department regulations. Temperature-controlled storage facilities maintain food quality and freshness at all times.',
//       image: '/images/standard4.jpg',
//       // webpImage: '/images/standard4.webp'
//     },
//     {
//       id: 'quality-standards',
//       title: 'Quality Standards',
//       description: 'ISO 22000 food safety management system implementation. Stringent quality control measures at every stage of food preparation. Fresh ingredients sourced daily from verified suppliers. Regular taste testing and nutritional analysis of all menu items.',
//       image: '/images/standard5.jpg',
//       // webpImage: '/images/standard5.webp'
//     }
//   ];

//   // Handle component load callback
//   const handleComponentLoad = useCallback(() => {
//     if (onLoad) {
//       onLoad();
//     }
//   }, [onLoad]);

//   // Call onLoad when section becomes visible
//   useEffect(() => {
//     if (isSectionVisible) {
//       handleComponentLoad();
//     }
//   }, [isSectionVisible, handleComponentLoad]);

//   return (
//     <section 
//       ref={sectionRef}
//       className={`standards-section ${isSectionVisible ? 'animate-section-in' : ''}`}
//     >
//       <div ref={titleRef}>
//         <SectionTitle isVisible={isTitleVisible} />
//       </div>
      
//       <div className="standards-main-container">
//         {standardsData.map((standard, index) => (
//           <StandardCard
//             key={standard.id}
//             standard={standard}
//             index={index}
//             isVisible={isSectionVisible}
//           />
//         ))}
//       </div>
//     </section>
//   );
// });

// Standards.displayName = 'Standards';

// export default Standards;






import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import './Standards.css';

// Simplified intersection observer hook
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.05,
      rootMargin: '150px 0px -30px 0px',
      ...options
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};

// Basic image loader
const useImageLoader = (src, fallback) => {
  const [imageState, setImageState] = useState({
    loaded: false,
    error: false
  });

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    
    const handleLoad = () => {
      setImageState({ loaded: true, error: false });
    };

    const handleError = () => {
      setImageState({ loaded: false, error: true });
    };

    img.onload = handleLoad;
    img.onerror = handleError;
    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return imageState;
};

// Basic LazyImage Component
const LazyImage = memo(({ 
  src, 
  alt, 
  className = '', 
  fallback = '/images/placeholder-standard.jpg',
  onLoad,
  onError,
  ...props 
}) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);
  const imageState = useImageLoader(src, fallback);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1,
      rootMargin: '100px 0px'
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (imageState.loaded && onLoad) onLoad();
    if (imageState.error && onError) onError();
  }, [imageState.loaded, imageState.error, onLoad, onError]);

  return (
    <div 
      ref={containerRef}
      className={`standard-lazy-image-container ${className}`}
      {...props}
    >
      {!imageState.loaded && !imageState.error && (
        <div className="standard-image-placeholder">
          <div className="standard-loading-content">
            <div className="standard-loading-spinner"></div>
            <span className="standard-loading-text">Loading...</span>
          </div>
        </div>
      )}
      
      {isInView && (
        <img
          src={imageState.error ? fallback : src}
          alt={alt}
          className={`standard-lazy-image ${imageState.loaded ? 'fade-in' : ''}`}
          loading="lazy"
          decoding="async"
        />
      )}
      
      {imageState.error && (
        <div className="standard-image-error">
          <div className="standard-error-icon">🏢</div>
          <span className="standard-error-text">Image unavailable</span>
        </div>
      )}
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

// Standard Card Component
const StandardCard = memo(({ standard, index, isVisible }) => {
  const handleImageLoad = useCallback(() => {
    // Image loaded callback if needed
  }, []);

  const handleImageError = useCallback(() => {
    console.warn(`Standards: Image failed to load for ${standard.title}`);
  }, [standard.title]);

  return (
    <div className={`standard-card ${isVisible ? `animate-card-${index + 1}` : ''}`}>
      <div className="standard-image-wrapper">
        <LazyImage
          src={standard.image}
          alt={`${standard.title} - AMDDAS Foods quality standards`}
          className="standard-img"
          fallback="/images/standard-fallback.jpg"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        <div className="standard-overlay">
          <span className="standard-number">{String(index + 1).padStart(2, '0')}</span>
        </div>
      </div>
      
      <div className="standard-info">
        <h3 className={`standard-title ${isVisible ? 'animate-title' : ''}`}>
          {standard.title}
        </h3>
        <div className={`standard-info-text ${isVisible ? 'animate-text' : ''}`}>
          <p>{standard.description}</p>
        </div>
      </div>
    </div>
  );
});

StandardCard.displayName = 'StandardCard';

// Section Title Component
const SectionTitle = memo(({ isVisible }) => {
  return (
    <div className={`section-title ${isVisible ? 'animate-title-section' : ''}`}>
      <h2 className={`section-main-title ${isVisible ? 'animate-main-title' : ''}`}>
        Our <span className="title-accent">Standards</span>
      </h2>
      <p className={`section-subtitle ${isVisible ? 'animate-subtitle' : ''}`}>
        Excellence in every aspect of our food service operations
      </p>
    </div>
  );
});

SectionTitle.displayName = 'SectionTitle';

// Main Standards Component
const Standards = memo(({ onLoad }) => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  const standardsData = [
    {
      id: 'risk-management',
      title: 'Risk Management Standards',
      description: 'Public Liability Policy is issued per site where our food is being supplied/consumed. Strictly GST compliant with updated ledger and bank records. Regular on-time tax return filing done.',
      image: '/images/standard1.jpg'
    },
    {
      id: 'employee-standards',
      title: 'Employee Standards',
      description: 'All employees undergo quarterly medical fitness test clearance while in service at AMDDAS Foods. All staff have segregated dress codes based on their job roles. Company-provided staff quarters .',
      image: '/images/standard2.jpg'
    },
    {
      id: 'manufacturing-standards',
      title: 'Manufacturing Unit Standards',
      description: 'HACCP (Hazard Analysis and Critical Control Points) standards met. Segregated veg and non-veg cooking & storage sections. Gas bank located outside the kitchen. Fire extinguishers installed .',
      image: '/images/standard3.jpeg'
    },
    {
      id: 'certified-kitchen',
      title: 'Certified Kitchen',
      description: 'Our kitchen is certified by food safety authorities and follows international hygiene protocols. Regular third-party audits ensure compliance with health department regulations. Temperature-controlled storage facilities maintain food quality and freshness at all times.',
      image: '/images/standard4.jpg'
    },
    {
      id: 'quality-standards',
      title: 'Quality Standards',
      description: 'ISO 22000 food safety management system implementation. Stringent quality control measures at every stage of food preparation. Fresh ingredients sourced daily from verified suppliers. Regular taste testing and nutritional analysis of all menu items.',
      image: '/images/standard5.jpg'
    }
  ];

  const handleComponentLoad = useCallback(() => {
    if (onLoad) onLoad();
  }, [onLoad]);

  useEffect(() => {
    if (isVisible) {
      handleComponentLoad();
    }
  }, [isVisible, handleComponentLoad]);

  return (
    <section 
      ref={sectionRef}
      className={`standards-section ${isVisible ? 'animate-section-in' : ''}`}
    >
      <SectionTitle isVisible={isVisible} />
      
      <div className="standards-main-container">
        {standardsData.map((standard, index) => (
          <StandardCard
            key={standard.id}
            standard={standard}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>
    </section>
  );
});

Standards.displayName = 'Standards';

export default Standards;
