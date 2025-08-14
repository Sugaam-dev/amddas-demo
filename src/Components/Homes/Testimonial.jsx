// import React from 'react';
// import './Testimonial.css';
// import { FaStar } from 'react-icons/fa';

// const Testimonial = () => {
//   const testimonials = [
//     {
//       id: 1,
//       name: "RANDHIR KUMAR",
//     //   designation: "HR Manager",
//       review: "I recently booked AMDDAS FOODS for my housewarming ceremony, and I’m extremely happy with their service. The food was delicious, well-prepared, and appreciated by all our guests. The staff was professional, punctual, and very courteous. Everything was managed smoothly without any hassle. Highly recommended for any family function or event!",
//       rating: 5
//     },
//     {
//       id: 2,
//       name: "RITESH SINHA",
//     //   designation: "Event Coordinator",
//       review: "We chose AMDDAS Food to cater my nephew's birthday, and it was a fantastic decision. The food was delicious, served hot, and enjoyed by all our guests. Everyone appreciated the great taste. I highly recommend AMDDAS Food for catering needs!",
//       rating: 4
//     },
//     {
//       id: 3,
//       name: "SHEETAL DIXIT",
//     //   designation: "Operations Head",
//       review: "Extremely glad I went with Amddas catering for a small family get together for Diwali. We had arranged for live chats for 3 days along with breakfast , lunch and dinner for about 15 people. Got a lot of praises from the family about the tasty food. No complaints!! Budget friendly and amazing food. Will definitely go with this catering for events here on.",
//       rating: 5
//     },
//     {
//       id: 4,
//       name: "PRITI MISHRA",
//     //   designation: "Office Manager",
//       review: "I got to know about AMDDAS from one of my friend. I was not assured how the service will be. But they day of function all my friends and relatives liked the food and asked contact for AMDDAS. The food was very tasty,hygienic and very well decorated. Staff was so helping and professional. As my friends were happy I am giving 5 star. Most recommended catering in terms of quality.",
//       rating: 5
//     },
//     {
//       id: 5,
//       name: "MADHUR SEXENA",
//     //   designation: "CEO",
//       review: "We ordered breakfast, lunch & dinner for 20+ people for couple for days for a religious ceremony at home. The food was excellent and delivered on time as per our menu. We had asked for low oil low spices food and it was exactly like that. Guests loved the food.",
//       rating: 5
//     },
//     {
//       id: 6,
//       name: "GURAV SINGHAI",
//     //   designation: "Admin Head",
//       review: "The food is excellent and deserves to be compared across any party size. They have good cutlery and serving utensils. The only downside is their time reliability, they are always late and don’t manage customer expectation, so recommendation is to track them 2-3 hours before the delivery time. I am forced to given them 3 start rating due to poor time management as the guests left without having food due to 45 min delay for a 2 hrs birthday party dinner.",
//       rating: 3
//     }
//   ];

//   const renderStars = (rating) => {
//     return Array.from({ length: 5 }, (_, index) => (
//       <FaStar
//         key={index}
//         className={index < rating ? 'star filled' : 'star'}
//       />
//     ));
//   };

//   return (
//     <div className="testimonial-container">
//       <div className="testimonial-header">
//         <h1 className="testimonial-title">
//           TESTIMONIAL <span className="highlight">REVIEWS</span>
//         </h1>
//       </div>

//       <div className="testimonial-grid">
//         {testimonials.map((testimonial) => (
//           <div key={testimonial.id} className="testimonial-card">
//             <div className="quote-icon">
//               <span>❝</span>
//             </div>
            
//             <div className="testimonial-content">
//               <p className="testimonial-text">
//                 {testimonial.review}
//               </p>
              
//               <div className="testimonial-footer">
//                 <div className="customer-info">
//                   <h4 className="customer-name">{testimonial.name}</h4>
//                   <p className="customer-designation">{testimonial.designation}</p>
//                 </div>
                
//                 <div className="rating">
//                   {renderStars(testimonial.rating)}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="see-more-container">
//         <a href="https://www.google.com/search?sca_esv=a5069341141d07fa&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E-FEWkJ58jyWJ0N7SmszMxE4o7qtBfHgCF_P7UNBoRlvzMB3adXzBYFW5IgkZBw5hY_ofxeeYO8zJngHku9UOmzrxUEP8QrN6YoLBMCm-NsTMzFlqQ%3D%3D&q=AMDDAS+FOODS+PVT+LTD+Reviews&sa=X&ved=2ahUKEwirlryI4MWOAxVV7zgGHTR_J3gQ0bkNegQIHBAE&biw=1440&bih=778&dpr=1" className="see-more-btn">
//             SEE MORE REVIEWS
//         </a>
//         </div>
//     </div>
//   );
// };

// export default Testimonial;

import React from 'react';
import './Testimonial.css';
import { FaStar } from 'react-icons/fa';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "RANDHIR KUMAR",
    //   designation: "HR Manager",
      review: "I recently booked AMDDAS FOODS for my housewarming ceremony, and I’m extremely happy with their service. The food was delicious, well-prepared, and appreciated by all our guests. The staff was professional, punctual, and very courteous. Everything was managed smoothly without any hassle. Highly recommended for any family function or event!",
      rating: 5
    },
    {
      id: 2,
      name: "RITESH SINHA",
    //   designation: "Event Coordinator",
      review: "We chose AMDDAS Food to cater my nephew's birthday, and it was a fantastic decision. The food was delicious, served hot, and enjoyed by all our guests. Everyone appreciated the great taste. I highly recommend AMDDAS Food for catering needs!",
      rating: 4
    },
    {
      id: 3,
      name: "SHEETAL DIXIT",
    //   designation: "Operations Head",
      review: "Extremely glad I went with Amddas catering for a small family get together for Diwali. We had arranged for live chats for 3 days along with breakfast , lunch and dinner for about 15 people. Got a lot of praises from the family about the tasty food. No complaints!! Budget friendly and amazing food. Will definitely go with this catering for events here on.",
      rating: 5
    },
    {
      id: 4,
      name: "PRITI MISHRA",
    //   designation: "Office Manager",
      review: "I got to know about AMDDAS from one of my friend. I was not assured how the service will be. But they day of function all my friends and relatives liked the food and asked contact for AMDDAS. The food was very tasty,hygienic and very well decorated. Staff was so helping and professional. As my friends were happy I am giving 5 star. Most recommended catering in terms of quality.",
      rating: 5
    },
    {
      id: 5,
      name: "MADHUR SEXENA",
    //   designation: "CEO",
      review: "We ordered breakfast, lunch & dinner for 20+ people for couple for days for a religious ceremony at home. The food was excellent and delivered on time as per our menu. We had asked for low oil low spices food and it was exactly like that. Guests loved the food.",
      rating: 5
    },
    {
      id: 6,
      name: "GURAV SINGHAI",
    //   designation: "Admin Head",
      review: "The food is excellent and deserves to be compared across any party size. They have good cutlery and serving utensils. The only downside is their time reliability, they are always late and don’t manage customer expectation, so recommendation is to track them 2-3 hours before the delivery time. I am forced to given them 3 start rating due to poor time management as the guests left without having food due to 45 min delay for a 2 hrs birthday party dinner.",
      rating: 3
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={index < rating ? 'star filled' : 'star'}
      />
    ));
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-header">
        <h1 className="testimonial-title">
          TESTIMONIAL <span className="highlight">REVIEWS</span>
        </h1>
          <div className="header-line"></div>
        <p className="header-subtitle">
          Discover what our customers say about their AMDDAS experience
        </p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="quote-icon">
              <span>❝</span>
            </div>
            
            <div className="testimonial-content">
              <p className="testimonial-text">
                {testimonial.review}
              </p>
              
              <div className="testimonial-footer">
                <div className="customer-info">
                  <h4 className="customer-name">{testimonial.name}</h4>
                  <p className="customer-designation">{testimonial.designation}</p>
                </div>
                
                <div className="rating">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="see-more-container">
        <a href="https://www.google.com/search?sca_esv=a5069341141d07fa&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E-FEWkJ58jyWJ0N7SmszMxE4o7qtBfHgCF_P7UNBoRlvzMB3adXzBYFW5IgkZBw5hY_ofxeeYO8zJngHku9UOmzrxUEP8QrN6YoLBMCm-NsTMzFlqQ%3D%3D&q=AMDDAS+FOODS+PVT+LTD+Reviews&sa=X&ved=2ahUKEwirlryI4MWOAxVV7zgGHTR_J3gQ0bkNegQIHBAE&biw=1440&bih=778&dpr=1" className="see-more-btn">
            SEE MORE REVIEWS
        </a>
        </div>
    </div>
  );
};

export default Testimonial;