// import React, { useState, useEffect, useRef, memo, lazy, Suspense } from 'react';
// import './about.css';

// // Lazy load components for better performance
// const About_all = lazy(() => import('./About_all'));
// const OurCommitment = lazy(() => import('./OurCommitment'));
// const About_service = lazy(() => import('./About_service'));
// const Standards = lazy(() => import('./Standards'));
// const Milestones = lazy(() => import('./Milestones'));

// // Loading skeleton component
// const LoadingSkeleton = memo(() => (
//   <div className="loading-skeleton">
//     <div className="skeleton-banner"></div>
//     <div className="skeleton-content">
//       <div className="skeleton-line long"></div>
//       <div className="skeleton-line medium"></div>
//       <div className="skeleton-line short"></div>
//     </div>
//   </div>
// ));

// LoadingSkeleton.displayName = 'LoadingSkeleton';

// // Custom hook for intersection observer
// const useIntersectionObserver = (options = {}) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const elementRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         setIsVisible(true);
//         // Unobserve after first intersection for performance
//         observer.unobserve(entry.target);
//       }
//     }, {
//       threshold: 0.1,
//       rootMargin: '50px 0px -50px 0px',
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
//   }, [options]);

//   return [elementRef, isVisible];
// };

// // Banner component with lazy loading and animations
// const BannerSection = memo(() => {
//   const [bannerRef, isBannerVisible] = useIntersectionObserver();
//   const [imageLoaded, setImageLoaded] = useState(false);

//   useEffect(() => {
//     // Preload banner image
//     const img = new Image();
//     img.onload = () => setImageLoaded(true);
//     img.src = '/images/about.jpeg';
//   }, []);

//   return (
//     <div 
//       ref={bannerRef}
//       className={`banner-section-about ${isBannerVisible ? 'animate-fade-in' : ''} ${imageLoaded ? 'image-loaded' : 'image-loading'}`}
//     >
//       <h1 className={`banner-title-about ${isBannerVisible ? 'animate-slide-up' : ''}`}>
//         About AMDDAS Foods
//       </h1>
//       {!imageLoaded && <div className="banner-loading-overlay"></div>}
//     </div>
//   );
// });

// BannerSection.displayName = 'BannerSection';

// // Main About component
// const About = memo(() => {
//   const [aboutSectionRef, isAboutSectionVisible] = useIntersectionObserver();
//   const [sectionsLoaded, setSectionsLoaded] = useState({
//     about_all: false,
//     our_commitment: false,
//     about_service: false,
//     standards: false,
//     milestones: false
//   });

//   // Track when sections are loaded for staggered animations
//   const handleSectionLoad = (sectionName) => {
//     setSectionsLoaded(prev => ({
//       ...prev,
//       [sectionName]: true
//     }));
//   };

//   return (
//     <div className="about-page-container">
//       <BannerSection />
      
//       <div 
//         ref={aboutSectionRef}
//         className={`about-section ${isAboutSectionVisible ? 'animate-fade-in-up' : ''}`}
//       >
//         <Suspense fallback={<LoadingSkeleton />}>
//           <div className={`section-wrapper ${sectionsLoaded.about_all ? 'animate-stagger-1' : ''}`}>
//             <About_all onLoad={() => handleSectionLoad('about_all')} />
//           </div>
//         </Suspense>

//         <Suspense fallback={<LoadingSkeleton />}>
//           <div className={`section-wrapper ${sectionsLoaded.our_commitment ? 'animate-stagger-2' : ''}`}>
//             <OurCommitment onLoad={() => handleSectionLoad('our_commitment')} />
//           </div>
//         </Suspense>

//         <Suspense fallback={<LoadingSkeleton />}>
//           <div className={`section-wrapper ${sectionsLoaded.about_service ? 'animate-stagger-3' : ''}`}>
//             <About_service onLoad={() => handleSectionLoad('about_service')} />
//           </div>
//         </Suspense>

//         <Suspense fallback={<LoadingSkeleton />}>
//           <div className={`section-wrapper ${sectionsLoaded.standards ? 'animate-stagger-4' : ''}`}>
//             <Standards onLoad={() => handleSectionLoad('standards')} />
//           </div>
//         </Suspense>

//         <Suspense fallback={<LoadingSkeleton />}>
//           <div className={`section-wrapper ${sectionsLoaded.milestones ? 'animate-stagger-5' : ''}`}>
//             <Milestones onLoad={() => handleSectionLoad('milestones')} />
//           </div>
//         </Suspense>
//       </div>
//     </div>
//   );
// });

// About.displayName = 'About';

// export default About;


import React, { useState, useEffect, memo, lazy, Suspense } from 'react';
import './about.css';

// Lazy load components for better performance
const About_all = lazy(() => import('./About_all'));
const OurCommitment = lazy(() => import('./OurCommitment'));
const About_service = lazy(() => import('./About_service'));
// const Standards = lazy(() => import('./Standards'));
const Milestones = lazy(() => import('./Milestones'));

// Loading skeleton component
const LoadingSkeleton = memo(() => (
  <div className="loading-skeleton">
    <div className="skeleton-banner"></div>
    <div className="skeleton-content">
      <div className="skeleton-line long"></div>
      <div className="skeleton-line medium"></div>
      <div className="skeleton-line short"></div>
    </div>
  </div>
));

LoadingSkeleton.displayName = 'LoadingSkeleton';

// Banner component - only title animates via CSS
const BannerSection = memo(() => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload banner image
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = '/images/about.jpeg';
  }, []);

  return (
    <div className={`banner-section-about ${imageLoaded ? 'image-loaded' : 'image-loading'}`}>
      <h1 className="banner-title-about">
        About AMDDAS Foods
      </h1>
      {!imageLoaded && <div className="banner-loading-overlay"></div>}
    </div>
  );
});

BannerSection.displayName = 'BannerSection';

// Main About component - all sections load statically
const About = memo(() => {
  return (
    <div className="about-page-container">
      <BannerSection />
      
      <div className="about-section">
        <Suspense fallback={<LoadingSkeleton />}>
          <div className="section-wrapper">
            <About_all />
          </div>
        </Suspense>

        <Suspense fallback={<LoadingSkeleton />}>
          <div className="section-wrapper">
            <OurCommitment />
          </div>
        </Suspense>

        <Suspense fallback={<LoadingSkeleton />}>
          <div className="section-wrapper">
            <About_service />
          </div>
        </Suspense>

        {/* <Suspense fallback={<LoadingSkeleton />}>
          <div className="section-wrapper">
            <Standards />
          </div>
        </Suspense> */}

        <Suspense fallback={<LoadingSkeleton />}>
          <div className="section-wrapper">
            <Milestones />
          </div>
        </Suspense>
      </div>
    </div>
  );
});

About.displayName = 'About';

export default About;