import React from "react";
import "./Ourmeal-main.css";

const MyMealMain = () => {
  return (
    <div className="our-meal-main-container">
      {/* meal Section */}
      <div className="meal-section">
        <h1 className="meal-title">My Meal</h1>
      </div>

      {/* Content Section */}
      <div className="content-section">
      

      

        <div className="content-block">
         
          <p className="content-text">
          Amddas Foods presents MyMeal – our elevated workplace food program – nourishing and wholesome meals! EnAmddasing multiple aspects around processes, packaging and safety; delivering pre-ordered, contactless, hygienic, pre-packed workplace meals – unique proposition to solve all your workplace food needs, with enhanced focus on safety and convenience.
            </p>
          <p className="content-text">
          All the food is prepared in ISO 22000 certified industrial kitchens by trained staff, who are equipped with Personal Protective Equipment (PPE). They are trained in enhanced protocols and new safety standards through a multi-channel employee hygiene communication and COVID-19 training modules.
             </p>
          <p className="content-text">
          All mandatory safety protocols are followed during each stage, from cooking to packing to delivery. The food is delivered at offices in packed & sealed containers by our authorized delivery partners.
           </p>
          <p className="content-text">
          As India prepares to return to office, Amddas Foods will address the anxiety amongst the employees and the change in the consumer preferences by reassuring wellbeing and hygiene of their employees, through reimagined and customisable food solution program.
          </p>
        
        </div>
      </div>
    </div>
  );
};

export default MyMealMain;
