

// import React from 'react';
// import './Festivals.css'; // Optional for styling

// const Festivals = () => {
//   return (
//     <div className="festivals-page">
//       {/* Banner Section */}
//       <div className="banner">
//         <img src="/images/ganapati-banner.jpg" alt="Ganesh Chaturthi Banner" className="banner-img" />
//         <h1 className="banner-text">Happy Ganesh Chaturthi From AMDDAS</h1>
//       </div>

//       {/* Content Section (like screenshot) */}
//       <div className="festival-section">
//         <div className="text-box">
//           <h2>Community Festivals</h2>
//           <p>
//             At AMDDAS FOODS PVT LTD, we know that festivals are a time to come together with family and friends, sharing good food and great memories.
//             We offer specialized services for all major celebrations, including Diwali, Holi, Eid, Christmas, and more.
//             Our team is passionate about delivering authentic, traditional dishes that honor the spirit of the season.
//           </p>
//           <p>
//             From rich sweets and delicacies for Diwali to hearty meals for Christmas, we prepare every dish with love and attention to detail.
//             We cater to specific festival needs, offering prasadam, live counters, and eco-friendly serving options.
//             Our chefs use only fresh ingredients to create meals that are not only delicious but also hygienic and safe.
//           </p>
//           <p>
//             Celebrate your festivals with AMDDAS, where every meal is a blessing.
//           </p>
//         </div>
//         <div className="image-box">
//           <img src="/images/ganesha-logo-removebg.png" alt="Community Festival" className="festival-img" />
//         </div>
//       </div>
//        {/* <div className="offer-section">
//         <div className="offer-background">
//           <img src="/images/ganesh-offer.jpg" alt="Ganesh Festival Special Offer" className="offer-img" />
//         </div>
//         <div className="offer-overlay"></div>
//       </div> */}
//     </div>
//   );
// };

// export default Festivals;

// src/Components/Festivals/Festivals.jsx

import React from 'react';
import './Festivals.css'; // Optional for styling
import Offers from './Offers';

const Festivals = () => {
  return (
    <div className="festivals-page">
      {/* Banner Section */}
      <div className="banner">
        <img src="/images/ganapati-banner.jpg" alt="Ganesh Chaturthi Banner" className="banner-img" />
        <div className="banner-content">
          <h3 className="festival-title">Ganpati Feast Fest</h3>
          <h1 className="banner-text">Happy Ganesh Chaturthi From AMDDAS</h1>
          <div className="offer-button">
            Get 30% OFF
          </div>
        </div>
      </div>

      {/* Content Section (like screenshot) */}
      <div className="festival-section">
        <div className="text-box">
          <h2>Community Festivals</h2>
          <p>
            At AMDDAS FOODS PVT LTD, we know that festivals are a time to come together with family and friends, sharing good food and great memories.
            We offer specialized services for all major celebrations, including Diwali, Holi, Eid, Christmas, and more.
            Our team is passionate about delivering authentic, traditional dishes that honor the spirit of the season.
          </p>
          <p>
            From rich sweets and delicacies for Diwali to hearty meals for Christmas, we prepare every dish with love and attention to detail.
            We cater to specific festival needs, offering prasadam, live counters, and eco-friendly serving options.
            Our chefs use only fresh ingredients to create meals that are not only delicious but also hygienic and safe.
          </p>
          <p>
            Celebrate your festivals with AMDDAS, where every meal is a blessing.
          </p>
        </div>
        <div className="image-box">
          <img src="/images/ganesha-logo-removebg.png" alt="Community Festival" className="festival-img" />
        </div>
      </div>
      <Offers/>
      
    </div>

  );
};

export default Festivals;