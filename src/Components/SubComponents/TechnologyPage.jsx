import React from 'react';
import './TechnologyPage.css'; // Link to the CSS file

const TechnologyPage = () => {
  return (
    <div className="technology-page">
      <header className="hero-section">
        <h1>Technology</h1>
      </header>
      <section className="tech-section">
        <div className="section">
          <h2>Innovations</h2>
          <p>
            Realizing the potential of technology to be at the heart of all transformation and to cater to the evolved consumer needs and preferences, Compass India has introduced these apps:
          </p>
          <div className="app-section">
            <h3 className="app-title">The FoodBook app has completely transformed the landscape of a conventional workplace cafeteria.</h3>
            <p>
              Through innovative user engagement, using real-time data in social media and beyond, this application helps provide trivia about the food while allowing you to choose your favourite recipe from the Chef's table. It also enhances employee engagement with sharing options and in-app banners at corporate cafeterias.
            </p>
            <p>
              There is cashless payment option for pre-ordering or paying for a meal on the app or the self-ordering kiosk, which has been a very popular feature among young employees. In addition to that, even the menu is curated according to the taste of the customer, with the help of intelligent algorithms to help display the customer’s favourites based on past orders.
            </p>
            <p>
              FoodBook's backend engine has over 125 business and wallet rules to suit the customers’ cafeteria policies. FoodBook offers same day ordering, scheduled ordering, live counters, dine-in counters and more.
            </p>
          </div>
          <div className="app-section">
            <h3 className="app-title">Avoid the rush with Café Pass</h3>
            <p>
              Café Pass helps in planning and controlling the footfall at cafeterias by limiting the number of people who may access a cafeteria at a time, plus allows employees to choose their preferred time to eat, book their Café Pass and even pre-order their meal. It takes away the hassle of manual scheduling and staggered management of breaks, providing an efficient yet flexible way to manage the cafeteria footfall.
            </p>
          </div>
          <div className="app-section">
            <h3 className="app-title">Use OnSafe – Be Safe</h3>
            <p>
              An app that facilitates implementation of social distancing protocols at the workplace with real-time tracking of people who came in close proximity at a given location. OnSafe also provides near-real-time actionable data points to administration teams, helping them in contact tracing and taking health and safety actions like sanitization of hot spots within the office premises, lifts, lift lobbies and other common areas accessed by employees at the workplace.
            </p>
          </div>
          <p>
            All in all, Compass’ digital solutions elevate the employee and client experience to the next level covering all key dimensions cafeteria operations and employee safety.
          </p>
          <p>
            The resurrection of the workplace café will indeed call for disruptive models of working, innovation around the food offering, embracing digital, contactless ordering, and creative and smart choice of ingredients which help boost immunity and promote wellness.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;
