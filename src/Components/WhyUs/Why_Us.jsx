// import React from 'react';
// import './Why_Us.css';

// const Why_Us = () => {
//   return (
//     <>
//       {/* Banner Section */}
//       <div className="banner-section-why-us">
//         <h1 className="banner-title-why-us">Why Choose AMDDAS Foods</h1>
//       </div>

//       {/* Content Section */}
//       <div className="why-us-content">
//         <div className="intro-section">
//           <h2 className="intro-heading">Few best practices which is helping us grow....</h2>
//         </div>

//         <div className="practices-section">
//           <div className="practice-block">
//             <h3 className="practice-title">Risk Management Standards</h3>
//             <ul className="practice-list">
//               <li>Public Liability Policy is issued per site where our food is being supplied/consumed.</li>
//               <li>
//               All medical expense covered in case of hospitalization caused due the Food poisoning, body injury or property
//               </li>
//               <li>damage caused by AMDDAS FOODs directly or indirectly.</li>
//               <li>
//                 Daily food samples are collected & stored for 72 Hrs. to prove false food poisoning claims reported otherwise.
//                 <ul className="sub-list">
//                   <li>** NB – Based on client requirement.</li>
//                 </ul>
//               </li>
//               <li>Strictly GST complaint we along with updated Ledger and bank records. Regular on time Tax return filing done.</li>
//             </ul>
//           </div>

//           <div className="practice-block">
//             <h3 className="practice-title">Quality standard</h3>
//             <ul className="practice-list">
//               <li>Food it cooked in a very hygienic environment under constant quality controlled processes.</li>
//               <li>Vegetables are procured twice/week for freshness from authorized Distributor (Qtrly Pesticide residual test
//                 done) </li>
//               <li>We undergo water testing from Eurofins every quarter or on need basis. (Payable by client) </li>
//               <li>We undergo food testing from Vimta Labs every quarter or on need basis (Payable by client) </li>
//               <li>Food tasting done daily before moving it to dispatching/packaging area. </li>
//               <li>Hoffman Insulated boxes are used for packaging/transportation which keeps food hot and fresh for 8-10 hrs. </li>
//               <li>Food is transported in covered vehicles at all given point of time. </li>

//             </ul>
//           </div>

//           <div className="practice-block">
//             <h3 className="practice-title">Manufacturing Unit Standards</h3>
//             <ul className="practice-list">
//               <li>HACCP (Hazard Analysis and Critical Control Points) standards met.</li>
//               <li>Segregated Veg and Non-Veg cooking & storage sections. </li>
//               <li>Gas bank located outside the kitchen. Fire extinguishers installed at all strategic locations.</li>
//               <li>Restricted access with 24/7 surveillance inside and outside the manufacturing areas. </li>
//               <li>Every weekend deep cleaning is done throughout the facility apart from daily cleaning post cooking.</li>
//               <li>Pest control done every week. </li>
//               <li>24/7 power back up for seamless execution of operations. </li>

//             </ul>
//           </div>

//           <div className="practice-block">
//             <h3 className="practice-title">Employee Standard</h3>
//             <ul className="practice-list">
//             <li>All employees undergo quarterly Medical Fitness Test clearance while in service in AMDDAS FOODS. </li>
//             <li>All staff have segregated dress code based on their job roles. </li>
//             <li>All shoes are kept outside and the staff and visitors move around with kitchen shoes for in-house usage only. </li>
//             <li>PF & ESI for all permanent employees done. </li>
//             <li>Company provided staff quarters adjacent to the Manufacturing unit to avoid hassle free operation. </li>

//             </ul>
//           </div>

//           <div className="practice-block">
//             <h3 className="practice-title">Certified Kitchen</h3>
//             <ul className="practice-list">
//               <li>FSSAI Cerificate. </li>
//               <li>Food Testing Report. </li>
//               <li>MSME Udhyam Certificate. </li>
//               <li>Pest Control Certificate. </li>
//               <li>Water Testing Report. </li>

//             </ul>
//           </div>

//           {/* <div className="practice-block">
//             <h3 className="practice-title">Sustainability Practices</h3>
//             <ul className="practice-list">
//               <li>Eco-friendly packaging and waste management systems.</li>
//               <li>Energy-efficient kitchen equipment and operations.</li>
//               <li>Local sourcing to reduce carbon footprint.</li>
//               <li>Water conservation and recycling initiatives.</li>
//             </ul>
//           </div> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Why_Us;

import React from 'react';
import './Why_Us.css';

const sections = [
  {
    title: "Risk Management Standards",
    image: "/images/Riskmanagment.jpg",
    points: [
      "Public Liability Policy is issued per site where our food is being supplied/consumed.",
      "All medical expense covered in case of hospitalization caused due the Food poisoning, body injury or property",
      "damage caused by AMDDAS FOODs directly or indirectly.",
      "Daily food samples are collected & stored for 72 Hrs. to prove false food poisoning claims reported otherwise.",
      "** NB – Based on client requirement.",
      "Strictly GST compliant along with updated Ledger and bank records. Regular on-time Tax return filing done.",
    ]
  },
  {
    title: "Quality Standard",
    image: "/images/quality.jpg",
    points: [
      "Food is cooked in a very hygienic environment under constant quality controlled processes.",
      "Vegetables are procured twice/week for freshness from authorized Distributor (Qtrly Pesticide residual test done)",
      "We undergo water testing from Eurofins every quarter or on need basis. (Payable by client)",
      "We undergo food testing from Vimta Labs every quarter or on need basis (Payable by client)",
      "Food tasting done daily before moving it to dispatching/packaging area.",
      "Hoffman Insulated boxes are used for packaging/transportation which keeps food hot and fresh for 8–10 hrs.",
      "Food is transported in covered vehicles at all given point of time.",
    ]
  },
  {
    title: "Manufacturing Unit Standards",
    image: "/images/Manufacturing.jpg",
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
    image: "/images/employee.jpg",
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
    image: "/images/standard4.jpg",
    points: [
      "FSSAI Certificate.",
      "Food Testing Report.",
      "MSME Udhyam Certificate.",
      "Pest Control Certificate.",
      "Water Testing Report.",
    ]
  }
];

const Why_Us = () => {
  return (
    <div className="whyus-wrapper">
      <div className="banner-section-why-us">
        <h1 className="banner-title-why-us">Why Choose AMDDAS Foods</h1>
      </div>

      <div className="whyus-container">
        {sections.map((section, index) => (
          <div className="whyus-section" key={index}>
            <div className="whyus-text">
              <h2>{section.title}</h2>
              <ul>
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="whyus-image">
              <img src={section.image} alt={section.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why_Us;
