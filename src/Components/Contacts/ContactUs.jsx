// import React from "react";
// import "./ContactUs.css";

// const ContactUs = () => {
//   return (
//     <div className="contact-us">
//       {/* Header Section */}
//       <div className="header">
//         <h1>Contact Us</h1>
//       </div>

//       {/* Form Section */}
//       <div className="form-section">
//         <h2>LET US START TALKING</h2>
//         <p>Fill up this so that we can know more about you and your needs</p>
//         <form className="contact-form">
//           <div className="form-group">
//             <input type="text" placeholder="Name" required />
//           </div>
//           <div className="form-group">
//             <input type="text" placeholder="Company" />
//           </div>
//           <div className="form-group">
//             <input type="email" placeholder="Email Address*" required />
//           </div>
//           <div className="form-group">
//             <input type="tel" placeholder="Phone*" required />
//           </div>
//           <div className="form-group">
//             <input type="text" placeholder="Location (City, State)" />
//           </div>
//           <div className="form-group">
//             <select required>
//               <option value="">Services</option>
//               <option value="Service 1">Service 1</option>
//               <option value="Service 2">Service 2</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <input type="number" placeholder="No. of Employees" />
//           </div>
//           <div className="form-group">
//             <textarea placeholder="Message"></textarea>
//           </div>
//           <div className="form-group recaptcha">
//             <input type="checkbox" required />
//             <label>I’m not a robot</label>
//           </div>
//           <button type="submit">Send</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    message: '',
    isRobot: false,
    access_key: 'f2b57264-d393-4366-9705-a55d53afe2c0'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Corporate Catering",
    "Corporate Event Management",
    "Cafeteria Management", 
    "Birthday Celebrations",
    "Weddings & Private Parties"
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number should be 10 digits';
    }
    
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }
    
    if (!formData.isRobot) {
      newErrors.isRobot = 'Please verify you are not a robot';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Submit form data to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      
      if (result.success) {
        // Reset form after successful submission
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          location: '',
          service: '',
          message: '',
          isRobot: false,
          access_key: 'f2b57264-d393-4366-9705-a55d53afe2c0'
        });
        
        alert('Thank you! Your message has been sent successfully.');
      } else {
        throw new Error('Form submission failed');
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-us">
      {/* Header Section */}
      <div className="header">
        {/* <h1>Contact Us</h1> */}
        <p className="header-subtitle"> we are delighted to have you on board and looking forward to serve you, please fill the form below and we will reach out to you as soon as possible</p>
      </div>

      {/* Form Section */}
      <div className="form-section">
        <div className="form-container">
          <h2>LET US START TALKING</h2>
          <p className="form-description">
          Get in touch with AMDDAS Foods for all your catering needs
          </p>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Hidden access key field */}
            <input type="hidden" name="access_key" value="f2b57264-d393-4366-9705-a55d53afe2c0" />
            
            <div className="form-row">
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name*" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <input 
                  type="text" 
                  name="company"
                  placeholder="Company" 
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address*" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone*" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input 
                  type="text" 
                  name="location"
                  placeholder="Location (City, State)" 
                  value={formData.location}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className={errors.service ? 'error' : ''}
                >
                  <option value="">Select Service*</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
                {errors.service && <span className="error-message">{errors.service}</span>}
              </div>
            </div>

            <div className="form-group full-width">
              <textarea 
                name="message"
                placeholder="Message (Tell us about your requirements...)"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
              ></textarea>
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  name="isRobot"
                  checked={formData.isRobot}
                  onChange={handleInputChange}
                  className={errors.isRobot ? 'error' : ''}
                />
                <span className="checkmark"></span>
                I'm not a robot
              </label>
              {errors.isRobot && <span className="error-message">{errors.isRobot}</span>}
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
