


// import React from "react";
// import './Mission.css';
// import { useNavigate } from "react-router-dom";

// const Mission = () => {
//   const navigate = useNavigate();
  
//   const ourpage = () => {
//     navigate('/our-mission')
//   }

//   return (
//     <div className="Our-mission-container">
//       {/* Left Side - Image */}
//       <div className="Our-mission-image">
//         <img 
//           src="./images/mission-img.jpg" 
//           alt="Supply Chain - Chef preparing food"
//           className="mission-image"
//         />
//       </div>
      
//       {/* Right Side - Content */}
//       <div className="Our-mission-content">
//         <h2 className="Our-mission-title">Our Mission</h2>
//         <p className="Our-mission-description">
//         At AMDDAS FOODS PVT LTD, our mission is to redefine corporate dining and events through exceptional quality, customized culinary solutions, and a commitment to reliability, hygiene, and customer satisfaction. We aim to create lasting impressions by blending flavor with flawless service, ensuring every event is a success.
//         </p>
//         {/* <button onClick={ourpage} className="Our-mission-button">
//           READ MORE
//         </button> */}
//       </div>
//     </div>
//   );
// };

// export default Mission;

import React from "react";
import './Mission.css';
import { useNavigate } from "react-router-dom";

const Mission = () => {
  const navigate = useNavigate();
  
  const ourpage = () => {
    navigate('/our-mission')
  }

  return (
    <div className="Our-mission-container">
      {/* Left Side - Image with Dramatic Animation */}
      <div className="Our-mission-image slide-in-left">
        <img 
          src="./images/mission-img.jpg" 
          alt="Supply Chain - Chef preparing food"
          className="mission-image"
        />
      </div>
      
      {/* Right Side - Content with Staggered Animations */}
      <div className="Our-mission-content">
        <h2 className="Our-mission-title fade-in-right">Our Mission</h2>
        <p className="Our-mission-description fade-in-right stagger-1">
        At AMDDAS FOODS PVT LTD, our mission is to redefine corporate dining and events through exceptional quality, customized culinary solutions, and a commitment to reliability, hygiene, and customer satisfaction. We aim to create lasting impressions by blending flavor with flawless service, ensuring every event is a success.
        </p>
        {/* <div className="vision-highlight slide-in-left stagger-1">
          <span className="highlight-text">Excellence • Innovation • Trust</span>
        </div> */}
      </div>
    </div>
  );
};

export default Mission;