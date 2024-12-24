import React from 'react'
import './contact.css'
import WritetoUs from './WritetoUs'
import Client from './Client'
import ContactUs from './ContactUs'
function Contact() {
  return (
    <div>
         <div className="banner-section-contact">
        <h1 className="banner-title-contact" style={{color:"white"}}> Contact Us</h1>
      </div>
      {/* <Client/> */}
      <WritetoUs/>
      {/* <ContactUs/> */}
    </div>
  )
}

export default Contact
