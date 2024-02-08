import React from "react";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {
  const { imgUrl, model, carName, automatic, speed, price } = props.item;

  return (
    <div className="car__item w-full">
      <div className=" bg-white p-4 w-[320px]  shadow-lg rounded-md ">
        <div className="car__img">
          <img src={imgUrl} alt={carName} className="" />
        </div>

        <div className="car__item-content ">
          <h3 className="section__title text-center">{carName}</h3>
          <h6 className="rent__price text-center mt-4">
            ${price}.00 <span>/ Day</span>
          </h6>

          <div className="car__item-info flex items-center justify-between mt-3 mb-4">
            <span className="flex items-center gap-1">
              <i className="ri-car-line"></i> {model}
            </span>
            <span className="flex items-center gap-1">
              <i className="ri-settings-2-line"></i> {automatic}
            </span>
            <span className="flex items-center gap-1">
              <i className="ri-timer-flash-line"></i> {speed}
            </span>
          </div>

          <button className="w-full car__item-btn car__btn-rent bg-blue-500 text-white">
            <Link to={`/cars/${carName}`}>Rent</Link>
          </button>

          <button className="w-full car__item-btn car__btn-details bg-gray-500 text-white mt-2">
            <Link to={`/cars/${carName}`}>Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
