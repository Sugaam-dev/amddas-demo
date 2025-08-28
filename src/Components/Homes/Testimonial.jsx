// // // // // import React from 'react';
// // // // // import './Testimonial.css';
// // // // // import { FaStar } from 'react-icons/fa';

// // // // // const Testimonial = () => {
// // // // //   const testimonials = [
// // // // //     {
// // // // //       id: 1,
// // // // //       name: "RANDHIR KUMAR",
// // // // //     //   designation: "HR Manager",
// // // // //       review: "I recently booked AMDDAS FOODS for my housewarming ceremony, and I’m extremely happy with their service. The food was delicious, well-prepared, and appreciated by all our guests. The staff was professional, punctual, and very courteous. Everything was managed smoothly without any hassle. Highly recommended for any family function or event!",
// // // // //       rating: 5
// // // // //     },
// // // // //     {
// // // // //       id: 2,
// // // // //       name: "RITESH SINHA",
// // // // //     //   designation: "Event Coordinator",
// // // // //       review: "We chose AMDDAS Food to cater my nephew's birthday, and it was a fantastic decision. The food was delicious, served hot, and enjoyed by all our guests. Everyone appreciated the great taste. I highly recommend AMDDAS Food for catering needs!",
// // // // //       rating: 4
// // // // //     },
// // // // //     {
// // // // //       id: 3,
// // // // //       name: "SHEETAL DIXIT",
// // // // //     //   designation: "Operations Head",
// // // // //       review: "Extremely glad I went with Amddas catering for a small family get together for Diwali. We had arranged for live chats for 3 days along with breakfast , lunch and dinner for about 15 people. Got a lot of praises from the family about the tasty food. No complaints!! Budget friendly and amazing food. Will definitely go with this catering for events here on.",
// // // // //       rating: 5
// // // // //     },
// // // // //     {
// // // // //       id: 4,
// // // // //       name: "PRITI MISHRA",
// // // // //     //   designation: "Office Manager",
// // // // //       review: "I got to know about AMDDAS from one of my friend. I was not assured how the service will be. But they day of function all my friends and relatives liked the food and asked contact for AMDDAS. The food was very tasty,hygienic and very well decorated. Staff was so helping and professional. As my friends were happy I am giving 5 star. Most recommended catering in terms of quality.",
// // // // //       rating: 5
// // // // //     },
// // // // //     {
// // // // //       id: 5,
// // // // //       name: "MADHUR SEXENA",
// // // // //     //   designation: "CEO",
// // // // //       review: "We ordered breakfast, lunch & dinner for 20+ people for couple for days for a religious ceremony at home. The food was excellent and delivered on time as per our menu. We had asked for low oil low spices food and it was exactly like that. Guests loved the food.",
// // // // //       rating: 5
// // // // //     },
// // // // //     {
// // // // //       id: 6,
// // // // //       name: "GURAV SINGHAI",
// // // // //     //   designation: "Admin Head",
// // // // //       review: "The food is excellent and deserves to be compared across any party size. They have good cutlery and serving utensils. The only downside is their time reliability, they are always late and don’t manage customer expectation, so recommendation is to track them 2-3 hours before the delivery time. I am forced to given them 3 start rating due to poor time management as the guests left without having food due to 45 min delay for a 2 hrs birthday party dinner.",
// // // // //       rating: 3
// // // // //     }
// // // // //   ];

// // // // //   const renderStars = (rating) => {
// // // // //     return Array.from({ length: 5 }, (_, index) => (
// // // // //       <FaStar
// // // // //         key={index}
// // // // //         className={index < rating ? 'star filled' : 'star'}
// // // // //       />
// // // // //     ));
// // // // //   };

// // // // //   return (
// // // // //     <div className="testimonial-container">
// // // // //       <div className="testimonial-header">
// // // // //         <h1 className="testimonial-title">
// // // // //           TESTIMONIAL <span className="highlight">REVIEWS</span>
// // // // //         </h1>
// // // // //       </div>

// // // // //       <div className="testimonial-grid">
// // // // //         {testimonials.map((testimonial) => (
// // // // //           <div key={testimonial.id} className="testimonial-card">
// // // // //             <div className="quote-icon">
// // // // //               <span>❝</span>
// // // // //             </div>
            
// // // // //             <div className="testimonial-content">
// // // // //               <p className="testimonial-text">
// // // // //                 {testimonial.review}
// // // // //               </p>
              
// // // // //               <div className="testimonial-footer">
// // // // //                 <div className="customer-info">
// // // // //                   <h4 className="customer-name">{testimonial.name}</h4>
// // // // //                   <p className="customer-designation">{testimonial.designation}</p>
// // // // //                 </div>
                
// // // // //                 <div className="rating">
// // // // //                   {renderStars(testimonial.rating)}
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>

// // // // //       <div className="see-more-container">
// // // // //         <a href="https://www.google.com/search?sca_esv=a5069341141d07fa&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E-FEWkJ58jyWJ0N7SmszMxE4o7qtBfHgCF_P7UNBoRlvzMB3adXzBYFW5IgkZBw5hY_ofxeeYO8zJngHku9UOmzrxUEP8QrN6YoLBMCm-NsTMzFlqQ%3D%3D&q=AMDDAS+FOODS+PVT+LTD+Reviews&sa=X&ved=2ahUKEwirlryI4MWOAxVV7zgGHTR_J3gQ0bkNegQIHBAE&biw=1440&bih=778&dpr=1" className="see-more-btn">
// // // // //             SEE MORE REVIEWS
// // // // //         </a>
// // // // //         </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Testimonial;

// // // // import React from 'react';
// // // // import './Testimonial.css';
// // // // import { FaStar } from 'react-icons/fa';

// // // // const Testimonial = () => {
// // // //   const testimonials = [
// // // //     {
// // // //       id: 1,
// // // //       name: "RANDHIR KUMAR",
// // // //     //   designation: "HR Manager",
// // // //       review: "I recently booked AMDDAS FOODS for my housewarming ceremony, and I’m extremely happy with their service. The food was delicious, well-prepared, and appreciated by all our guests. The staff was professional, punctual, and very courteous. Everything was managed smoothly without any hassle. Highly recommended for any family function or event!",
// // // //       rating: 5
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       name: "RITESH SINHA",
// // // //     //   designation: "Event Coordinator",
// // // //       review: "We chose AMDDAS Food to cater my nephew's birthday, and it was a fantastic decision. The food was delicious, served hot, and enjoyed by all our guests. Everyone appreciated the great taste. I highly recommend AMDDAS Food for catering needs!",
// // // //       rating: 4
// // // //     },
// // // //     {
// // // //       id: 3,
// // // //       name: "SHEETAL DIXIT",
// // // //     //   designation: "Operations Head",
// // // //       review: "Extremely glad I went with Amddas catering for a small family get together for Diwali. We had arranged for live chats for 3 days along with breakfast , lunch and dinner for about 15 people. Got a lot of praises from the family about the tasty food. No complaints!! Budget friendly and amazing food. Will definitely go with this catering for events here on.",
// // // //       rating: 5
// // // //     },
// // // //     {
// // // //       id: 4,
// // // //       name: "PRITI MISHRA",
// // // //     //   designation: "Office Manager",
// // // //       review: "I got to know about AMDDAS from one of my friend. I was not assured how the service will be. But they day of function all my friends and relatives liked the food and asked contact for AMDDAS. The food was very tasty,hygienic and very well decorated. Staff was so helping and professional. As my friends were happy I am giving 5 star. Most recommended catering in terms of quality.",
// // // //       rating: 5
// // // //     },
// // // //     {
// // // //       id: 5,
// // // //       name: "MADHUR SEXENA",
// // // //     //   designation: "CEO",
// // // //       review: "We ordered breakfast, lunch & dinner for 20+ people for couple for days for a religious ceremony at home. The food was excellent and delivered on time as per our menu. We had asked for low oil low spices food and it was exactly like that. Guests loved the food.",
// // // //       rating: 5
// // // //     },
// // // //     {
// // // //       id: 6,
// // // //       name: "GURAV SINGHAI",
// // // //     //   designation: "Admin Head",
// // // //       review: "The food is excellent and deserves to be compared across any party size. They have good cutlery and serving utensils. The only downside is their time reliability, they are always late and don’t manage customer expectation, so recommendation is to track them 2-3 hours before the delivery time. I am forced to given them 3 start rating due to poor time management as the guests left without having food due to 45 min delay for a 2 hrs birthday party dinner.",
// // // //       rating: 3
// // // //     }
// // // //   ];

// // // //   const renderStars = (rating) => {
// // // //     return Array.from({ length: 5 }, (_, index) => (
// // // //       <FaStar
// // // //         key={index}
// // // //         className={index < rating ? 'star filled' : 'star'}
// // // //       />
// // // //     ));
// // // //   };

// // // //   return (
// // // //     <div className="testimonial-container">
// // // //       <div className="testimonial-header">
// // // //         <h1 className="testimonial-title">
// // // //           TESTIMONIAL <span className="highlight">REVIEWS</span>
// // // //         </h1>
// // // //           <div className="header-line"></div>
// // // //         <p className="header-subtitle">
// // // //           Discover what our customers say about their AMDDAS experience
// // // //         </p>
// // // //       </div>

// // // //       <div className="testimonial-grid">
// // // //         {testimonials.map((testimonial) => (
// // // //           <div key={testimonial.id} className="testimonial-card">
// // // //             <div className="quote-icon">
// // // //               <span>❝</span>
// // // //             </div>
            
// // // //             <div className="testimonial-content">
// // // //               <p className="testimonial-text">
// // // //                 {testimonial.review}
// // // //               </p>
              
// // // //               <div className="testimonial-footer">
// // // //                 <div className="customer-info">
// // // //                   <h4 className="customer-name">{testimonial.name}</h4>
// // // //                   <p className="customer-designation">{testimonial.designation}</p>
// // // //                 </div>
                
// // // //                 <div className="rating">
// // // //                   {renderStars(testimonial.rating)}
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //       <div className="see-more-container">
// // // //         <a href="https://www.google.com/search?sca_esv=a5069341141d07fa&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E-FEWkJ58jyWJ0N7SmszMxE4o7qtBfHgCF_P7UNBoRlvzMB3adXzBYFW5IgkZBw5hY_ofxeeYO8zJngHku9UOmzrxUEP8QrN6YoLBMCm-NsTMzFlqQ%3D%3D&q=AMDDAS+FOODS+PVT+LTD+Reviews&sa=X&ved=2ahUKEwirlryI4MWOAxVV7zgGHTR_J3gQ0bkNegQIHBAE&biw=1440&bih=778&dpr=1" className="see-more-btn">
// // // //             SEE MORE REVIEWS
// // // //         </a>
// // // //         </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Testimonial;


// // // import React, { useState, useEffect } from 'react';
// // // import './Testimonial.css';
// // // import { FaStar } from 'react-icons/fa';

// // // const Testimonial = () => {
// // //   const [currentIndex, setCurrentIndex] = useState(0);
// // //   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

// // //   const testimonials = [
// // //     {
// // //       id: 1,
// // //       name: "RANDHIR KUMAR",
// // //       designation: "",
// // //       review: "I recently booked AMDDAS FOODS for my housewarming ceremony, and I'm extremely happy with their service. The food was delicious, well-prepared, and appreciated by all our guests. The staff was professional, punctual, and very courteous. Everything was managed smoothly without any hassle. Highly recommended for any family function or event!",
// // //       rating: 5
// // //     },
// // //     {
// // //       id: 2,
// // //       name: "RITESH SINHA",
// // //       designation: "",
// // //       review: "We chose AMDDAS Food to cater my nephew's birthday, and it was a fantastic decision. The food was delicious, served hot, and enjoyed by all our guests. Everyone appreciated the great taste. I highly recommend AMDDAS Food for catering needs!",
// // //       rating: 4
// // //     },
// // //     {
// // //       id: 3,
// // //       name: "SHEETAL DIXIT",
// // //       designation: "",
// // //       review: "Extremely glad I went with Amddas catering for a small family get together for Diwali. We had arranged for live chats for 3 days along with breakfast, lunch and dinner for about 15 people. Got a lot of praises from the family about the tasty food. No complaints!! Budget friendly and amazing food. Will definitely go with this catering for events here on.",
// // //       rating: 5
// // //     },
// // //     {
// // //       id: 4,
// // //       name: "PRITI MISHRA",
// // //       designation: "",
// // //       review: "I got to know about AMDDAS from one of my friend. I was not assured how the service will be. But the day of function all my friends and relatives liked the food and asked contact for AMDDAS. The food was very tasty, hygienic and very well decorated. Staff was so helping and professional. As my friends were happy I am giving 5 star. Most recommended catering in terms of quality.",
// // //       rating: 5
// // //     },
// // //     {
// // //       id: 5,
// // //       name: "MADHUR SEXENA",
// // //       designation: "",
// // //       review: "We ordered breakfast, lunch & dinner for 20+ people for couple for days for a religious ceremony at home. The food was excellent and delivered on time as per our menu. We had asked for low oil low spices food and it was exactly like that. Guests loved the food.",
// // //       rating: 5
// // //     },
// // //     {
// // //       id: 6,
// // //       name: "GURAV SINGHAI",
// // //       designation: "",
// // //       review: "Great food and service quality ruined by consistently poor time management - arrives 45+ minutes late without communication, causing guests to leave events early.",
// // //       rating: 3
// // //     }
// // //   ];

// // //   // Auto-play functionality
// // //   useEffect(() => {
// // //     let interval;
// // //     if (isAutoPlaying) {
// // //       interval = setInterval(() => {
// // //         setCurrentIndex((prevIndex) => 
// // //           prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
// // //         );
// // //       }, 2000); // Change slide every 2 seconds
// // //     }
// // //     return () => clearInterval(interval);
// // //   }, [isAutoPlaying, testimonials.length]);

// // //   // Handle dot click
// // //   const handleDotClick = (index) => {
// // //     setCurrentIndex(index);
// // //     setIsAutoPlaying(true); // Pause auto-play when user interacts
    
// // //     // Resume auto-play after 2 seconds of no interaction
// // //     setTimeout(() => {
// // //       setIsAutoPlaying(true);
// // //     }, 2000);
// // //   };

// // //   // Pause auto-play on hover
// // //   const handleMouseEnter = () => {
// // //     setIsAutoPlaying(false);
// // //   };

// // //   // Resume auto-play on mouse leave
// // //   const handleMouseLeave = () => {
// // //     setIsAutoPlaying(true);
// // //   };

// // //   const renderStars = (rating) => {
// // //     return Array.from({ length: 5 }, (_, index) => (
// // //       <FaStar
// // //         key={index}
// // //         className="star"
// // //         style={{
// // //           color: index < rating ? '#ffd700' : 'rgba(255, 255, 255, 0.3)'
// // //         }}
// // //       />
// // //     ));
// // //   };

// // //   return (
// // //     <div 
// // //       className="testimonial-container"
// // //       onMouseEnter={handleMouseEnter}
// // //       onMouseLeave={handleMouseLeave}
// // //     >
// // //       <div className="testimonial-header">
// // //         <h1 className="testimonial-title">
// // //           TESTIMONIAL <span className="highlight">REVIEWS</span>
// // //         </h1>
// // //         <div className="header-line"></div>
// // //         <p className="header-subtitl">
// // //           Discover what our customers say about their AMDDAS experience
// // //         </p>
// // //       </div>

// // //       <div className="testimonial-grid">
// // //         {testimonials.map((testimonial, index) => (
// // //           <div 
// // //             key={testimonial.id} 
// // //             className={`testimonial-item ${index === currentIndex ? 'active' : ''}`}
// // //           >
// // //             <div className="testimonial-stars">
// // //               {renderStars(testimonial.rating)}
// // //             </div>
            
// // //             <p className="testimonial-text">
// // //               "{testimonial.review}"
// // //             </p>
            
// // //             <div className="customer-info">
// // //               <h4 className="customer-name">{testimonial.name}</h4>
// // //               {testimonial.designation && (
// // //                 <p className="customer-designation">{testimonial.designation}</p>
// // //               )}
// // //             </div>
// // //           </div>
// // //         ))}

// // //         {/* Navigation Dots */}
// // //         <div className="testimonial-dots">
// // //           {testimonials.map((_, index) => (
// // //             <div
// // //               key={index}
// // //               className={`dot ${index === currentIndex ? 'active' : ''}`}
// // //               onClick={() => handleDotClick(index)}
// // //             />
// // //           ))}
// // //         </div>

// // //         {/* Progress Bar */}
// // //         {/* <div className="progress-bar">
// // //           <div 
// // //             className="progress-fill"
// // //             style={{
// // //               animationDuration: isAutoPlaying ? '5s' : '0s',
// // //               animationPlayState: isAutoPlaying ? 'running' : 'paused'
// // //             }}
// // //           />
// // //         </div> */}
// // //       </div>

// // //       <div className="see-more-container">
// // //         <a 
// // //           href="https://www.google.com/search?sca_esv=a5069341141d07fa&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E-FEWkJ58jyWJ0N7SmszMxE4o7qtBfHgCF_P7UNBoRlvzMB3adXzBYFW5IgkZBw5hY_ofxeeYO8zJngHku9UOmzrxUEP8QrN6YoLBMCm-NsTMzFlqQ%3D%3D&q=AMDDAS+FOODS+PVT+LTD+Reviews&sa=X&ved=2ahUKEwirlryI4MWOAxVV7zgGHTR_J3gQ0bkNegQIHBAE&biw=1440&bih=778&dpr=1" 
// // //           className="see-more-btn"
// // //           target="_blank"
// // //           rel="noopener noreferrer"
// // //         >
// // //           SEE MORE REVIEWS
// // //         </a>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Testimonial;



// // import React, { useState, useEffect } from 'react';
// // import './Testimonial.css';
// // import { FaStar } from 'react-icons/fa';

// // const Testimonial = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // const testimonials = [
  //   {
  //     id: 1,
  //     name: "RANDHIR KUMAR",
  //     designation: "",
  //     review: "I recently booked AMDDAS FOODS for my housewarming ceremony, and I'm extremely happy with their service. The food was delicious, well-prepared, and appreciated by all our guests. The staff was professional, punctual, and very courteous. Everything was managed smoothly without any hassle. Highly recommended for any family function or event!",
  //     rating: 5
  //   },
  //   {
  //     id: 2,
  //     name: "RITESH SINHA",
  //     designation: "",
  //     review: "We chose AMDDAS Food to cater my nephew's birthday, and it was a fantastic decision. The food was delicious, served hot, and enjoyed by all our guests. Everyone appreciated the great taste. I highly recommend AMDDAS Food for catering needs!",
  //     rating: 4
  //   },
  //   {
  //     id: 3,
  //     name: "SHEETAL DIXIT",
  //     designation: "",
  //     review: "Extremely glad I went with Amddas catering for a small family get together for Diwali. We had arranged for live chats for 3 days along with breakfast, lunch and dinner for about 15 people. Got a lot of praises from the family about the tasty food. No complaints!! Budget friendly and amazing food. Will definitely go with this catering for events here on.",
  //     rating: 5
  //   },
  //   {
  //     id: 4,
  //     name: "PRITI MISHRA",
  //     designation: "",
  //     review: "I got to know about AMDDAS from one of my friend. I was not assured how the service will be. But the day of function all my friends and relatives liked the food and asked contact for AMDDAS. The food was very tasty, hygienic and very well decorated. Staff was so helping and professional. As my friends were happy I am giving 5 star. Most recommended catering in terms of quality.",
  //     rating: 5
  //   },
  //   {
  //     id: 5,
  //     name: "MADHUR SEXENA",
  //     designation: "",
  //     review: "We ordered breakfast, lunch & dinner for 20+ people for couple for days for a religious ceremony at home. The food was excellent and delivered on time as per our menu. We had asked for low oil low spices food and it was exactly like that. Guests loved the food.",
  //     rating: 5
  //   },
  //   {
  //     id: 6,
  //     name: "GURAV SINGHAI",
  //     designation: "",
  //     review: "Great food and service quality ruined by consistently poor time management - arrives 45+ minutes late without communication, causing guests to leave events early.",
  //     rating: 3
  //   }
  // ];

// //   // Auto-play functionality
// //   useEffect(() => {
// //     let interval;
// //     if (isAutoPlaying) {
// //       interval = setInterval(() => {
// //         setCurrentIndex((prevIndex) => 
// //           prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
// //         );
// //       }, 3000); // Change slide every 3 seconds
// //     }
// //     return () => clearInterval(interval);
// //   }, [isAutoPlaying, testimonials.length]);

// //   // Handle dot click
// //   const handleDotClick = (index) => {
// //     setCurrentIndex(index);
// //     setIsAutoPlaying(true);
// //     setTimeout(() => {
// //       setIsAutoPlaying(true);
// //     }, 2000);
// //   };

// //   // Pause auto-play on hover
// //   const handleMouseEnter = () => {
// //     setIsAutoPlaying(false);
// //   };

// //   // Resume auto-play on mouse leave
// //   const handleMouseLeave = () => {
// //     setIsAutoPlaying(true);
// //   };

// //   const renderStars = (rating) => {
// //     return Array.from({ length: 5 }, (_, index) => (
// //       <FaStar
// //         key={index}
// //         className="star"
// //         style={{
// //           color: index < rating ? '#ffd700' : 'rgba(255, 255, 255, 0.3)'
// //         }}
// //       />
// //     ));
// //   };

// //   return (
// //     <div 
// //       className="testimonial-container"
// //       onMouseEnter={handleMouseEnter}
// //       onMouseLeave={handleMouseLeave}
// //     >
// //       <div className="testimonial-header">
// //         <h1 className="testimonial-title">
// //           TESTIMONIAL <span className="highlight">REVIEWS</span>
// //         </h1>
// //         <div className="header-line"></div>
// //         <p className="header-subtitl">
// //           Discover what our customers say about their AMDDAS experience
// //         </p>
// //       </div>

// //       <div className="testimonial-grid">
// //         {testimonials.map((testimonial, index) => (
// //           <div 
// //             key={testimonial.id} 
// //             className={`testimonial-item ${index === currentIndex ? 'active' : ''}`}
// //           >
// //             <div className="testimonial-stars">
// //               {renderStars(testimonial.rating)}
// //             </div>
            
// //             <p className="testimonial-text">
// //               "{testimonial.review}"
// //             </p>
            
// //             <div className="customer-info">
// //               <h4 className="customer-name">{testimonial.name}</h4>
// //               {testimonial.designation && (
// //                 <p className="customer-designation">{testimonial.designation}</p>
// //               )}
// //             </div>
// //           </div>
// //         ))}

// //         {/* Navigation Dots */}
// //         <div className="testimonial-dots">
// //           {testimonials.map((_, index) => (
// //             <div
// //               key={index}
// //               className={`dot ${index === currentIndex ? 'active' : ''}`}
// //               onClick={() => handleDotClick(index)}
// //             />
// //           ))}
// //         </div>

// //         {/* See More Reviews Button */}
// //         <div className="see-more-container">
// //           <a 
// //             href="https://www.google.com/search?sca_esv=a5069341141d07fa&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E-FEWkJ58jyWJ0N7SmszMxE4o7qtBfHgCF_P7UNBoRlvzMB3adXzBYFW5IgkZBw5hY_ofxeeYO8zJngHku9UOmzrxUEP8QrN6YoLBMCm-NsTMzFlqQ%3D%3D&q=AMDDAS+FOODS+PVT+LTD+Reviews&sa=X&ved=2ahUKEwirlryI4MWOAxVV7zgGHTR_J3gQ0bkNegQIHBAE&biw=1440&bih=778&dpr=1" 
// //             className="see-more-btn"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             SEE MORE REVIEWS
// //           </a>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Testimonial;


// import React, { useState, useEffect } from 'react';
// import './Testimonial.css';
// import { FaStar } from 'react-icons/fa';

// const Testimonial = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

  // const testimonials = [
  //   {
  //     id: 1,
  //     name: "RANDHIR KUMAR",
  //     review: "I recently booked AMDDAS FOODS for my housewarming ceremony, and I'm extremely happy with their service. The food was delicious, well-prepared, and appreciated by all our guests. The staff was professional, punctual, and very courteous. Everything was managed smoothly without any hassle. Highly recommended for any family function or event!",
  //     rating: 5
  //   },
  //   {
  //     id: 2,
  //     name: "RITESH SINHA",
  //     review: "We chose AMDDAS Food to cater my nephew's birthday, and it was a fantastic decision. The food was delicious, served hot, and enjoyed by all our guests. Everyone appreciated the great taste. I highly recommend AMDDAS Food for catering needs!",
  //     rating: 4
  //   },
  //   {
  //     id: 3,
  //     name: "SHEETAL DIXIT",
  //     review: "Extremely glad I went with Amddas catering for a small family get together for Diwali. We had arranged for live chats for 3 days along with breakfast, lunch and dinner for about 15 people. Got a lot of praises from the family about the tasty food. No complaints!! Budget friendly and amazing food. Will definitely go with this catering for events here on.",
  //     rating: 5
  //   },
  //   {
  //     id: 4,
  //     name: "PRITI MISHRA",
  //     review: "I got to know about AMDDAS from one of my friend. I was not assured how the service will be. But the day of function all my friends and relatives liked the food and asked contact for AMDDAS. The food was very tasty, hygienic and very well decorated. Staff was so helping and professional. As my friends were happy I am giving 5 star. Most recommended catering in terms of quality.",
  //     rating: 5
  //   },
  //   {
  //     id: 5,
  //     name: "MADHUR SEXENA",
  //     review: "We ordered breakfast, lunch & dinner for 20+ people for couple for days for a religious ceremony at home. The food was excellent and delivered on time as per our menu. We had asked for low oil low spices food and it was exactly like that. Guests loved the food.",
  //     rating: 5
  //   },
  //   {
  //     id: 6,
  //     name: "GURAV SINGHAI",
  //     review: "Great food and service quality ruined by consistently poor time management - arrives 45+ minutes late without communication, causing guests to leave events early.",
  //     rating: 3
  //   }
  // ];

//   // Auto slider every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) =>
//         prev === testimonials.length - 1 ? 0 : prev + 1
//       );
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   // Handle manual dot click
//   const handleDotClick = (index) => {
//     setCurrentIndex(index);
//   };

//   const renderStars = (rating) => {
//     return Array.from({ length: 5 }, (_, index) => (
//       <FaStar
//         key={index}
//         className="star"
//         style={{ color: index < rating ? '#ffd700' : '#ccc' }}
//       />
//     ));
//   };

//   return (
//     <div className="testimonial-container">
//       <div className="testimonial-header">
//         <h1 className="testimonial-title">
//           TESTIMONIAL <span className="highlight">REVIEWS</span>
//         </h1>
//         <div className="header-line"></div>
//         <p className="header-subtitl">
//           Discover what our customers say about their AMDDAS experience
//         </p>
//       </div>

//       <div className="testimonial-grid">
//         {testimonials.map((t, index) => (
//           <div
//             key={t.id}
//             className={`testimonial-item ${index === currentIndex ? 'active' : ''}`}
//           >
//             <div className="testimonial-stars">{renderStars(t.rating)}</div>
//             <p className="testimonial-text">"{t.review}"</p>
//             <div className="customer-info">
//               <h4 className="customer-name">{t.name}</h4>
//             </div>
//           </div>
//         ))}

//         {/* Navigation Dots */}
//         <div className="testimonial-dots">
//           {testimonials.map((_, index) => (
//             <div
//               key={index}
//               className={`dot ${index === currentIndex ? 'active' : ''}`}
//               onClick={() => handleDotClick(index)}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="see-more-container">
//         <a
//           href="https://www.google.com/search?q=AMDDAS+FOODS+PVT+LTD+Reviews"
//           className="see-more-btn"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           SEE MORE REVIEWS
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;




import React, { useState, useEffect, useRef } from 'react';
import './Testimonial.css';
import { FaStar } from 'react-icons/fa';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(0); // store swipe start X
  const endX = useRef(0);

   const testimonials = [
    {
      id: 1,
      name: "RANDHIR KUMAR",
      designation: "",
      review: "I recently booked AMDDAS FOODS for my housewarming ceremony, and I'm extremely happy with their service. The food was delicious, well-prepared, and appreciated by all our guests. The staff was professional, punctual, and very courteous. Everything was managed smoothly without any hassle. Highly recommended for any family function or event!",
      rating: 5
    },
    {
      id: 2,
      name: "RITESH SINHA",
      designation: "",
      review: "We chose AMDDAS Food to cater my nephew's birthday, and it was a fantastic decision. The food was delicious, served hot, and enjoyed by all our guests. Everyone appreciated the great taste. I highly recommend AMDDAS Food for catering needs!",
      rating: 4
    },
    {
      id: 3,
      name: "SHEETAL DIXIT",
      designation: "",
      review: "Extremely glad I went with Amddas catering for a small family get together for Diwali. We had arranged for live chats for 3 days along with breakfast, lunch and dinner for about 15 people. Got a lot of praises from the family about the tasty food. No complaints!! Budget friendly and amazing food. Will definitely go with this catering for events here on.",
      rating: 5
    },
    {
      id: 4,
      name: "PRITI MISHRA",
      designation: "",
      review: "I got to know about AMDDAS from one of my friend. I was not assured how the service will be. But the day of function all my friends and relatives liked the food and asked contact for AMDDAS. The food was very tasty, hygienic and very well decorated. Staff was so helping and professional. As my friends were happy I am giving 5 star. Most recommended catering in terms of quality.",
      rating: 5
    },
    {
      id: 5,
      name: "MADHUR SEXENA",
      designation: "",
      review: "We ordered breakfast, lunch & dinner for 20+ people for couple for days for a religious ceremony at home. The food was excellent and delivered on time as per our menu. We had asked for low oil low spices food and it was exactly like that. Guests loved the food.",
      rating: 5
    },
    {
      id: 6,
      name: "GURAV SINGHAI",
      designation: "",
      review: "Great food and service quality ruined by consistently poor time management - arrives 45+ minutes late without communication, causing guests to leave events early.",
      rating: 3
    }
  ];

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Handle swipe start
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  // Handle swipe end
  const handleTouchEnd = (e) => {
    endX.current = e.changedTouches[0].clientX;
    if (startX.current - endX.current > 50) {
      nextSlide(); // swipe left
    } else if (endX.current - startX.current > 50) {
      prevSlide(); // swipe right
    }
  };

  // Handle mouse drag
  const handleMouseDown = (e) => {
    startX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    endX.current = e.clientX;
    if (startX.current - endX.current > 50) {
      nextSlide(); // drag left
    } else if (endX.current - startX.current > 50) {
      prevSlide(); // drag right
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className="star"
        style={{ color: index < rating ? '#ffd700' : '#ccc' }}
      />
    ));
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-header">
        <h1 className="testimonial-title">
         Testimonials
          {/* //<span className="highlight">REVIEWS</span> */}
        </h1>
        <div className="header-line"></div>
        <p className="header-subtitl">
           ""discover what our customers have to say about AMDDAS foods""
        </p>
      </div>

      <div
        className="testimonial-grid"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {testimonials.map((t, index) => (
          <div
            key={t.id}
            className={`testimonial-item ${index === currentIndex ? 'active' : ''}`}
          >
            <div className="testimonial-stars">{renderStars(t.rating)}</div>
            <p className="testimonial-text">"{t.review}"</p>
            <div className="customer-info">
              <h4 className="customer-name">{t.name}</h4>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>

      <div className="see-more-container">
        <a
          href="https://www.google.com/search?sca_esv=a5069341141d07fa&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E-FEWkJ58jyWJ0N7SmszMxE4o7qtBfHgCF_P7UNBoRlvzMB3adXzBYFW5IgkZBw5hY_ofxeeYO8zJngHku9UOmzrxUEP8QrN6YoLBMCm-NsTMzFlqQ%3D%3D&q=AMDDAS+FOODS+PVT+LTD+Reviews&sa=X&ved=2ahUKEwirlryI4MWOAxVV7zgGHTR_J3gQ0bkNegQIHBAE&biw=1440&bih=778&dpr=1" 
          className="see-more-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          SEE MORE REVIEWS
        </a>
      </div>
    </div>
  );
};

export default Testimonial;
