// src/Components/Cnfpassword.jsx

import React, { useState } from 'react';
import '../Styles/cnf.css'; // Ensure this CSS includes styles for the popup
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import AutoTyping from './AutoTyping'; // Import AutoTyping if used
import TextField from '@mui/material/TextField';
import { port } from '../port/portno.js';

function Cnfpassword() {
  const [password, setPassword] = useState(''); // State for storing the new password
  const [confirmPassword, setConfirmPassword] = useState(''); // State for confirming the new password
  const [error, setError] = useState(''); // State for handling errors
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const [popupMessage, setPopupMessage] = useState(''); // State for dynamic popup messages

  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email; // Get email passed from the previous page
  const otp = location.state?.otp; // Get OTP passed from the previous page

  const texts = [
    'Confirm your password to complete the reset process.',
  ];

  // Regular expression for password validation
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+{};:,<.>]).{6,}$/;

  // Handle form submission to reset the password
  const handleResetPassword = async (e) => {
    e.preventDefault();

    // Reset previous errors
    setError('');
    setPopupMessage('');

    // Check if passwords match
    if (password !== confirmPassword) {
      const message = 'Passwords do not match.';
      setError(message);
      setPopupMessage(message);
      setShowPopup(true);
      return;
    }

    // Validate password
    if (!passwordRegex.test(password)) {
      const message = 'Password must be at least 6 characters long and include at least one uppercase letter, one number, and one special character.';
      setError('Password does not meet the required criteria.');
      setPopupMessage(message);
      setShowPopup(true);
      return;
    }

    try {
      // Prepare the request data
      const data = {
        email: email, // Pass email
        otp: otp, // Pass OTP received from the previous page
        newPassword: password, // Pass new password
      };

      // API request configuration
      const config = {
        method: 'post',
        url: `${port}/auth/reset-password`, // Correct API URL
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };

      // Make API request to reset password
      const response = await axios.request(config);

      if (response.status === 200) {
        // If successful, display popup and navigate to login page
        setError(''); // Clear any previous error messages
        setPopupMessage('Your password has been changed successfully.');
        setShowPopup(true);

        // Optionally, navigate after a short delay to allow users to read the popup
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        const message = 'Failed to reset password. Please try again.';
        setError(message);
        setPopupMessage(message);
        setShowPopup(true);
      }
    } catch (error) {
      // Log error for debugging
      console.error('Error resetting password:', error);

      let message = 'An error occurred while resetting the password. Please try again.';
      if (error.response?.status === 400) {
        message = 'Invalid OTP or email.';
      } else if (error.response?.status === 500) {
        message = 'Server error. Please try again later.';
      }
      setError(message);
      setPopupMessage(message);
      setShowPopup(true);
    }
  };

  return (
    <div className="cnf-container">
      <div className="cnf-left">
        <div className="cnf-intro">
          <p style={{ marginTop: "10px" }}>
            <AutoTyping texts={texts} speed={100} delay={1500} />
          </p>
        </div>
      </div>
      <div className="cnf-right">
        <div className="cnf-rightLogo">
          <img src="./images/amd.png" alt="Amddas Foods Logo" />
        </div>
        <h2>Hello, Welcome to</h2>
        <h2>
          <span>Amddas Foods</span>
        </h2>

        {/* Form for resetting password */}
        <form onSubmit={handleResetPassword} className="cnf-form">
          {/* Input for new password */}
          <TextField
            id="outlined-password"
            label="New Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="cnf-textfield"
            helperText="At least 6 characters, including uppercase, number, and symbol."
          />
          <br />

          {/* Input for confirming the new password */}
          <TextField
            id="outlined-confirm-password"
            label="Confirm Password"
            variant="outlined"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="cnf-textfield"
          />
          <br />

          {/* Error message */}
          {error && <p className="cnf-error">{error}</p>}

          {/* Submit button */}
          <div className="cnf-but">
            <button type="submit" className="cnf-btn">
              Done
            </button>
          </div>
        </form>

        {/* Popup Overlay */}
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup">
              <p>{popupMessage}</p>
              <button onClick={() => setShowPopup(false)} className="popup-close-btn">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cnfpassword;
