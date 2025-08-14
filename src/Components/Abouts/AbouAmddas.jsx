// // import React from "react";
// // import './aboutAmddas.css';
// // import { useNavigate } from "react-router-dom";

// // const AboutAmddas = () => {
// //     const navigate=useNavigate();
// //     const ourpage=()=>{
// //         navigate('/why-us')
// //     }
// //   return (
// //     <div className="Our-about-container">
// //       <h2 className="Our-about-title">Why Choose AMDDAS Foods</h2>
// //       <h3 className="Our-about-description">Risk Management Standards, Quality standard, Manufacturing Unit Standards, Employee Standard, Certified Kitchen </h3>
// //       <button onClick={ourpage} className="Our-about-button">READ MORE</button>
// //     </div>
// //   );
// // };

// // export default AboutAmddas;








// /* Global Styles */
// * {
//   font-family: 'Helvetica', Arial, sans-serif;
//   box-sizing: border-box;
// }

// /* Main Section */
// .about-service-section {
//   padding: var(--service-section-padding) var(--service-text-padding);
//   background: transparent;
//   position: relative;
//   overflow: hidden;
//   transform: translateY(40px);
//   opacity: 0;
//   transition: all var(--service-transition-slow);
//   will-change: transform, opacity;
// }

// /* Container with Enhanced Layout */
// .about-service-container {
//   display: flex;
//   align-items: stretch;
//   justify-content: space-between;
//   max-width: 1400px;
//   margin: 0 auto;
//   gap: var(--service-container-gap);
//   min-height: 800px;
//   position: relative;
// }

// /* Enhanced Text Section */
// .about-service-text {
//   flex: 1 1 500px;
//   max-width: 600px;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   height: 100px;
//   position: relative;
//   transform: translateX(-40px);
//   opacity: 0;
//   transition: all var(--service-transition-slow);
//   will-change: transform, opacity;
// }

// .about-service-text::before {
//   content: '';
//   position: absolute;
//   left: -20px;
//   top: 0;
//   bottom: 0;
//   width: 4px;
//   background: linear-gradient(to bottom, transparent, var(--service-accent-color), transparent);
//   opacity: 0;
//   transition: opacity var(--service-transition-medium);
//   transform: scaleY(0);
// }

// /* Service Heading with Enhanced Animation */
// .service-heading {
//   font-size: 40px;
//   font-weight: 700;
//   color: var(--service-primary-color);
//   margin-bottom: 30px;
//   margin-top: 0;
//   line-height: 1.2;
//   position: relative;
//   transform: translateY(30px);
//   opacity: 0;
//   transition: all var(--service-transition-medium);
//   will-change: transform, opacity;
// }

// .service-heading::after {
//   content: '';
//   position: absolute;
//   bottom: -8px;
//   left: 0;
//   width: 0;
//   height: 3px;
//   background: linear-gradient(90deg, var(--service-accent-color), #f9ca24);
//   transition: width var(--service-transition-slow);
// }

// /* Enhanced Service List */
// .service-list {
//   list-style: none;
//   padding: 0;
//   margin: 0 0 30px 0;
//   position: relative;
// }

// .service-item {
//   position: relative;
//   padding: 12px 0;
//   font-size: var(--service-text-size);
//   color: var(--service-text-primary);
//   line-height: 1.6;
//   margin-bottom: 8px;
//   transition: all var(--service-transition-medium);
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   transform: translateX(-20px);
//   opacity: 0;
//   will-change: transform, opacity;
// }

// .service-bullet {
//   color: var(--service-accent-color);
//   font-size: 1.5rem;
//   font-weight: bold;
//   margin-right: 15px;
//   transition: all var(--service-transition-medium);
//   display: inline-block;
//   transform: scale(1);
// }

// .service-text {
//   flex: 1;
//   transition: all var(--service-transition-medium);
//   position: relative;
// }

// .service-text::before {
//   content: '';
//   position: absolute;
//   bottom: -2px;
//   left: 0;
//   width: 0;
//   height: 2px;
//   background: var(--service-accent-color);
//   transition: width var(--service-transition-medium);
// }

// .service-item:hover {
//   color: var(--service-accent-color);
//   transform: translateX(10px);
//   padding-left: 10px;
// }

// .service-item:hover .service-bullet {
//   transform: scale(1.3) rotate(90deg);
//   color: var(--service-primary-color);
// }

// .service-item:hover .service-text::before {
//   width: 100%;
// }

// /* Service Description */
// .service-description {
//   font-size: var(--service-description-size);
//   color: var(--service-text-primary);
//   line-height: 1.7;
//   font-family: 'Helvetica', Arial, sans-serif;
//   font-weight: 400;
//   transform: translateY(20px);
//   opacity: 0;
//   transition: all var(--service-transition-medium);
//   will-change: transform, opacity;
//   position: relative;
//   padding: 20px;
//   background: linear-gradient(135deg, rgba(255, 107, 53, 0.05), rgba(249, 202, 36, 0.05));
//   border-radius: 15px;
//   border-left: 4px solid var(--service-accent-color);
// }

// /* Enhanced Image Section */
// .about-service-image {
//   flex: 1 1 400px;
//   display: flex;
//   align-items: flex-start;
//   justify-content: center;
//   height: 700px;
//   position: relative;
//   transform: translateX(40px) scale(0.9);
//   opacity: 0;
//   transition: all var(--service-transition-slow);
//   will-change: transform, opacity;
// }

// /* Lazy Image Container */
// .lazy-image-container {
//   position: relative;
//   width: 100%;
//   height: 100%;
//   border-radius: var(--service-border-radius);
//   overflow: hidden;
//   box-shadow: var(--service-shadow-medium);
//   transition: all var(--service-transition-medium);
//   background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
// }

// .lazy-image-container:hover {
//   transform: translateY(-8px) rotate(1deg);
//   box-shadow: var(--service-shadow-heavy);
// }

// /* Image Placeholder */
// .image-placeholder {
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: linear-gradient(45deg, #f0f0f0 25%, transparent 25%, transparent 75%, #f0f0f0 75%, #f0f0f0),
//               linear-gradient(45deg, #f0f0f0 25%, transparent 25%, transparent 75%, #f0f0f0 75%, #f0f0f0);
//   background-size: 20px 20px;
//   background-position: 0 0, 10px 10px;
//   animation: shimmer 2s infinite;
// }

// .placeholder-content {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 15px;
//   color: #999;
// }

// .loading-spinner {
//   width: 40px;
//   height: 40px;
//   border: 3px solid #f0f0f0;
//   border-top: 3px solid var(--service-accent-color);
//   border-radius: 50%;
//   animation: spin 1s linear infinite;
// }

// .loading-text {
//   font-size: 0.9rem;
//   font-weight: 500;
// }

// /* Lazy Image */
// .service-lazy-image {
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   object-position: center;
//   opacity: 0;
//   transform: scale(1.1);
//   transition: all var(--service-transition-slow);
//   will-change: transform, opacity;
// }

// .service-lazy-image.fade-in {
//   opacity: 1;
//   transform: scale(1);
// }

// /* Error State */
// .image-error-state {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
//   color: #999;
// }

// .error-icon {
//   font-size: 3rem;
//   margin-bottom: 10px;
//   opacity: 0.5;
// }

// .error-text {
//   font-size: 0.9rem;
// }

// /* Animation Keyframes */
// @keyframes spin {
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// }

// @keyframes shimmer {
//   0% { background-position: -20px 0, -10px -10px; }
//   100% { background-position: 20px 0, 30px 10px; }
// }

// @keyframes slideInLeft {
//   from {
//     transform: translateX(-50px);
//     opacity: 0;
//   }
//   to {
//     transform: translateX(0);
//     opacity: 1;
//   }
// }

// @keyframes slideInRight {
//   from {
//     transform: translateX(50px) scale(0.9);
//     opacity: 0;
//   }
//   to {
//     transform: translateX(0) scale(1);
//     opacity: 1;
//   }
// }

// @keyframes fadeInUp {
//   from {
//     transform: translateY(30px);
//     opacity: 0;
//   }
//   to {
//     transform: translateY(0);
//     opacity: 1;
//   }
// }

// /* Animation Classes */
// .animate-section-in {
//   transform: translateY(0);
//   opacity: 1;
//   transition-delay: 0.1s;
// }

// .animate-text-in {
//   transform: translateX(0);
//   opacity: 1;
//   transition-delay: 0.2s;
// }

// .animate-text-in::before {
//   opacity: 1;
//   transform: scaleY(1);
//   transition-delay: 0.8s;
// }

// .animate-heading-in {
//   transform: translateY(0);
//   opacity: 1;
//   transition-delay: 0.3s;
// }

// .animate-heading-in::after {
//   width: 80px;
//   transition-delay: 0.6s;
// }

// .animate-service-item-1 {
//   transform: translateX(0);
//   opacity: 1;
//   transition-delay: 0.4s;
// }

// .animate-service-item-2 {
//   transform: translateX(0);
//   opacity: 1;
//   transition-delay: 0.5s;
// }

// .animate-service-item-3 {
//   transform: translateX(0);
//   opacity: 1;
//   transition-delay: 0.6s;
// }

// .animate-service-item-4 {
//   transform: translateX(0);
//   opacity: 1;
//   transition-delay: 0.7s;
// }

// .animate-service-item-5 {
//   transform: translateX(0);
//   opacity: 1;
//   transition-delay: 0.8s;
// }

// .animate-description-in {
//   transform: translateY(0);
//   opacity: 1;
//   transition-delay: 0.9s;
// }

// .animate-image-in {
//   transform: translateX(0) scale(1);
//   opacity: 1;
//   transition-delay: 0.4s;
// }

// /* Enhanced Responsive Design */

// /* Extra Large Screens (1440px+) */
// @media (min-width: 1440px) {
//   .about-service-section {
//     padding: 6rem 4rem;
//   }
  
//   .about-service-container {
//     gap: 4rem;
//   }
  
//   .service-heading {
//     margin-bottom: 40px;
//   }
  
//   .service-item {
//     padding: 15px 0;
//     margin-bottom: 12px;
//   }
  
//   .service-description {
//     padding: 25px;
//   }
// }

// /* Large Desktop (1200px - 1439px) */
// @media (min-width: 1200px) and (max-width: 1439px) {
//   .about-service-section {
//     padding: 5rem 3rem;
//   }
  
//   .about-service-container {
//     gap: 3rem;
//   }
  
//   .service-heading {
//     margin-bottom: 35px;
//   }
// }

// /* Desktop (1024px - 1199px) */
// @media (min-width: 1024px) and (max-width: 1199px) {
//   .about-service-section {
//     padding: 4rem 2.5rem;
//   }
  
//   .about-service-container {
//     gap: 2.5rem;
//   }
  
//   .service-heading {
//     margin-bottom: 30px;
//   }
// }

// /* Tablet Portrait (768px - 1023px) */
// @media (min-width: 768px) and (max-width: 1023px) {
//   .about-service-section {
//     padding: 3rem 2rem;
//   }
  
//   .about-service-container {
//     gap: 2rem;
//   }
  
//   .service-heading {
//     margin-bottom: 25px;
//   }
// }

// /* Mobile Landscape & Large Mobile (640px - 767px) */
// @media (min-width: 640px) and (max-width: 767px) {
//   .about-service-section {
//     padding: 2.5rem 1.5rem;
//   }
  
//   .about-service-container {
//     flex-direction: column;
//     text-align: center;
//     gap: 2rem;
//     min-height: auto;
//   }

//   .about-service-text {
//     max-width: 100%;
//     text-align: center;
//     height: auto;
//     justify-content: flex-start;
//     transform: translateY(-20px);
//   }

//   .about-service-image {
//     max-width: 100%;
//     text-align: center;
//     height: auto;
//     transform: translateY(20px) scale(0.95);
//   }

//   .lazy-image-container {
//     height: 350px;
//     max-width: 500px;
//     margin: 0 auto;
//   }

//   .service-list {
//     list-style-position: inside;
//     margin-bottom: 25px;
//   }

//   .service-item {
//     justify-content: center;
//     text-align: center;
//   }

//   .service-heading {
//     text-align: center;
//     margin-bottom: 20px;
//   }
// }

// /* Medium Mobile (480px - 639px) */
// @media (min-width: 480px) and (max-width: 639px) {
//   .about-service-section {
//     padding: 2rem 1rem;
//   }

//   .about-service-container {
//     flex-direction: column;
//     gap: 1.5rem;
//   }

//   .lazy-image-container {
//     height: 300px;
//     max-width: 450px;
//   }

//   .service-item {
//     padding: 10px 0;
//     margin-bottom: 6px;
//   }

//   .service-description {
//     padding: 15px;
//   }
// }

// /* Small Mobile (320px - 479px) */
// @media (max-width: 479px) {
//   .about-service-section {
//     padding: 1.5rem 0.75rem;
//   }

//   .about-service-container {
//     flex-direction: column;
//     gap: 1rem;
//   }

//   .about-service-text {
//     flex: 1 1 auto;
//   }

//   .lazy-image-container {
//     height: 250px;
//     max-width: 100%;
//   }

//   .service-item {
//     padding: 8px 0;
//     margin-bottom: 4px;
//     flex-direction: column;
//     align-items: flex-start;
//   }

//   .service-bullet {
//     margin-right: 8px;
//     margin-bottom: 2px;
//   }

//   .service-description {
//     padding: 12px;
//     border-radius: 10px;
//   }

//   .service-heading {
//     margin-bottom: 15px;
//   }
// }

// /* Landscape Mobile Optimization */
// @media (max-width: 767px) and (orientation: landscape) and (max-height: 500px) {
//   .about-service-section {
//     padding: 1rem 0.5rem;
//   }

//   .about-service-container {
//     flex-direction: row;
//     gap: 1rem;
//     min-height: auto;
//   }

//   .about-service-text {
//     flex: 1;
//     height: auto;
//     text-align: left;
//   }

//   .about-service-image {
//     flex: 1;
//     height: auto;
//   }

//   .lazy-image-container {
//     height: 250px;
//   }

//   .service-heading {
//     text-align: left;
//     margin-bottom: 10px;
//   }

//   .service-item {
//     padding: 6px 0;
//     margin-bottom: 3px;
//   }

//   .service-description {
//     padding: 10px;
//     margin-top: 10px;
//   }
// }

// /* Performance Optimizations */
// .about-service-container,
// .about-service-text,
// .about-service-image,
// .service-lazy-image {
//   backface-visibility: hidden;
//   perspective: 1000px;
// }

// /* Accessibility Improvements */
// @media (prefers-reduced-motion: reduce) {
//   *,
//   *::before,
//   *::after {
//     animation-duration: 0.01ms !important;
//     animation-iteration-count: 1 !important;
//     transition-duration: 0.01ms !important;
//   }

//   .about-service-section,
//   .about-service-text,
//   .about-service-image,
//   .service-heading,
//   .service-item,
//   .service-description {
//     transform: none !important;
//     opacity: 1 !important;
//   }
// }

// /* High Contrast Mode */
// @media (prefers-contrast: high) {
//   .service-item {
//     border-bottom: 1px solid #333;
//   }

//   .service-heading {
//     border-bottom: 2px solid #000;
//     padding-bottom: 5px;
//   }

//   .lazy-image-container {
//     border: 2px solid #000;
//   }
// }

// /* Focus States for Accessibility */
// .service-item:focus-visible {
//   outline: 3px solid var(--service-accent-color);
//   outline-offset: 2px;
//   border-radius: 4px;
// }

// /* Print Styles */
// @media print {
//   .about-service-section {
//     background: white !important;
//     padding: 1rem !important;
//   }

//   .about-service-container {
//     flex-direction: column;
//     gap: 1rem;
//   }

//   .lazy-image-container {
//     height: auto;
//     max-height: 300px;
//     box-shadow: none;
//     border: 1px solid #000;
//   }

//   .service-heading,
//   .service-item,
//   .service-description {
//     color: black !important;
//   }

//   .service-bullet {
//     color: black !important;
//   }
// }






















// /* Enhanced About_service.css with Advanced Animations & Responsiveness */

// /* CSS Custom Properties for About Service */
// :root {
//   --service-primary-color: #2b2b2b;
//   --service-accent-color: #ff6b35;
//   --service-text-primary: #333;
//   --service-text-secondary: #666;
//   --service-background: #ffffff;
//   --service-shadow-light: 0 8px 25px rgba(0, 0, 0, 0.1);
//   --service-shadow-medium: 0 15px 35px rgba(0, 0, 0, 0.15);
//   --service-shadow-heavy: 0 25px 50px rgba(0, 0, 0, 0.25);
//   --service-border-radius: 20px;
//   --service-transition-fast: 0.2s ease-out;
//   --service-transition-medium: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//   --service-transition-slow: 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
//   /* Fluid Typography */
//   --service-heading-size: clamp(1.8rem, 4vw + 1rem, 2.5rem);
//   --service-text-size: clamp(1rem, 2vw + 0.5rem, 1.2rem);
//   --service-description-size: clamp(0.9rem, 2vw + 0.4rem, 1.1rem);
  
//   /* Responsive Spacing */
//   --service-section-padding: clamp(2rem, 6vw, 5rem);
//   --service-container-gap: clamp(1rem, 4vw, 3rem);
//   --service-text-padding: clamp(1.5rem, 4vw, 3rem);
//   --service-image-height: clamp(25vh, 50vw, 65vh);
// }

// /* Global Styles */
// * {
//   font-family: 'Helvetica', Arial, sans-serif;
//   box-sizing: border-box;
// }

// /* Main Section */
// .about-service-section {
//   padding: var(--service-section-padding) var(--service-text-padding);
//   background: transparent;
//   position: relative;
//   overflow: hidden;
//   transform: translateY(40px);
//   opacity: 0;
//   transition: all var(--service-transition-slow);
//   will-change: transform, opacity;
// }

// /* Container with Enhanced Layout */
// .about-service-container {
//   display: flex;
//   align-items: stretch;
//   justify-content: space-between;
//   max-width: 1400px;
//   margin: 0 auto;
//   gap: var(--service-container-gap);
//   min-height: var(--service-image-height);
//   position: relative;
// }

// /* Enhanced Text Section */
// .about-service-text {
//   flex: 1 1 500px;
//   max-width: 600px;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   height: var(--service-image-height);
//   position: relative;
//   transform: translateX(-40px);
//   opacity: 0;
//   transition: all var(--service-transition-slow);
//   will-change: transform, opacity;
// }

// .about-service-text::before {
//   content: '';
//   position: absolute;
//   left: -20px;
//   top: 0;
//   bottom: 0;
//   width: 4px;
//   background: linear-gradient(to bottom, transparent, var(--service-accent-color), transparent);
//   opacity: 0;
//   transition: opacity var(--service-transition-medium);
//   transform: scaleY(0);
// }

// /* Service Heading with Enhanced Animation */
// .service-heading {
//   font-size: var(--service-heading-size);
//   font-weight: 700;
//   color: var(--service-primary-color);
//   margin-bottom: 30px;
//   margin-top: 0;
//   line-height: 1.2;
//   position: relative;
//   transform: translateY(30px);
//   opacity: 0;
//   transition: all var(--service-transition-medium);
//   will-change: transform, opacity;
// }

// .service-heading::after {
//   content: '';
//   position: absolute;
//   bottom: -8px;
//   left: 0;
//   width: 0;
//   height: 3px;
//   background: linear-gradient(90deg, var(--service-accent-color), #f9ca24);
//   transition: width var(--service-transition-slow);
// }

// /* Enhanced Service List */
// .service-list {
//   list-style: none;
//   padding: 0;
//   margin: 0 0 30px 0;
//   position: relative;
// }

// .service-item {
//   position: relative;
//   padding: 12px 0;
//   font-size: var(--service-text-size);
//   color: var(--service-text-primary);
//   line-height: 1.6;
//   margin-bottom: 8px;
//   transition: all var(--service-transition-medium);
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   transform: translateX(-20px);
//   opacity: 0;
//   will-change: transform, opacity;
// }

// .service-bullet {
//   color: var(--service-accent-color);
//   font-size: 1.5rem;
//   font-weight: bold;
//   margin-right: 15px;
//   transition: all var(--service-transition-medium);
//   display: inline-block;
//   transform: scale(1);
// }

// .service-text {
//   flex: 1;
//   transition: all var(--service-transition-medium);
//   position: relative;
// }

// .service-text::before {
//   content: '';
//   position: absolute;
//   bottom: -2px;
//   left: 0;
//   width: 0;
//   height: 2px;
//   background: var(--service-accent-color);
//   transition: width var(--service-transition-medium);
// }

// .service-item:hover {
//   color: var(--service-accent-color);
//   transform: translateX(10px);
//   padding-left: 10px;
// }

// .service-item:hover .service-bullet {
//   transform: scale(1.3) rotate(90deg);
//   color: var(--service-primary-color);
// }

// .service-item:hover .service-text::before {
//   width: 100%;
// }

// /* Service Description */
// .service-description {
//   font-size: var(--service-description-size);
//   color: var(--service-text-primary);
//   line-height: 1.7;
//   font-family: 'Helvetica', Arial, sans-serif;
//   font-weight: 400;
//   transform: translateY(20px);
//   opacity: 0;
//   transition: all var(--service-transition-medium);
//   will-change: transform, opacity;
//   position: relative;
//   padding: 20px;
//   background: linear-gradient(135deg, rgba(255, 107, 53, 0.05), rgba(249, 202, 36, 0.05));
//   border-radius: 15px;
//   border-left: 4px solid var(--service-accent-color);
// }

// /* Enhanced Image Section */
// .about-service-image {
//   flex: 1 1 400px;
//   display: flex;
//   align-items: flex-start;
//   justify-content: center;
//   height: var(--service-image-height);
//   position: relative;
//   transform: translateX(40px) scale(0.9);
//   opacity: 0;
//   transition: all var(--service-transition-slow);
//   will-change: transform, opacity;
// }

// /* Lazy Image Container */
// .lazy-image-container {
//   position: relative;
//   width: 100%;
//   height: 100%;
//   border-radius: var(--service-border-radius);
//   overflow: hidden;
//   box-shadow: var(--service-shadow-medium);
//   transition: all var(--service-transition-medium);
//   background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
// }

// .lazy-image-container:hover {
//   transform: translateY(-8px) rotate(1deg);
//   box-shadow: var(--service-shadow-heavy);
// }

// /* Image Placeholder */
// .image-placeholder {
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: linear-gradient(45deg, #f0f0f0 25%, transparent 25%, transparent 75%, #f0f0f0 75%, #f0f0f0),
//               linear-gradient(45deg, #f0f0f0 25%, transparent 25%, transparent 75%, #f0f0f0 75%, #f0f0f0);
//   background-size: 20px 20px;
//   background-position: 0 0, 10px 10px;
//   animation: shimmer 2s infinite;
// }

// .placeholder-content {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 15px;
//   color: #999;
// }

// .loading-spinner {
//   width: 40px;
//   height: 40px;
//   border: 3px solid #f0f0f0;
//   border-top: 3px solid var(--service-accent-color);
//   border-radius: 50%;
//   animation: spin 1s linear infinite;
// }

// .loading-text {
//   font-size: 0.9rem;
//   font-weight: 500;
// }

// /* Lazy Image */
// .service-lazy-image {
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   object-position: center;
//   opacity: 0;
//   transform: scale(1.1);
//   transition: all var(--service-transition-slow);
//   will-change: transform, opacity;
// }

// .service-lazy-image.fade-in {
//   opacity: 1;
//   transform: scale(1);
// }

// /* Error State */
// .image-error-state {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
//   color: #999;
// }

// .error-icon {
//   font-size: 3rem;
//   margin-bottom: 10px;
//   opacity: 0.5;
// }

// .error-text {
//   font-size: 0.9rem;
// }

// /* Animation Keyframes */
// @keyframes spin {
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// }

// @keyframes shimmer {
//   0% { background-position: -20px 0, -10px -10px; }
//   100% { background-position: 20px 0, 30px 10px; }
// }

// @keyframes slideInLeft {
//   from {
//     transform: translateX(-50px);
//     opacity: 0;
//   }
//   to {
//     transform: translateX(0);
//     opacity: 1;
//   }
// }

// @keyframes slideInRight {
//   from {
//     transform: translateX(50px) scale(0.9);
//     opacity: 0;
//   }
//   to {
//     transform: translateX(0) scale(1);
//     opacity: 1;
//   }
// }

// @keyframes fadeInUp {
//   from {
//     transform: translateY(30px);
//     opacity: 0;
//   }
//   to {
//     transform: translateY(0);
//     opacity: 1;
//   }
// }

// /* Animation Classes */
// .animate-section-in {
//   transform: translateY(0);
//   opacity: 1;
//   transition-delay: 0.1s;
// }

// .animate-text-in {
//   transform: translateX(0);
//   opacity: 1;
//   transition-delay: 0.2s;
// }

// .animate-text-in::before {
//   opacity: 1;
//   transform: scaleY(1);
//   transition-delay: 0.8s;
// }

// .animate-heading-in {
//   transform: translateY(0);
//   opacity: 1;
//   transition-delay: 0.3s;
// }

// .animate-heading-in::after {
//   width: 80px;
//   transition-delay: 0.6s;
// }

// .animate-service-item-1 {
//   transform: translateX(0);
//   opacity: 1;
//   transition-delay: 0.4s;
// }

// .animate-service-item-2 {
//   transform: translateX(0);
//   opacity: 1;
//   transition-delay: 0.5s;
// }

// .animate-service-item-3 {
//   transform: translateX(0);
//   opacity: 1;
//   transition-delay: 0.6s;
// }

// .animate-service-item-4 {
//   transform: translateX(0);
//   opacity: 1;
//   transition-delay: 0.7s;
// }

// .animate-service-item-5 {
//   transform: translateX(0);
//   opacity: 1;
//   transition-delay: 0.8s;
// }

// .animate-description-in {
//   transform: translateY(0);
//   opacity: 1;
//   transition-delay: 0.9s;
// }

// .animate-image-in {
//   transform: translateX(0) scale(1);
//   opacity: 1;
//   transition-delay: 0.4s;
// }

// /* Enhanced Responsive Design */

// /* Extra Large Screens (1440px+) */
// @media (min-width: 1440px) {
//   .about-service-section {
//     padding: 6rem 4rem;
//   }
  
//   .about-service-container {
//     gap: 4rem;
//   }
  
//   .service-heading {
//     margin-bottom: 40px;
//   }
  
//   .service-item {
//     padding: 15px 0;
//     margin-bottom: 12px;
//   }
  
//   .service-description {
//     padding: 25px;
//   }
// }

// /* Large Desktop (1200px - 1439px) */
// @media (min-width: 1200px) and (max-width: 1439px) {
//   .about-service-section {
//     padding: 5rem 3rem;
//   }
  
//   .about-service-container {
//     gap: 3rem;
//   }
  
//   .service-heading {
//     margin-bottom: 35px;
//   }
// }

// /* Desktop (1024px - 1199px) */
// @media (min-width: 1024px) and (max-width: 1199px) {
//   .about-service-section {
//     padding: 4rem 2.5rem;
//   }
  
//   .about-service-container {
//     gap: 2.5rem;
//   }
  
//   .service-heading {
//     margin-bottom: 30px;
//   }
// }

// /* Tablet Portrait (768px - 1023px) */
// @media (min-width: 768px) and (max-width: 1023px) {
//   .about-service-section {
//     padding: 3rem 2rem;
//   }
  
//   .about-service-container {
//     gap: 2rem;
//   }
  
//   .service-heading {
//     margin-bottom: 25px;
//   }
// }

// /* Mobile Landscape & Large Mobile (640px - 767px) */
// @media (min-width: 640px) and (max-width: 767px) {
//   .about-service-section {
//     padding: 2.5rem 1.5rem;
//   }
  
//   .about-service-container {
//     flex-direction: column;
//     text-align: center;
//     gap: 2rem;
//     min-height: auto;
//   }

//   .about-service-text {
//     max-width: 100%;
//     text-align: center;
//     height: auto;
//     justify-content: flex-start;
//     transform: translateY(-20px);
//   }

//   .about-service-image {
//     max-width: 100%;
//     text-align: center;
//     height: auto;
//     transform: translateY(20px) scale(0.95);
//   }

//   .lazy-image-container {
//     height: 350px;
//     max-width: 500px;
//     margin: 0 auto;
//   }

//   .service-list {
//     list-style-position: inside;
//     margin-bottom: 25px;
//   }

//   .service-item {
//     justify-content: center;
//     text-align: center;
//   }

//   .service-heading {
//     text-align: center;
//     margin-bottom: 20px;
//   }
// }

// /* Medium Mobile (480px - 639px) */
// @media (min-width: 480px) and (max-width: 639px) {
//   .about-service-section {
//     padding: 2rem 1rem;
//   }

//   .about-service-container {
//     flex-direction: column;
//     gap: 1.5rem;
//   }

//   .lazy-image-container {
//     height: 300px;
//     max-width: 450px;
//   }

//   .service-item {
//     padding: 10px 0;
//     margin-bottom: 6px;
//   }

//   .service-description {
//     padding: 15px;
//   }
// }

// /* Small Mobile (320px - 479px) */
// @media (max-width: 479px) {
//   .about-service-section {
//     padding: 1.5rem 0.75rem;
//   }

//   .about-service-container {
//     flex-direction: column;
//     gap: 1rem;
//   }

//   .about-service-text {
//     flex: 1 1 auto;
//   }

//   .lazy-image-container {
//     height: 250px;
//     max-width: 100%;
//   }

//   .service-item {
//     padding: 8px 0;
//     margin-bottom: 4px;
//     flex-direction: column;
//     align-items: flex-start;
//   }

//   .service-bullet {
//     margin-right: 8px;
//     margin-bottom: 2px;
//   }

//   .service-description {
//     padding: 12px;
//     border-radius: 10px;
//   }

//   .service-heading {
//     margin-bottom: 15px;
//   }
// }

// /* Landscape Mobile Optimization */
// @media (max-width: 767px) and (orientation: landscape) and (max-height: 500px) {
//   .about-service-section {
//     padding: 1rem 0.5rem;
//   }

//   .about-service-container {
//     flex-direction: row;
//     gap: 1rem;
//     min-height: auto;
//   }

//   .about-service-text {
//     flex: 1;
//     height: auto;
//     text-align: left;
//   }

//   .about-service-image {
//     flex: 1;
//     height: auto;
//   }

//   .lazy-image-container {
//     height: 250px;
//   }

//   .service-heading {
//     text-align: left;
//     margin-bottom: 10px;
//   }

//   .service-item {
//     padding: 6px 0;
//     margin-bottom: 3px;
//   }

//   .service-description {
//     padding: 10px;
//     margin-top: 10px;
//   }
// }

// /* Performance Optimizations */
// .about-service-container,
// .about-service-text,
// .about-service-image,
// .service-lazy-image {
//   backface-visibility: hidden;
//   perspective: 1000px;
// }

// /* Accessibility Improvements */
// @media (prefers-reduced-motion: reduce) {
//   *,
//   *::before,
//   *::after {
//     animation-duration: 0.01ms !important;
//     animation-iteration-count: 1 !important;
//     transition-duration: 0.01ms !important;
//   }

//   .about-service-section,
//   .about-service-text,
//   .about-service-image,
//   .service-heading,
//   .service-item,
//   .service-description {
//     transform: none !important;
//     opacity: 1 !important;
//   }
// }

// /* High Contrast Mode */
// @media (prefers-contrast: high) {
//   .service-item {
//     border-bottom: 1px solid #333;
//   }

//   .service-heading {
//     border-bottom: 2px solid #000;
//     padding-bottom: 5px;
//   }

//   .lazy-image-container {
//     border: 2px solid #000;
//   }
// }

// /* Focus States for Accessibility */
// .service-item:focus-visible {
//   outline: 3px solid var(--service-accent-color);
//   outline-offset: 2px;
//   border-radius: 4px;
// }

// /* Print Styles */
// @media print {
//   .about-service-section {
//     background: white !important;
//     padding: 1rem !important;
//   }

//   .about-service-container {
//     flex-direction: column;
//     gap: 1rem;
//   }

//   .lazy-image-container {
//     height: auto;
//     max-height: 300px;
//     box-shadow: none;
//     border: 1px solid #000;
//   }

//   .service-heading,
//   .service-item,
//   .service-description {
//     color: black !important;
//   }

//   .service-bullet {
//     color: black !important;
//   }
// }