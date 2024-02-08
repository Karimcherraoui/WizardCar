import React from "react";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";
import "../../styles/about-section.css";


const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className={`about__section ${
        aboutClass === "aboutPage" ? "mt-0" : "mt-28"
      }`}
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to car rent service</h2>
              <p className="section__description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum blanditiis esse accusantium dignissimos labore
                laborum. Veniam, corporis mollitia temporibus, in quaerat vero
                deleniti amet dolorem repudiandae, pariatur nam dolore! Impedit
                neque sit ad temporibus quam similique dolor ipsam praesentium
                sunt.
              </p>

              <div className="about__section-item flex items-center">
                <p className="section__description flex items-center space-x-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                  sit amet.
                </p>

                <p className="section__description flex items-center space-x-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                  sit amet.
                </p>
              </div>

              <div className="about__section-item flex items-center">
                <p className="section__description flex items-center space-x-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                  sit amet.
                </p>

                <p className="section__description flex items-center space-x-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                  sit amet.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-full" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
