import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";

import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import ServicesList from "../components/UI/ServicesList";
import AboutSection from "../components/UI/AboutSection";
import HeroSlider from "../components/UI/HeroSlider";


const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section ">
        <HeroSlider />
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
      <section>
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 ">
            <div className="col-span-3 my-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </div>
            <ServicesList />
          </div>
        </div>
      </section>
      {/* =========== car offer section ============= */}
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 mb-5">
            <div className="col-span-3 text-center my-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </div>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
      {/* =========== become a driver section ============ */}
      <BecomeDriverSection />
    </Helmet>
  );
};

export default Home;
