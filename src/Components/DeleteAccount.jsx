import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { logoutUser } from "../Redux/authActions";
import { port } from "../port/portno";
import '../Styles/DeleteAccount.css'
import Navbarr from './Navbar';
const DeleteAccount = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get token and email from Redux
  const jwtToken = useSelector((state) => state.auth.token);
  const email = useSelector((state) => state.auth.email);

  // Handle Delete Account
  const handleDelete = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${port}/delete-account?email=${email}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      alert("Your account deletion request has been successfully sent.");
      dispatch(logoutUser()); // Log the user out
   
    } catch (error) {
      console.error("Error deleting account:", error);
      alert("Failed to send delete request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle Cancel
  const handleCancel = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <>
 
    <div className="delete-account-container">
      <div className="delete-account-box">
        <h2>Delete Your Account</h2>
        <p>Your account is set for deletion within 48 hours. For questions, reach out to info@amddas.net</p>
        <div className="button-group">
          <button className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
          <button
            className="delete-btn"
            onClick={!loading ? handleDelete : null}
            disabled={loading}
          >
            {loading ? "Processing..." : "Delete Account"}
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default DeleteAccount;
