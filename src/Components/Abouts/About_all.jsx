// import React from 'react';
// import './About_all.css'

// const Leadership = () => {
//   return (
//     <div className="about-page-wrapper">
//       <div className="leadership-container">
//         <div className="leadership-content">
//           <div className="text-section">
//             <h1 className="main-title">All About Us</h1>
            
//             <p className="description">
//              Established in 2016, AMDDAS Foods has grown into a trusted name in the corporate and institutional catering space, delivering quality meals with consistency, hygiene, and heart. With a robust production capacity of 4,000 plates per day, we are equipped to serve large-scale requirements across corporate offices, events, and food courts. Our culinary repertoire includes a wide variety of cuisines — from Indian vegetarian and non-vegetarian, South Indian, Maharashtrian, Bengali, and Odiya specialties to popular Chinese, Continental, and Italian dishes. Each menu is thoughtfully curated to suit regional tastes and modern preferences.
//             </p>
//           </div>
          
//           <div className="image-section">
//             <img 
//               src="/images/aboutus.png" 
//               alt="Leadership team meeting in modern office" 
//               className="leadership-image"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Leadership;


import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import './About_all.css';

// Custom hook for intersection observer with enhanced options
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setIsVisible(true);
        setHasAnimated(true);
        // Keep observing for re-entry animations if needed
        if (options.once !== false) {
          observer.unobserve(entry.target);
        }
      }
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
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
  }, [hasAnimated, options]);

  return [elementRef, isVisible, hasAnimated];
};

// Custom hook for image lazy loading with progressive enhancement
const useImageLoader = (src, options = {}) => {
  const [imageState, setImageState] = useState({
    loaded: false,
    error: false,
    src: null
  });
  const imgRef = useRef(null);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    
    // Add loading states
    const handleLoad = () => {
      setImageState({
        loaded: true,
        error: false,
        src: src
      });
    };

    const handleError = () => {
      setImageState({
        loaded: false,
        error: true,
        src: options.fallback || null
      });
    };

    img.onload = handleLoad;
    img.onerror = handleError;
    
    // Start loading
    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, options.fallback]);

  return [imgRef, imageState];
};

// Enhanced Image Component with lazy loading and progressive enhancement
const LazyImage = memo(({ 
  src, 
  alt, 
  className = '', 
  fallback = '/images/placeholder.jpg',
  onLoad,
  onError,
  ...props 
}) => {
  const [imgRef, imageState] = useImageLoader(src, { fallback });
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

  // Intersection observer for lazy loading
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

  // Handle load/error callbacks
  useEffect(() => {
    if (imageState.loaded && onLoad) {
      onLoad();
    }
    if (imageState.error && onError) {
      onError();
    }
  }, [imageState.loaded, imageState.error, onLoad, onError]);

  return (
    <div 
      ref={containerRef}
      className={`lazy-image-container ${className} ${imageState.loaded ? 'loaded' : ''} ${imageState.error ? 'error' : ''}`}
      {...props}
    >
      {/* Placeholder/Loading state */}
      {!imageState.loaded && !imageState.error && (
        <div className="image-placeholder">
          <div className="placeholder-shimmer"></div>
        </div>
      )}
      
      {/* Actual image */}
      {isInView && (
        <img
          ref={imgRef}
          src={imageState.src || src}
          alt={alt}
          className={`lazy-image ${imageState.loaded ? 'fade-in' : ''}`}
          loading="lazy"
          decoding="async"
        />
      )}
      
      {/* Error state */}
      {imageState.error && (
        <div className="image-error">
          <span>Image failed to load</span>
        </div>
      )}
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

// Main About_all Component
const About_all = memo(({ onLoad }) => {
  const [containerRef, isContainerVisible] = useIntersectionObserver();
  const [textRef, isTextVisible] = useIntersectionObserver({ 
    threshold: 0.2,
    rootMargin: '0px 0px -20px 0px'
  });
  const [imageRef, isImageVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  });

  // Split text into paragraphs for staggered animation
  const textContent = `Established in 2016, AMDDAS Foods has grown into a trusted name in the corporate and institutional catering space, delivering quality meals with consistency, hygiene, and heart. With a robust production capacity of 4,000 plates per day, we are equipped to serve large-scale requirements across corporate offices, events, and food courts. Our culinary repertoire includes a wide variety of cuisines – from Indian vegetarian and non-vegetarian, South Indian, Maharashtrian, Bengali, and Odiya specialties to popular Chinese, Continental, and Italian dishes. Each menu is thoughtfully curated to suit regional tastes and modern preferences.`;

  const paragraphs = textContent.split('. ').map((sentence, index, array) => {
    return index === array.length - 1 ? sentence : sentence + '.';
  });

  // Handle component load callback
  const handleImageLoad = useCallback(() => {
    if (onLoad) {
      onLoad();
    }
  }, [onLoad]);

  // Handle image error
  const handleImageError = useCallback(() => {
    console.warn('About_all: Image failed to load');
  }, []);

  return (
    <div className="about-page-wrapper">
      <div 
        ref={containerRef}
        className={`leadership-container ${isContainerVisible ? 'animate-container-in' : ''}`}
      >
        <div className="leadership-content">
          {/* Text Section */}
          <div 
            ref={textRef}
            className={`text-section ${isTextVisible ? 'animate-text-in' : ''}`}
          >
            <h1 className={`main-title ${isTextVisible ? 'animate-title-in' : ''}`}>
              All About Us
            </h1>
            
            <div className="description-container">
              {paragraphs.map((paragraph, index) => (
                <p 
                  key={index}
                  className={`description ${isTextVisible ? `animate-paragraph-${index + 1}` : ''}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          {/* Image Section */}
          <div 
            ref={imageRef}
            className={`image-section ${isImageVisible ? 'animate-image-in' : ''}`}
          >
            <LazyImage
              src="/images/aboutus.png"
              alt="AMDDAS Foods - Corporate catering and food service excellence"
              className="leadership-image"
              fallback="/images/aboutus-fallback.jpg"
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

About_all.displayName = 'About_all';

export default About_all;