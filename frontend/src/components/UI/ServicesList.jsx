import React from "react";
import servicesData from "../../assets/data/serviceData";

const ServicesList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {servicesData.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </div>
  );
};

const ServiceItem = ({ item }) => (
  <div className="mb-3 shadow-sm rounded-lg ">
    <div className="service__item text-center ">
      <span className="mb-3 inline-block">
        <i className={`${item.icon} text-5xl text-primary`} />
      </span>

      <h6 className="text-xl font-semibold mb-2">{item.title}</h6>
      <p className="text-sm">{item.desc}</p>
    </div>
  </div>
);

export default ServicesList;
