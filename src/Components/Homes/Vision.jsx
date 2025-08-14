// import React from "react";
// import './Vision.css';

// const Vision = () => {
//   return (
//     <div className="vision-container">
//       {/* Left Side - Content */}
//       <div className="vision-content">
//         <h2 className="vision-title">Our Vision</h2>
//         <p className="vision-description">
//         To be India's most trusted and innovative partner in corporate catering and event dining, delivering excellence, taste, and memorable experiences at every table
//         </p>
//       </div>
      
//       {/* Right Side - Image */}
//       <div className="vision-image">
//         <img 
//           src="/images/story.jpg" 
//           alt="Amddas Foods Events - Catering Service"
//           className="vision-image-img"
//         />
//       </div>
//     </div>
//   );
// };

// export default Vision;
import React from "react";
import './Vision.css';

const Vision = () => {
  return (
    <div className="vision-container">
      {/* Left Side - Content with Staggered Animations */}
      <div className="vision-content">
        <h2 className="vision-title slide-in-left">Our Vision</h2>
        <p className="vision-description slide-in-left stagger-1">
        To be India's most trusted and innovative partner in corporate catering and event dining, delivering excellence, taste, and memorable experiences at every table, We strive to blend tradition with modern culinary artistry, creating menus that celebrate diversity and flavor.
        </p>
        {/* <div className="vision-highlight slide-in-left stagger-2">
          <span className="highlight-text">Excellence • Innovation • Trust</span>
        </div> */}
      </div>
      
      {/* Right Side - Image with Dramatic Animation */}
      <div className="vision-image fade-in-right">
        <img 
          src="/images/story.jpg" 
          alt="Amddas Foods Events - Catering Service"
          className="vision-image-img"
        />
      </div>
    </div>
  );
};

export default Vision;