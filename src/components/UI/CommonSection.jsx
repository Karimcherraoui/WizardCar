import React from "react";
import { Container } from "reactstrap";
import "../../styles/common-section.css";


const CommonSection = ({ title }) => {
  return (
    <section className="common__section mb-5 bg-gray-800 py-10">
      <Container className="text-center">
        <h1 className="text-white text-4xl font-bold">{title}</h1>
      </Container>
    </section>
  );
};

export default CommonSection;
