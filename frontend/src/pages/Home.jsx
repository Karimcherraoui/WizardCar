import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import BlogList from "../components/UI/BlogList";
import Testimonial from "../components/UI/Testimonial";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import ServicesList from "../components/UI/ServicesList";
import AboutSection from "../components/UI/AboutSection";
import HeroSlider from "../components/UI/HeroSlider";
import FindCarForm from "../components/UI/FindCarForm";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="find__cars-left col-span-1">
                <h2>Find your best car here</h2>
              </div>

              <div className="col-span-1">
                <FindCarForm />
              </div>
            </div>
          </div>
        </div>
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
          <div className="grid grid-cols-2 lg:grid-cols-3 ">
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

      {/* =========== testimonial section =========== */}
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-span-1 mb-4 text-center">
              <h6 className="section__subtitle">Our clients says</h6>
              <h2 className="section__title">Testimonials</h2>
            </div>

            <Testimonial />
          </div>
        </div>
      </section>

      {/* =============== blog section =========== */}
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-span-1 mb-5 text-center">
              <h6 className="section__subtitle">Explore our blogs</h6>
              <h2 className="section__title">Latest Blogs</h2>
            </div>

            <BlogList />
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Home;
