import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      {/* Header Section */}
      <div className="header">
        <h1>Contact Us</h1>
      </div>

      {/* Form Section */}
      <div className="form-section">
        <h2>LET US START TALKING</h2>
        <p>Fill up this so that we can know more about you and your needs</p>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Company" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address*" required />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Phone*" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Location (City, State)" />
          </div>
          <div className="form-group">
            <select required>
              <option value="">Services</option>
              <option value="Service 1">Service 1</option>
              <option value="Service 2">Service 2</option>
            </select>
          </div>
          <div className="form-group">
            <input type="number" placeholder="No. of Employees" />
          </div>
          <div className="form-group">
            <textarea placeholder="Message"></textarea>
          </div>
          <div className="form-group recaptcha">
            <input type="checkbox" required />
            <label>I’m not a robot</label>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
