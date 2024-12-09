import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FaCheckDouble } from 'react-icons/fa';
import '../Styles/about.css'

const About = () => {
  return (
    <>
    <section id="about" className="about">
      <Container fluid>
        <Row>
          {/* Left Column with Background Image */}
          <Col
            lg={5}
            className="d-flex align-items-stretch about-image"
            style={{
              backgroundImage: `linear-gradient(hsla(0, 100%, 0%, 0.45), hsla(0, 100%, 0%, 0.45)),url(${process.env.PUBLIC_URL}/images/img1.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '400px',
            }}
          >
            {/* You can add content here if needed */}
          </Col>

          {/* Right Column with Content */}
          <Col lg={7} className="d-flex flex-column justify-content-center align-items-stretch">
            <div className="content">
              <h3 style={{ fontFamily: 'Grand Hotel, serif' }}>
                Enjoy Your Healthy Delicious Food<strong>.....</strong>
              </h3>

              <ListGroup variant="flush" className="mb-3">
                <ListGroup.Item className="d-flex align-items-start">
                  <FaCheckDouble className="icon" />
                  <span>
                    Filling every occasion with great food and service. We dummy company, situated at area, city, state are known for providing truly exquisite cuisine accompanied by dedicated service.
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-start">
                  <FaCheckDouble className="icon" />
                  <span>
                    We give our customers the option of choosing from a packaged catering menu or a customized menu.
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-start">
                  <FaCheckDouble className="icon" />
                  <span>
                    We deliver world class dining experience and to suit everyone's taste, we offer a wide range of cuisines with a menu boasting of many delicacies across global cuisines.
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-start">
                  <FaCheckDouble className="icon" />
                  <span>
                    Name it a corporate event, office daily lunch & dinner, small lunch or get together, evening dinner party, an office Party or family reunions.
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-start">
                  <FaCheckDouble className="icon" />
                  <span>
                    Amddas Foods Catering Service offers the same elite service and quality dining experience for any occasion and for any number of Guests.
                  </span>
                </ListGroup.Item>
              </ListGroup>

              <p>Trusted By 200+ satisfied clients</p>

              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex align-items-start">
                  <FaCheckDouble className="icon" />
                  <span>Fresh and Fast food Delivery</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-start">
                  <FaCheckDouble className="icon" />
                  <span>Easy Customization Options</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-start">
                  <FaCheckDouble className="icon" />
                  <span>Delicious Deals for Delicious Meals</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-start">
                  <FaCheckDouble className="icon" />
                  <span>24/8 Customer Support</span>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </section>


    <section id="why-us" className="why-us">
      <Container>
        <div className="section-title">
          <h2 style={{ fontFamily: 'Grand Hotel, serif' }}>
            Why choose <span>Amddas</span>
          </h2>
          <p>
            Amddas Foods has been providing excellent service in the F&B industry since 2015.
            The journey till now has been full of learning and experiences with our customers,
            clientele, and counterparts. Our vision is to take Amddas Foods to a recognizable zenith
            and be the benchmark in quality and service.
          </p>
        </div>

        <Row>
          <Col lg={4}>
            <div className="box">
              <span>01</span>
              <h4>Risk Management Standards</h4>
              <p>
                Public Liability Policy is issued per site where our food is being supplied/consumed.
                <br />
                • Strictly GST compliant with updated ledger and bank records. Regular on-time tax return filing done.
              </p>
            </div>
          </Col>

          <Col lg={4} className="mt-4 mt-lg-0">
            <div className="box">
              <span>02</span>
              <h4>Employee Standards</h4>
              <p>
                All employees undergo quarterly medical fitness test clearance while in service at Amddas Foods.
                <br />
                All staff have segregated dress codes based on their job roles.
                <br />
                Company-provided staff quarters adjacent to the manufacturing unit to ensure hassle-free operation.
              </p>
            </div>
          </Col>

          <Col lg={4} className="mt-4 mt-lg-0">
            <div className="box">
              <span>03</span>
              <h4>Manufacturing Unit Standards</h4>
              <p>
                HACCP (Hazard Analysis and Critical Control Points) standards met.
                <br />
                Segregated veg and non-veg cooking & storage sections.
                <br />
                Gas bank located outside the kitchen. Fire extinguishers installed at all strategic locations.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
};

export default About;
