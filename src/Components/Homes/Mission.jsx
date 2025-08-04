// import React from "react";
// import './Mission.css';
// import { useNavigate } from "react-router-dom";

// const Mission = () => {
//     const navigate=useNavigate();
//     const ourpage=()=>{
//         navigate('/our-mission')
//     }
//   return (
//     <div className="Our-mission-container">
//       <h2 className="Our-mission-title">Mission & Vision</h2>
//       <p className="Our-mission-description">
//       Amddas Foods believes in the transformative power of food to enhance lives and health—physically, mentally, and spiritually. By prioritizing nutrition and well-being, we aim to foster improved health, greater happiness, and increased productivity.
//    </p>
//       <button onClick={ourpage} className="Our-mission-button">READ MORE</button>
//     </div>
//   );
// };

// export default Mission;

// import React from "react";
// import './Mission.css';
// import { useNavigate } from "react-router-dom";

// const Mission = () => {
//   const navigate = useNavigate();
  
//   const ourpage = () => {
//     navigate('/our-mission');
//   }

//   return (
//     <div className="mission-vision-container">
//       <div className="section-header">
//         <h2 className="main-title">Mission & Vision</h2>
//       </div>

//       {/* Mission Section */}
//       <div className="mission-section">
//         <div className="content-wrapper">
//           <h3 className="section-title">Our Mission</h3>
//           <p className="section-description">
//             At AMDDAS FOODS PVT LTD, our mission is to redefine corporate dining and events through exceptional quality, customized culinary solutions, and a commitment to reliability, hygiene, and customer satisfaction. We aim to create lasting impressions by blending flavor with flawless service, ensuring every event is a success.
//           </p>
//         </div>
//       </div>

//       {/* Vision Section */}
//       <div className="vision-section">
//         <div className="content-wrapper">
//           <h3 className="section-title">Our Vision</h3>
//           <p className="section-description">
//             To be India's most trusted and innovative partner in corporate catering and event dining, delivering excellence, taste, and memorable experiences at every table.
//           </p>
//         </div>
//       </div>

//       {/* Overall Description */}
//       {/* <div className="overall-description">
//         <p className="general-description">
//           Amddas Foods believes in the transformative power of food to enhance lives and health—physically, mentally, and spiritually. By prioritizing nutrition and well-being, we aim to foster improved health, greater happiness, and increased productivity.
//         </p>
//       </div> */}

//       <button onClick={ourpage} className="read-more-button">
//         READ MORE
//       </button>
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
      {/* Left Side - Image */}
      <div className="Our-mission-image">
        <img 
          src="./images/mission-img.jpg" 
          alt="Supply Chain - Chef preparing food"
          className="mission-image"
        />
      </div>
      
      {/* Right Side - Content */}
      <div className="Our-mission-content">
        <h2 className="Our-mission-title">Our Mission</h2>
        <p className="Our-mission-description">
        At AMDDAS FOODS PVT LTD, our mission is to redefine corporate dining and events through exceptional quality, customized culinary solutions, and a commitment to reliability, hygiene, and customer satisfaction. We aim to create lasting impressions by blending flavor with flawless service, ensuring every event is a success.
        </p>
        {/* <button onClick={ourpage} className="Our-mission-button">
          READ MORE
        </button> */}
      </div>
    </div>
  );
};

export default Mission;