import React, { useEffect } from "react";
import carData from "../assets/data/carData";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";
import { ReviewCard } from "../components/Card/ReviewCard";

const CarDetails = () => {
  const { slug } = useParams();
  const singleCarItem = carData.find((item) => item.carName === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  return (
    <Helmet title={singleCarItem.carName}>
      <section className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-14">
          <div>
            <img
              src={singleCarItem.imgUrl}
              alt=""
              className="w-full shadow-sm p-10 rounded-md"
            />
          </div>

          <div className="car__info">
            <h2 className="section__title">{singleCarItem.carName}</h2>

            <div className="flex items-center gap-5 mb-4 mt-3">
              <h6 className="rent__price font-bold text-xl">
                ${singleCarItem.price}.00 / Day
              </h6>

              <span className="flex items-center gap-2">
                <span style={{ color: "#f9a826" }}>
                  <i className="ri-star-s-fill"></i>
                  <i className="ri-star-s-fill"></i>
                  <i className="ri-star-s-fill"></i>
                  <i className="ri-star-s-fill"></i>
                  <i className="ri-star-s-fill"></i>
                </span>
                ({singleCarItem.rating} ratings)
              </span>
            </div>

            <p className="section__description">{singleCarItem.description}</p>

            <div className="grid grid-cols-3 items-center mt-10  gap-4 ">
              <span className="flex items-center gap-1 section__description">
                <i
                  className="ri-roadster-line"
                  style={{ color: "#f9a826" }}
                ></i>
                {singleCarItem.model}
              </span>

              <span className="flex items-center gap-1 section__description">
                <i
                  className="ri-settings-2-line"
                  style={{ color: "#f9a826" }}
                ></i>{" "}
                {singleCarItem.automatic}
              </span>

              <span className="flex items-center gap-1 section__description">
                <i
                  className="ri-timer-flash-line"
                  style={{ color: "#f9a826" }}
                ></i>{" "}
                {singleCarItem.speed}
              </span>
              <span className="flex items-center gap-1 section__description">
                <i className="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                {singleCarItem.gps}
              </span>

              <span className="flex items-center gap-1 section__description">
                <i
                  className="ri-wheelchair-line"
                  style={{ color: "#f9a826" }}
                ></i>{" "}
                {singleCarItem.seatType}
              </span>

              <span className="flex items-center gap-1 section__description">
                <i
                  className="ri-building-2-line"
                  style={{ color: "#f9a826" }}
                ></i>{" "}
                {singleCarItem.brand}
              </span>
            </div>
          </div>
        </div>

        <ReviewCard />

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          <div className="col-span-1 md:col-span-2">
            <div className="booking-info mt-5 shadow-md rounded-md">
              <h5 className="mb-12 font-bold text-center text-blue-400">
                Booking Information
              </h5>
              <BookingForm />
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <div className="payment__info mt-5">
              <h5 className="mb-4 font-bold">Payment Information</h5>
              <PaymentMethod />
            </div>
          </div>
        </div> */}
      </section>
    </Helmet>
  );
};

export default CarDetails;
