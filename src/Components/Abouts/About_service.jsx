
import './About_service.css';// update with your actual path

const AboutService = () => {
  return (
    <section className="about-service-section">
      <div className="about-service-container">
        <div className="about-service-image">
          <img src='/images/about_service.jpg' alt="Traditional Indian Platter" />
        </div>
        <div className="about-service-text">
          <h2>We offer a comprehensive range of services:</h2>
          <ul className="service-list">
            <li>Corporate Catering</li>
            <li>Corporate Event Management</li>
            <li>Cafeteria Management</li>
            <li>Birthday Celebrations</li>
            <li>Weddings & Private Parties</li>
          </ul>
          <p>
            At AMDDAS, we combine authentic flavors with efficient service and
            modern kitchen practices, ensuring every plate and every event exceeds expectations.
          </p>
        </div>

        
      </div>
    </section>
  );
};

export default AboutService;
