
import React from 'react';
import './Standards.css'; // replace with actual path
import { FaSchool, FaTools } from 'react-icons/fa'; // Optional icons

const Standards = () => {
  return (
    <section className="standards-section">
       <div className="section-title">
            <h2>Our <span>Standards</span></h2>
            <p>Excellence in every aspect of our food service operations</p>
          </div>
      <div className="standards-container">
        <div className="standard-card">
          <img src='/images/standard1.jpg' alt="Campus Hygiene" className="standard-img" />
          <div className="standard-info">
            <h3>Risk Management Standards</h3>
            <div className='standart-info-text'>
              <p>Public Liability Policy is issued per site where our food is being supplied/consumed. Strictly GST compliant with updated ledger and bank records. Regular on-time tax return filing done.</p>
            </div>
          </div>
        </div>
        <div className="standard-card">
          <img src='/images/standard2.jpg' alt="Building Utility Services" className="standard-img" />
          <div className="standard-info">
            <h3> Employee Standards</h3>
           <div className='standart-info-text'>
              <p>All employees undergo quarterly medical fitness test clearance while in service at AMDDAS Foods. All staff have segregated dress codes based on their job roles. Company-provided staff quarters adjacent to the manufacturing unit to ensure hassle-free operation.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="standards-container">
        <div className="standard-card">
          <img src='/images/standard3.jpeg' alt="Campus Hygiene" className="standard-img" />
          <div className="standard-info">
            <h3>Manufacturing Unit Standards</h3>
            <div className='standart-info-text'>
              <p>HACCP (Hazard Analysis and Critical Control Points) standards met. Segregated veg and non-veg cooking & storage sections. Gas bank located outside the kitchen. Fire extinguishers installed at all strategic locations.</p>
            </div>
          </div>
        </div>
        <div className="standard-card">
          <img src='/images/standard4.jpg' alt="Building Utility Services" className="standard-img" />
          <div className="standard-info">
            <h3> Certified Kitchen</h3>
           <div className='standart-info-text'>
              <p>Our kitchen is certified by food safety authorities and follows international hygiene protocols. Regular third-party audits ensure compliance with health department regulations. Temperature-controlled storage facilities maintain food quality and freshness at all times.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="standards-container">
        <div className="standard-card">
          <img src='/images/standard5.jpg' alt="Campus Hygiene" className="standard-img" />
          <div className="standard-info">
            <h3>Quality Standards</h3>
            <div className='standart-info-text'>
              <p>ISO 22000 food safety management system implementation. Stringent quality control measures at every stage of food preparation. Fresh ingredients sourced daily from verified suppliers. Regular taste testing and nutritional analysis of all menu items.</p>
            </div>
          </div>
        </div>
        {/* <div className="standard-card">
          <img src='/images/about-ser.jpg' alt="Building Utility Services" className="standard-img" />
          <div className="standard-info">
            <h3><FaTools className="icon" /> Certified Kitchen</h3>
           <div className='standart-info-text'>
              <p>Our kitchen is certified by food safety authorities and follows international hygiene protocols. Regular third-party audits ensure compliance with health department regulations. Temperature-controlled storage facilities maintain food quality and freshness at all times.</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Standards;
