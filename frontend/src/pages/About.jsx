import React from "react";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
// import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import CommonSection from "../components/UI/CommonSection";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutclassName="aboutPage" />

      <section className="about-page-section">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 lg:w-6/12 xl:w-6/12">
              <div className="about-page-img">
                {/* <img src={driveImg} alt="" className="w-full rounded-3" /> */}
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-6/12 xl:w-6/12">
              <div className="about-page-content">
                {/* Your content goes here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <BecomeDriverSection />

      <section>
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full text-center my-5">
              <h6 className="section-subtitle">Experts</h6>
              <h2 className="section-title">Our Members</h2>
            </div>
            <OurMembers />
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default About;
