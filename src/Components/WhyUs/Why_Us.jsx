import React, { memo, useEffect, useRef, useState } from 'react';
import './Why_Us.css';

const sections = [
  {
    title: "Risk Management Standards",
    image: "/images/risky.webp",
    points: [
      "Public Liability Policy is issued per site where our food is being supplied/consumed.",
      "All medical expense covered in case of hospitalization caused due the Food poisoning, body injury or property",
      "damage caused by AMDDAS FOODs directly or indirectly.",
      "Daily food samples are collected & stored for 72 Hrs. to prove false food poisoning claims reported otherwise.",
      "** NB — Based on client requirement.",
      "Strictly GST compliant along with updated Ledger and bank records. Regular on-time Tax return filing done.",
    ]
  },
  {
    title: "Quality Standard",
    image: "/images/qualitystandard.webp",
    points: [
      "Food is cooked in a very hygienic environment under constant quality controlled processes.",
      "Vegetables are procured twice/week for freshness from authorized Distributor (Qtrly Pesticide residual test done)",
      "We undergo water testing from Eurofins every quarter or on need basis. (Payable by client)",
      "We undergo food testing from Vimta Labs every quarter or on need basis (Payable by client)",
      "Food tasting done daily before moving it to dispatching/packaging area.",
      "Hoffman Insulated boxes are used for packaging/transportation which keeps food hot and fresh for 8—10 hrs.",
      "Food is transported in covered vehicles at all given point of time.",
    ]
  },
  {
    title: "Manufacturing Unit Standards",
    image: "/images/Manufacturingunit.webp",
    points: [
      "HACCP (Hazard Analysis and Critical Control Points) standards met.",
      "Segregated Veg and Non-Veg cooking & storage sections.",
      "Gas bank located outside the kitchen. Fire extinguishers installed at all strategic locations.",
      "Restricted access with 24/7 surveillance inside and outside the manufacturing areas.",
      "Every weekend deep cleaning is done throughout the facility apart from daily cleaning post cooking.",
      "Pest control done every week.",
      "24/7 power back up for seamless execution of operations.",
    ]
  },
  {
    title: "Employee Standard",
    image: "/images/employeestandard.webp",
    points: [
      "All employees undergo quarterly Medical Fitness Test clearance while in service in AMDDAS FOODS.",
      "All staff have segregated dress code based on their job roles.",
      "All shoes are kept outside and the staff and visitors move around with kitchen shoes for in-house usage only.",
      "PF & ESI for all permanent employees done.",
      "Company provided staff quarters adjacent to the Manufacturing unit to avoid hassle free operation.",
    ]
  },
  {
    title: "Certified Kitchen",
    image: "/images/kitchenstandard.webp",
    points: [
      "FSSAI Certificate.",
      "Food Testing Report.",
      "MSME Udhyam Certificate.",
      "Pest Control Certificate.",
      "Water Testing Report.",
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
          className="image-container"
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
