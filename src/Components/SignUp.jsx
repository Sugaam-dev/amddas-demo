import React, { useState, useEffect } from 'react';
import '../Styles/signup.css';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { port } from '../port/portno.js';
import AutoTyping from './AutoTyping'; 
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

function SignUp() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const [popupMessage, setPopupMessage] = useState(""); // Dynamic popup message

  const navigate = useNavigate();

  // Regular expression for password validation
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+{};:,<.>]).{6,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset previous errors
    setError("");
    setSuccessMessage("");

    // Check if passwords match
    if (password !== confpassword) {
      setError("Passwords do not match!");
      setPopupMessage("Passwords do not match!");
      setShowPopup(true);
      return;
    }

    // Validate password
    if (!passwordRegex.test(password)) {
      setError("Password does not meet the required criteria.");
      setPopupMessage("Password must be at least 6 characters long and include at least one uppercase letter, one number, and one special character.");
      setShowPopup(true);
      return;
    }

    const email = `${username}@borgwarner.com`;

    const user = {
      email: email,
      name: name,
      password: password,
    };

    setIsLoading(true);
    try {
      const response = await axios.post(`${port}/register`, user);
      setSuccessMessage(response.data.message);
      setError("");
      navigate('/getotp', { state: { email: email } });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
        setPopupMessage(error.response.data.message);
      } else {
        console.error('Error registering user:', error);
        setError('User with this email already exists and is active.');
        setPopupMessage('User with this email already exists and is active.');
      }
      setShowPopup(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setError("");
  }, []);

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="intro">
          <div className="au">
            <p>
              <AutoTyping 
                texts={['A journey of flavors that speak to the soul and memories in every bite.']} 
                speed={100} 
                delay={1500}
              />
            </p>
          </div>
        </div>
      </div>
      <div className="login-right">
        <div className="rightLogo">
          <img src="./images/amd.png" alt="Amddas Foods Logo" />
        </div>

        <h2>Hello, Welcome to</h2>
        <h2><span>Amddas Foods</span></h2>

        <form onSubmit={handleSubmit}>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

          <div>
            <p style={{ color: 'gray', fontSize: '14px', marginBottom: '5px' }}>
              Note: The email domain is already set to <b>@borgwarner.com</b>. Please enter only your username.
            </p>
            <TextField 
              label="Email"
              variant="outlined"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === '@') {
                  e.preventDefault();
                  setPopupMessage('Please enter only the username. "@borgwarner.com" is already included in the email.');
                  setShowPopup(true); // Show popup when '@' is typed
                }
              }}
              required
              fullWidth
              margin="normal"
              InputProps={{
                endAdornment: <InputAdornment position="end">@borgwarner.com</InputAdornment>,
              }}
              placeholder="Enter email username"
            />
          </div>

          <TextField 
            label="Name" 
            variant="outlined" 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField 
            label="Password" 
            variant="outlined" 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
            margin="normal"
            helperText="At least 6 characters, including uppercase, number, and symbol."
          />
          <TextField 
            label="Confirm Password" 
            variant="outlined" 
            type="password"
            value={confpassword}
            onChange={(e) => setConfPassword(e.target.value)}
            required
            fullWidth
            margin="normal"
          />

          <div className="but">
            <button 
              type="submit" 
              className="signup-btn"
              disabled={isLoading}
            >
              {isLoading ? 'Signing up...' : 'Signup'}
            </button>
            <Link to='/login'>
              <button type="button" className="login-btn">Login</button>
            </Link>
          </div>
        </form>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup">
              <p>
                {popupMessage}
              </p>
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

export default SignUp;
