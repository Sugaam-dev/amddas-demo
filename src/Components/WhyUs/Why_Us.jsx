import React, { memo, useEffect, useRef, useState } from 'react';
import './Why_Us.css';

const sections = [
  {
    title: "Manufacturing Certifications",
    image: "/images/kitchenstandard.webp",
    points: [
      "FSSAI Certification – Fully licensed and compliant with Food Safety and Standards Authority of India regulations",
      "Food Testing Reports – Regular laboratory testing to ensure food safety, hygiene, and compliance with health standards",
      "MSME Udhyam Certification – Recognized under the Ministry of Micro, Small & Medium Enterprises, validating business credibility.",
      "Pest Control Certification – Regularly conducted pest control with official certification for a safe and hygienic facility.",
      "Water Testing Reports – Periodic lab testing to ensure the use of clean, safe, and high-quality water in all food preparation.",
    ]
  },
  {
    title: "Uncompromising Quality",
    image: "/images/qualitystandard123.webp",
    points: [
      "Hygienic Food Preparation – All meals are prepared in a sanitized kitchen under strict quality-controlled processes",
      "Fresh & Safe Ingredients – Vegetables are sourced twice a week from authorized distributors, with quarterly pesticide residue testing for safety and compliance.",
      "Rigorous Testing – Regular water testing (Eurofins) and food testing (Vimta Labs) conducted quarterly or as needed (client-requested services, chargeable separately)",
      "Daily Quality Check – Every dish undergoes tasting before packaging to ensure taste, freshness, and consistency.",
      "Safe Transportation – Food is always delivered in covered vehicles, ensuring hygiene throughout transit.",
    ]
  },
  {
    title: "State-of-the-Art Manufacturing Facility",
    image: "/images/Manufacturingunit.webp",
    points: [
      "International Safety Compliance – Fully aligned with HACCP (Hazard Analysis and Critical Control Points) standards for food safety and quality.",
      "Dedicated Cooking Zones – Separate kitchens and storage areas for vegetarian and non-vegetarian food to maintain purity and compliance.",
      "Comprehensive Fire & Safety Measures – Centralized gas bank located outside the kitchen, with fire extinguishers strategically placed across the unit.",
      "Secure & Monitored Facility – Restricted access with 24/7 surveillance inside and outside the premises for maximum security.",
      "Rigorous Cleaning & Pest Control – Daily cleaning post-cooking, weekly pest control, and scheduled deep cleaning every weekend.",
      "Uninterrupted Operations – 24/7 power backup to ensure seamless food preparation and delivery without disruptions.",
      
    ]
  },
  {
    title: "Robust Risk Management",
    image: '/images/risky.webp',
    points: [
      "Food Safety Assurance – Daily food samples are collected and securely stored for 72 hours to safeguard against false food poisoning claims. (Extended storage available based on client requirements.)",
      "Regulatory & Legal Compliance – 100% GST compliant operations with transparent ledger management, updated bank records, and timely tax return filings.",
      "Proactive Safeguards – Preventive checks, hygiene audits, and safety protocols implemented to minimize risks and ensure uninterrupted catering services.",
      "Client Trust & Transparency – Every process is documented and monitored, ensuring accountability and peace of mind for our clients.",
    ]
  },
  {
    title: "Employee Excellence & Welfare",
    image: "/images/employeestandard.webp",
    points: [
      "Health & Safety First – All employees undergo quarterly medical fitness tests to ensure they are fit for service at AMDDAS FOODS.",
      "Professional Dress Code – Staff uniforms are clearly defined based on job roles, ensuring hygiene, safety, and easy identification.",
      "Strict Hygiene Protocols – Outdoor footwear is prohibited; staff and visitors use dedicated in-house kitchen shoes only.",
      "Employee Benefits & Security – PF and ESI facilities provided to all permanent employees, reinforcing stability and welfare.",
      "On-Site Accommodation – Company-provided staff quarters located adjacent to the manufacturing unit ensure hassle-free and timely operations.",
    ]
  }
  
  
];

const LazyImage = memo(({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={className}>
      {inView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
        />
      )}
    </div>
  );
});

const AnimatedSection = memo(({ section, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 50); // Staggered animation
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div 
      ref={sectionRef}
      className={`whyus-section ${isVisible ? 'section-visible' : ''}`}
    >
      <div className="whyus-text">
        <h2>{section.title}</h2>
        <ul>
          {section.points.map((point, i) => (
            <li 
              key={i}
              className="list-item"
              style={{
                animationDelay: isVisible ? `${i * 0.1}s` : '0s'
              }}
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div className="whyus-image">
        <LazyImage 
          src={section.image} 
          alt={section.title}
          className="amddas-pic-image-container"
        />
      </div>
    </div>
  );
});

const Why_Us = memo(() => {
  return (
    <div className="whyus-wrapper">
      <div className="banner-section-why-us">
        <h1 className="banner-title-why-us">Why Choose AMDDAS Foods</h1>
      </div>

      <div className="whyus-container">
        {sections.map((section, index) => (
          <AnimatedSection 
            key={index}
            section={section}
            index={index}
          />
        ))}
      </div>
    </div>
  );
});

export default Why_Us;