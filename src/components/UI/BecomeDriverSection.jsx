import React from "react";
import { Container, Row, Col } from "reactstrap";
import driverImg from "../../assets/all-images/toyota-offer-2.png";
import "../../styles/become-driver.css";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver bg-gray-100 py-16">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" className="w-full" />
          </Col>

          <Col lg="6" md="6" sm="12" className="flex flex-col justify-center">
            <h2 className="section__title become__driver-title text-4xl font-bold mb-6">
              Do You Want to Earn With Us? So Don't Be Late
            </h2>

            <button className="btn become__driver-btn bg-blue-500 text-white px-8 py-2">
              Become a Driver
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
