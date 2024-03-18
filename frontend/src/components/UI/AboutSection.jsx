import React from "react";
// import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";
import drive from "../../assets/all-images/drive.jpg";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className={`about__section ${
        aboutClass === "aboutPage" ? "mt-0" : "mt-10"
      }`}
    >
      <div className="container my-auto shadow-md py-14 rounded-lg bg-gray-50  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="about__section-content">
              <h2 className="section__title text-2xl lg:text-3xl">
                Welcome to car rent service
              </h2>
              <p className="section__description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum blanditiis esse accusantium dignissimos labore
                laborum. Veniam, corporis mollitia temporibus, in quaerat vero
                deleniti amet dolorem repudiandae, pariatur nam dolore! Impedit
                neque sit ad temporibus quam similique dolor ipsam praesentium
                sunt.
              </p>

              <div className="about__section-item flex items-center space-x-2">
                <p className="section__description">
                  <i className="ri-checkbox-circle-line text-orange-500"></i>{" "}
                  Lorem ipsum dolor sit amet.
                </p>

                <p className="section__description">
                  <i className="ri-checkbox-circle-line text-orange-500"></i>{" "}
                  Lorem ipsum dolor sit amet.
                </p>
              </div>

              <div className="about__section-item flex items-center space-x-2">
                <p className="section__description">
                  <i className="ri-checkbox-circle-line text-orange-500"></i>{" "}
                  Lorem ipsum dolor sit amet.
                </p>

                <p className="section__description">
                  <i className="ri-checkbox-circle-line text-orange-500"></i>{" "}
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:mt-0 mt-8 lg:col-span-1">
            <div className="about__img">
              <img src={drive} alt="" className="w-full rounded h-[350px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
