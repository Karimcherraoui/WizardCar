import React from "react";
import driverImg from "../../assets/all-images/toyota-offer-2.png";
import driveBackground from "../../assets/all-images/drive.jpg";

const BecomeDriverSection = () => {
  return (
    <section
      className="become__driver bg-gray-100 py-16 mt-10 mb-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 13, 107, 0.9), rgba(0, 13, 107, 0.9)), url(${driveBackground})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:order-2">
            <img src={driverImg} alt="" className="w-full" />
          </div>

          <div className="lg:order-1 flex flex-col justify-center">
            <h2 className="section__title become__driver-title text-4xl font-bold mb-6 text-white">
              Do You Want to Earn With Us? So Don't Be Late
            </h2>

            <button className="btn become__driver-btn bg-blue-500 text-white px-8 py-2">
              Become a Driver
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeDriverSection;
