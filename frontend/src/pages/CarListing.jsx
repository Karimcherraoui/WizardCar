import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import { useSelector } from "react-redux";

const CarListing = () => {
  const cars = useSelector((state) => state.car.cars);

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section className="container mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <span className="flex items-center gap-2">
            <i className="ri-sort-asc"></i> Sort By
          </span>

          <select className="border p-2">
            <option>Select</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-20">
          {cars?.map((item) => (
            <CarItem item={item} key={item.id} />
          ))}
        </div>
      </section>
    </Helmet>
  );
};

export default CarListing;
