import React from "react";
import './meal.css';
import { useNavigate } from "react-router-dom";

const MyMeal = () => {
    const navigate=useNavigate();
    const ourpage=()=>{
        navigate('/meal')
    }
  return (
    <div className="Our-meal-container">
      <h2 className="Our-meal-title">My Meal</h2>
      <p className="Our-meal-description">
      As India prepares to return to office, Compass Group India will address the anxiety amongst employees and the change in consumer preferences by reassuring wellbeing and hygiene of their employees, through reimagined and customisable food solution program.</p>
      <button onClick={ourpage} className="Our-meal-button">READ MORE</button>
    </div>
  );
};

export default MyMeal;
