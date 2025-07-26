import React from 'react';
import './Why_Us.css';

const Why_Us = () => {
  return (
    <>
      {/* Banner Section */}
      <div className="banner-section-why-us">
        <h1 className="banner-title-why-us">Why Choose Amddas Foods</h1>
      </div>

      {/* Content Section */}
      <div className="why-us-content">
        <div className="intro-section">
          <h2 className="intro-heading">Few best practices which is helping us grow....</h2>
        </div>

        <div className="practices-section">
          <div className="practice-block">
            <h3 className="practice-title">Risk Management Standards</h3>
            <ul className="practice-list">
              <li>Public Liability Policy is issued per site where our food is being supplied/consumed.</li>
              <li>
              All medical expense covered in case of hospitalization caused due the Food poisoning, body injury or property
              </li>
              <li>damage caused by AMDDAS FOODs directly or indirectly.</li>
              <li>
                Daily food samples are collected & stored for 72 Hrs. to prove false food poisoning claims reported otherwise.
                <ul className="sub-list">
                  <li>** NB – Based on client requirement.</li>
                </ul>
              </li>
              <li>Strictly GST complaint we along with updated Ledger and bank records. Regular on time Tax return filing done.</li>
            </ul>
          </div>

          <div className="practice-block">
            <h3 className="practice-title">Quality standard</h3>
            <ul className="practice-list">
              <li>Food it cooked in a very hygienic environment under constant quality controlled processes.</li>
              <li>Vegetables are procured twice/week for freshness from authorized Distributor (Qtrly Pesticide residual test
                done) </li>
              <li>We undergo water testing from Eurofins every quarter or on need basis. (Payable by client) </li>
              <li>We undergo food testing from Vimta Labs every quarter or on need basis (Payable by client) </li>
              <li>Food tasting done daily before moving it to dispatching/packaging area. </li>
              <li>Hoffman Insulated boxes are used for packaging/transportation which keeps food hot and fresh for 8-10 hrs. </li>
              <li>Food is transported in covered vehicles at all given point of time. </li>

            </ul>
          </div>

          <div className="practice-block">
            <h3 className="practice-title">Manufacturing Unit Standards</h3>
            <ul className="practice-list">
              <li>HACCP (Hazard Analysis and Critical Control Points) standards met.</li>
              <li>Segregated Veg and Non-Veg cooking & storage sections. </li>
              <li>Gas bank located outside the kitchen. Fire extinguishers installed at all strategic locations.</li>
              <li>Restricted access with 24/7 surveillance inside and outside the manufacturing areas. </li>
              <li>Every weekend deep cleaning is done throughout the facility apart from daily cleaning post cooking.</li>
              <li>Pest control done every week. </li>
              <li>24/7 power back up for seamless execution of operations. </li>

            </ul>
          </div>

          <div className="practice-block">
            <h3 className="practice-title">Employee Standard</h3>
            <ul className="practice-list">
            <li>All employees undergo quarterly Medical Fitness Test clearance while in service in AMDDAS FOODS. </li>
            <li>All staff have segregated dress code based on their job roles. </li>
            <li>All shoes are kept outside and the staff and visitors move around with kitchen shoes for in-house usage only. </li>
            <li>PF & ESI for all permanent employees done. </li>
            <li>Company provided staff quarters adjacent to the Manufacturing unit to avoid hassle free operation. </li>

            </ul>
          </div>

          <div className="practice-block">
            <h3 className="practice-title">Certified Kitchen</h3>
            <ul className="practice-list">
              <li>FSSAI Cerificate. </li>
              <li>Food Testing Report. </li>
              <li>MSME Udhyam Certificate. </li>
              <li>Pest Control Certificate. </li>
              <li>Water Testing Report. </li>

            </ul>
          </div>

          {/* <div className="practice-block">
            <h3 className="practice-title">Sustainability Practices</h3>
            <ul className="practice-list">
              <li>Eco-friendly packaging and waste management systems.</li>
              <li>Energy-efficient kitchen equipment and operations.</li>
              <li>Local sourcing to reduce carbon footprint.</li>
              <li>Water conservation and recycling initiatives.</li>
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Why_Us;