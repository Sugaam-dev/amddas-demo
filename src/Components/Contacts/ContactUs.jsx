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
    "Corporate",
    "Educational Institute",
    "Hospitals",
    "Training", 
    "Weddings",
    "Birthday Parties",
    "Housewarming / Grihapravesh",
    "Anniversary Ceremonies",
    "Community Festivals",
    "Bhandara / Langar",
  ];

  const locations = [
    "Pune",
    "Bengaluru"
  ];

  // Enhanced email validation
  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Enhanced phone validation (Indian format)
  const isValidPhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/; // Indian mobile numbers start with 6-9 and have 10 digits
    return phoneRegex.test(phone.replace(/\D/g, ''));
  };

  // Format phone number as user types
  const formatPhoneNumber = (value) => {
    // Remove all non-digits
    const phoneNumber = value.replace(/\D/g, '');
    
    // Limit to 10 digits
    const limitedPhoneNumber = phoneNumber.slice(0, 10);
    
    return limitedPhoneNumber;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    let processedValue = value;

    // Special handling for phone number
    if (name === 'phone') {
      processedValue = formatPhoneNumber(value);
    }

    // Special handling for email (convert to lowercase and trim spaces)
    if (name === 'email') {
      processedValue = value.toLowerCase().trim();
    }

    // Special handling for name (only allow letters and spaces)
    if (name === 'name') {
      processedValue = value.replace(/[^a-zA-Z\s]/g, '');
    }

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : processedValue
    }));
    
    // Real-time validation and error clearing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Real-time validation feedback
    if (name === 'email' && processedValue && !isValidEmail(processedValue)) {
      setErrors(prev => ({
        ...prev,
        email: 'Please enter a valid email address'
      }));
    }

    if (name === 'phone' && processedValue && !isValidPhone(processedValue)) {
      setErrors(prev => ({
        ...prev,
        phone: 'Please enter a valid 10-digit mobile number'
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number starting with 6-9';
    }
    
    // Service validation
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    // Location validation
    if (!formData.location) {
      newErrors.location = 'Please select a location';
    }
    
    // Robot verification
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
        
        setErrors({}); // Clear all errors
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
        <p className="header-subtitle">We are delighted to have you on board and looking forward to serve you, please fill the form below and we will reach out to you as soon as possible</p>
      </div>

      {/* Form Section */}
      <div className="form-section">
        <div className="form-container">
          <h2>Looking Forward to Serve You</h2>
          <p className="form-description">
            Please fill the details below to get in touch with us
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
                  maxLength="50"
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
                  maxLength="100"
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
                  maxLength="100"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone* (10 digits)"
                  value={formData.phone}
                  onChange={handleInputChange}
                  maxLength="10"
                  pattern="[6-9]\d{9}"
                  title="Please enter a valid 10-digit mobile number starting with 6-9"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <select 
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                >
                  <option value="">Select Location*</option>
                  {locations.map((location, index) => (
                    <option key={index} value={location}>{location}</option>
                  ))}
                </select>
                {errors.location && <span className="error-message">{errors.location}</span>}
              </div>
              
              <div className="form-group">
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
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
                maxLength="500"
              ></textarea>
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
