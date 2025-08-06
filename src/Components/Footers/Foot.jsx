// import React, { useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// import '../Styles/foot.css';

// import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaPhone } from 'react-icons/fa';

// import { FaXTwitter } from "react-icons/fa6";
// import { MdEmail } from 'react-icons/md';
// import { IoLocationSharp } from 'react-icons/io5';

// export default function Footer() {
//     const year = new Date().getFullYear();
//     const location = useLocation();

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [location]);

//     return (
//         <footer className="footer">
//             <div className="footer-container">
//                 <div className="footer-grid">
                            
//                     <div className="footer-logo">
//                         <Link to="/" className="logo-link">
//                             <img
//                                 src="./images/amd.png" 
//                                 className="logo-image"
//                                 alt="Amddas Foods Logo"
//                             />
//                         </Link>
//                         <p className="gstin">
//                             Amddas Foods specializes in delivering fresh, delicious meals to companies, offering convenient, nutritious, and high-quality food options to keep employees satisfied and energized throughout the day.
//                         </p>
//                     </div>
                                  
//                     <div className="footer-connect">
//                         <h2>Connect with Us</h2>
//                         <div className="social-icons">
//                             <Link className="social-icon"><FaInstagram style={{ color: 'red' }} /></Link>
//                             <Link className="social-icon"><FaFacebookF style={{ color: 'blue' }} /></Link>
//                             <Link className="social-icon"><FaYoutube style={{ color: 'red' }} /></Link>
//                         </div>
//                         <div className="contact-infoo">
//                             <Link to={'mailto:info@amddas.net'}>{<MdEmail style={{ fontSize: "30px", marginRight: "10px" }} />} info@amddas.net</Link>
//                         </div>
//                         <div className="location">
//                             <Link to={'https://maps.app.goo.gl/fYZzn7KQt2BfN2us5'}>
//                                 <IoLocationSharp style={{ fontSize: "30px", marginRight: "10px" }} />
//                                 AMDDAS FOODS PVT ltd SY NO : 67, SEEGEHALLI VILLAGE, BIDARAHALLI HOBLI BENGALURU EAST TALUK, BANGALORE-67
//                             </Link>
//                         </div>
//                     </div>
                                      
//                     <div className="footer-links">
//                         <h2>Important Links</h2>
//                         <ul>
//                             <li><Link to="/privacy-policy">Privacy Policy</Link></li>
//                             <li><Link to="/privacy-policy">Terms & Conditions</Link></li>
//                         </ul>
//                         <div className="phone-number">
//                             <Link to={'tel:+919632764963'}>
//                                 <FaPhone style={{ fontSize: "20px", marginRight: "10px" }} />
//                                 +91-9632764963
//                             </Link>
//                         </div>
//                     </div>
//                 </div>

//                 <hr className="footer-divider" />

//                 <div className="footer-bottom">
//                     <p>
//                         copyright © {year} Designed by{" "}
//                         <a href="https://sugaam.in " target="_blank" style={{ color: "#000", textDecoration: "none" }}>Sugaam.in</a> All Rights Reserved
//                     </p>
//                 </div>
//             </div>
//         </footer>
//     );
// }

import React from 'react';
import { Link } from 'react-router-dom';

import './foot.css';

import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                            
                    <div className="footer-logo">
                        <Link to="/" className="logo-link">
                            <img
                                src="./images/amd.png" 
                                className="logo-image"
                                alt="Amddas Foods Logo"
                            />
                        </Link>
                        <p className="gstin">
                            Amddas Foods specializes in delivering fresh, delicious meals to companies, offering convenient, nutritious, and high-quality food options to keep employees satisfied and energized throughout the day.
                        </p>
                    </div>
                                      
                    <div className="footer-links">
                        <h2>Important Links</h2>
                        <ul>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/events">Events</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/privacy-policy">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                                  
                    <div className="footer-connect">
                        <h2>Connect with Us</h2>
                        <div className="contact-infoo">
                            <Link to={'mailto:info@amddas.net'}>
                                <MdEmail style={{ fontSize: "24px", marginRight: "10px" }} />
                                info@amddas.net
                            </Link>
                        </div>
                        <div className="location">
                            <Link to={'https://maps.app.goo.gl/fYZzn7KQt2BfN2us5'}>
                                <IoLocationSharp style={{ fontSize: "24px", marginRight: "10px", marginTop: "2px", flexShrink: 0 }} />
                              AMDDAS Foods Pvt Ltd <br /> Sy No: 67,
                              Seegehalli Village, <br /> Bidarahalli Hobli,
                                Bengaluru, <br /> East Taluk, Bangalore-67

                            </Link>
                            <div className="address-mobile">
                                <Link to={'tel:+919632764963'}>
                                    <FaPhone style={{ fontSize: "18px", marginRight: "8px" }} />
                                    +91-9632764963
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <hr className="footer-divider" /> */}

                <div className="footer-bottom">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                        <span>
                            copyright © {year} Designed by{" "}
                            <a href="https://sugaam.in" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
                                Sugaam.in
                            </a> All Rights Reserved
                        </span>
                        <span>|</span>
                        <Link className="social-icon">
                            <FaInstagram />
                        </Link>
                        <span>|</span>
                        <Link className="social-icon">
                            <FaFacebookF />
                        </Link>
                        <span>|</span>
                        <Link className="social-icon">
                            <FaYoutube />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}