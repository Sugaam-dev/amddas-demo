// // import React from 'react';

// // import '../Styles/about.css';


// // const About = () => {
// //   return (
// //     <>
   
// //    <div className="banner-section-about">
// //         <h1 className="banner-title-about" style={{color:"white"}}> About Amddas Foods</h1>
// //       </div>
// //       <div className="about-section">
// //         <div className="about-block">
// //           <h2 className="about-heading">All About Us.....</h2>
        
// //         </div>

// //         <div className="about-block">
          
// //           <p className="about-text">
// //           Established in 2016, Amddas Foods has grown into a trusted name in the corporate and institutional catering space, delivering quality meals with consistency, hygiene, and heart. With a robust production capacity of 4,000 plates per day, we are equipped to serve large-scale requirements across corporate offices, events, and food courts.
// //           </p>
// //         </div>

// //         <div className="about-block">
// //           {/* <h2 className="about-heading">Trusted By 200+ satisfied clients</h2> */}
// //           <p className="about-text">
// //           Our culinary repertoire includes a wide variety of cuisines — from Indian vegetarian and non-vegetarian, South Indian, Maharashtrian, Bengali, and Odiya specialties to popular Chinese, Continental, and Italian dishes. Each menu is thoughtfully curated to suit regional tastes and modern preferences.
// //           </p>
         
// //         </div>

// //         <div className="about-block">
// //           <h2 className="about-heading">We offer a comprehensive range of services:</h2>
// //           <p className="about-text">
// //           Amddas Foods has been providing excellent service in the F&B industry since 2015. The journey till now has been full of learning and experiences with our customers, clientele, and counterparts. Our vision is to take Amddas Foods to a recognizable zenith and be the benchmark in quality and service.
// //           </p>
         
// //         </div>
// //       </div>
// //       <section id="why-us" className="why-us">
// //         <div className="why-us-container">
// //           {/* <div className="section-title">
// //             <h2>
// //               Why choose <span>Amddas</span>
// //             </h2>
// //             <p>
// //               Amddas Foods has been providing excellent service in the F&B industry since 2015. The journey till now
// //               has been full of learning and experiences with our customers, clientele, and counterparts. Our vision
// //               is to take Amddas Foods to a recognizable zenith and be the benchmark in quality and service.
// //             </p>
// //           </div> */}

// //           <div className="why-us-boxes">
// //             <div className="box">
// //               <span>01</span>
// //               <h4>Risk Management Standards</h4>
// //               <p>
// //                 Public Liability Policy is issued per site where our food is being supplied/consumed.
// //                 <br />
// //                 Strictly GST compliant with updated ledger and bank records. Regular on-time tax return filing done.
// //               </p>
// //             </div>

// //             <div className="box">
// //               <span>02</span>
// //               <h4>Employee Standards</h4>
// //               <p>
// //                 All employees undergo quarterly medical fitness test clearance while in service at Amddas Foods.
// //                 <br />
// //                 All staff have segregated dress codes based on their job roles.
// //                 <br />
// //                 Company-provided staff quarters adjacent to the manufacturing unit to ensure hassle-free operation.
// //               </p>
// //             </div>

// //             <div className="box">
// //               <span>03</span>
// //               <h4>Manufacturing Unit Standards</h4>
// //               <p>
// //                 HACCP (Hazard Analysis and Critical Control Points) standards met.
// //                 <br />
// //                 Segregated veg and non-veg cooking & storage sections.
// //                 <br />
// //                 Gas bank located outside the kitchen. Fire extinguishers installed at all strategic locations.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// // export default About;

// import React from 'react';
// import '../Styles/about.css';
// import Milestones from './SubComponents/Milestones';

// const About = () => {
//   const services = [
//     "Corporate Catering",
//     "Corporate Event Management", 
//     "Cafeteria Management",
//     "Birthday Celebrations",
//     "Weddings & Private Parties"
//   ];

//   return (
//     <>
//       <div className="banner-section-about">
//         <h1 className="banner-title-about" style={{color:"white"}}> About Amddas Foods</h1>
//       </div>
      
//       <div className="about-section">
//         <div className="about-block">
//           <h2 className="about-heading">All About Us.....</h2>
//         </div>

//         <div className="about-block">
//           <p className="about-text">
//             Established in 2016, Amddas Foods has grown into a trusted name in the corporate and institutional catering space, delivering quality meals with consistency, hygiene, and heart. With a robust production capacity of 4,000 plates per day, we are equipped to serve large-scale requirements across corporate offices, events, and food courts.
//           </p>
//         </div>

//         <div className="about-block">
//           <p className="about-text">
//             Our culinary repertoire includes a wide variety of cuisines — from Indian vegetarian and non-vegetarian, South Indian, Maharashtrian, Bengali, and Odiya specialties to popular Chinese, Continental, and Italian dishes. Each menu is thoughtfully curated to suit regional tastes and modern preferences.
//           </p>
//         </div>

//         <div className="about-block">
//           <h2 className="about-heading">We offer a comprehensive range of services:</h2>
//           <div className="services-container">
//             <ul className="services-list">
//               {services.map((service, index) => (
//                 <li key={index} className="service-item">
//                   {service}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div className="about-block">
//           <p className="about-text">
//           At Amddas, we combine authentic flavors with efficient service and modern kitchen practices, ensuring every plate and every event exceeds expectations.
//           </p>
//         </div>
//       </div>
      
//       <section id="why-us" className="why-us">
//         <div className="why-us-container">
//           <div className="why-us-boxes">
//             <div className="box">
//               <span>01</span>
//               <h4>Risk Management Standards</h4>
//               <p>
//                 Public Liability Policy is issued per site where our food is being supplied/consumed.
//                 <br />
//                 Strictly GST compliant with updated ledger and bank records. Regular on-time tax return filing done.
//               </p>
//             </div>

//             <div className="box">
//               <span>02</span>
//               <h4>Employee Standards</h4>
//               <p>
//                 All employees undergo quarterly medical fitness test clearance while in service at Amddas Foods.
//                 <br />
//                 All staff have segregated dress codes based on their job roles.
//                 <br />
//                 Company-provided staff quarters adjacent to the manufacturing unit to ensure hassle-free operation.
//               </p>
//             </div>

//             <div className="box">
//               <span>03</span>
//               <h4>Manufacturing Unit Standards</h4>
//               <p>
//                 HACCP (Hazard Analysis and Critical Control Points) standards met.
//                 <br />
//                 Segregated veg and non-veg cooking & storage sections.
//                 <br />
//                 Gas bank located outside the kitchen. Fire extinguishers installed at all strategic locations.
//               </p>
//             </div>
//           </div>
//         </div>

//       </section>
//       <Milestones/>
//     </>
//   );
// };

// export default About;

import React, { useState, useEffect } from 'react';
import './about.css';
import Milestones from './Milestones';
import About_all from './About_all'
import About_service from './About_service'
import Standards from './Standards';

const About = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  
  // const services = [
  //   "Corporate Catering",
  //   "Corporate Event Management", 
  //   "Cafeteria Management",
  //   "Birthday Celebrations",
  //   "Weddings & Private Parties"
  // ];

  // const standardsCards = [
  //   {
  //     id: 1,
  //     number: "01",
  //     title: "Risk Management Standards",
  //     description: "Public Liability Policy is issued per site where our food is being supplied/consumed. Strictly GST compliant with updated ledger and bank records. Regular on-time tax return filing done."
  //   },
  //   {
  //     id: 2,
  //     number: "02", 
  //     title: "Employee Standards",
  //     description: "All employees undergo quarterly medical fitness test clearance while in service at AMDDAS Foods. All staff have segregated dress codes based on their job roles. Company-provided staff quarters adjacent to the manufacturing unit to ensure hassle-free operation."
  //   },
  //   {
  //     id: 3,
  //     number: "03",
  //     title: "Manufacturing Unit Standards", 
  //     description: "HACCP (Hazard Analysis and Critical Control Points) standards met. Segregated veg and non-veg cooking & storage sections. Gas bank located outside the kitchen. Fire extinguishers installed at all strategic locations."
  //   },
  //   {
  //     id: 4,
  //     number: "04",
  //     title: "Certified Kitchen",
  //     description: "Our kitchen is certified by food safety authorities and follows international hygiene protocols. Regular third-party audits ensure compliance with health department regulations. Temperature-controlled storage facilities maintain food quality and freshness at all times."
  //   },
  //   {
  //     id: 5,
  //     number: "05",
  //     title: "Quality Standards",
  //     description: "s"
  //   }
  // ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % Math.ceil(standardsCards.length / getCardsPerSlide()));
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, [standardsCards.length]);

  // const getCardsPerSlide = () => {
  //   if (window.innerWidth <= 768) return 1;
  //   if (window.innerWidth <= 1024) return 2;
  //   return 3;
  // };

  // const goToSlide = (index) => {
  //   setCurrentSlide(index);
  // };

  // const totalSlides = Math.ceil(standardsCards.length / getCardsPerSlide());

  return (
    <>
      <div className="banner-section-about">
        <h1 className="banner-title-about" style={{color:"white"}}> About AMDDAS Foods</h1>
      </div>
      
      <div className="about-section">
        {/* <div className="about-block">
          <h2 className="about-heading">All About Us.....</h2>
        </div>

        <div className="about-block">
          <p className="about-text">
            Established in 2016, AMDDAS Foods has grown into a trusted name in the corporate and institutional catering space, delivering quality meals with consistency, hygiene, and heart. With a robust production capacity of 4,000 plates per day, we are equipped to serve large-scale requirements across corporate offices, events, and food courts.
          </p>
        </div> */}
        <About_all/>
        <About_service/>
        <Standards/>
         <Milestones/>
       </div>

        {/* <div className="about-block">
          <p className="about-text">
            Our culinary repertoire includes a wide variety of cuisines — from Indian vegetarian and non-vegetarian, South Indian, Maharashtrian, Bengali, and Odiya specialties to popular Chinese, Continental, and Italian dishes. Each menu is thoughtfully curated to suit regional tastes and modern preferences.
          </p>
        </div> */}

        {/* <div className="about-block">
          <h2 className="about-heading">We offer a comprehensive range of services:</h2>
          <div className="services-container">
            <ul className="services-list">
              {services.map((service, index) => (
                <li key={index} className="service-item">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div> */}

        {/* <div className="about-block">
          <p className="about-text">
          At AMDDAS, we combine authentic flavors with efficient service and modern kitchen practices, ensuring every plate and every event exceeds expectations.
          </p>
        </div> */}
     
      
      {/* <section id="why-us" className="why-us">
        <div className="why-us-container">
          <div className="section-title">
            <h2>Our <span>Standards</span></h2>
            <p>Excellence in every aspect of our food service operations</p>
          </div>
          
          <div className="standards-carousel">
            <div className="carousel-container">
              <div 
                className="carousel-track"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                  transition: 'transform 0.5s ease-in-out'
                }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="carousel-slide-standards">
                    {standardsCards
                      .slice(slideIndex * getCardsPerSlide(), (slideIndex + 1) * getCardsPerSlide())
                      .map((card) => (
                        <div key={card.id} className="box">
                          <span>{card.number}</span>
                          <h4>{card.title}</h4>
                          <p>{card.description}</p>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>
            
          
            <div className="carousel-pagination">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`pagination-dot-standards ${index === currentSlide ? 'active' : ''}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section> */}
      
     
    </>
  );
};

export default About;

