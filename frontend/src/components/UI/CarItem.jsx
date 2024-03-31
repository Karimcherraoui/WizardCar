import React from "react";
import "../../styles/car-item.css";
import { useNavigate } from "react-router-dom";

const CarItem = (props) => {
  const navigate = useNavigate();
  const handleRent = (_id) => {
    if (disponibility === "Non disponible") {
      alert("La voiture est deja reservee");
      return;
    }

    navigate("/car/" + _id);
  };

  const {
    image,
    model,
    brand,
    transmission,
    type,
    price,
    disponibility,
    fuel,
    idAgency,
    _id,
  } = props.item;
  return (
    <div className="w-full ">
      <div className=" bg-white py-4 px-4 w-[320px]  shadow-lg rounded-md h-[480px]  mb-10">
        <h4
          data-cy="car-name"
          className="text-center mb-4  font-bold uppercase"
        >
          {brand + " " + model}
        </h4>

        <div className=" max-h-[180px] min-h-[180px]">
          <img
            data-cy="car-image"
            src={image}
            alt={brand}
            className="bg-gray-200 rounded "
          />
        </div>

        <div className=" ">
          <div className="flex flex-row justify-center items-center mt-4">
            <img
              data-cy="agency-logo"
              src={idAgency?.logo}
              alt={idAgency?.agencyName}
              className="bg-gray-200 rounded-full w-[50px] h-[50px] "
            />
            <h5 className="text-center text-sm mt-1 font-bold border-2  border-blue-400 py-1 rounded-md w-[60%] uppercase mx-auto">
              {idAgency?.agencyName}
            </h5>
          </div>
          <div className="flex flex-row justify-between items-center  mt-4">
            <h6
              data-cy="car-price"
              className=" text-center font-bold text-gray-700"
            >
              {price} DH <span>/ Jour</span>
            </h6>
            <h6
              className={
                disponibility === "Non disponible"
                  ? "bg-red-600 px-2 py-1 text-white rounded-md"
                  : "bg-green-600 px-2 py-1 text-white rounded-md"
              }
            >
              {disponibility}
            </h6>
          </div>

          <div className=" flex items-center justify-between mt-3 mb-4 gap-2">
            <span className="flex items-center gap-1 flex-col text-[#696969]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#0000e5"
                  d="m5 11l1.5-4.5h11L19 11m-1.5 5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-11 0A1.5 1.5 0 0 1 5 14.5A1.5 1.5 0 0 1 6.5 13A1.5 1.5 0 0 1 8 14.5A1.5 1.5 0 0 1 6.5 16M18.92 6c-.2-.58-.76-1-1.42-1h-11c-.66 0-1.22.42-1.42 1L3 12v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8z"
                />
              </svg>{" "}
              {type}
            </span>
            <span className="flex items-center gap-1  flex-col text-[#696969]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#0000e5"
                  d="M10 2a2 2 0 0 0-.5 3.937V9.5a.5.5 0 0 0 1 0V5.937A2 2 0 0 0 10 2M3 5a1 1 0 0 1 2 0v4a.5.5 0 0 0 .5.5H8a.5.5 0 0 0 0-1H6V5a2 2 0 1 0-4 0v11a2 2 0 1 0 4 0v-3.5h2V16a2 2 0 1 0 4 0v-3h4.5a1.5 1.5 0 0 0 1.5-1.5V5a2 2 0 1 0-4 0v3.5h-2a.5.5 0 0 0 0 1h2.5A.5.5 0 0 0 15 9V5a1 1 0 1 1 2 0v6.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 0-.5.5V16a1 1 0 1 1-2 0v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4a1 1 0 1 1-2 0z"
                />
              </svg>{" "}
              {transmission}
            </span>
            <span className="flex items-center gap-1 font text-[#696969]  flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#0000e5"
                  d="M18 10a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1m-6 0H6V5h6m7.77 2.23l.01-.01l-3.72-3.72L15 4.56l2.11 2.11C16.17 7 15.5 7.93 15.5 9a2.5 2.5 0 0 0 2.5 2.5c.36 0 .69-.08 1-.21v7.21a1 1 0 0 1-1 1a1 1 0 0 1-1-1V14a2 2 0 0 0-2-2h-1V5a2 2 0 0 0-2-2H6c-1.11 0-2 .89-2 2v16h10v-7.5h1.5v5A2.5 2.5 0 0 0 18 21a2.5 2.5 0 0 0 2.5-2.5V9c0-.69-.28-1.32-.73-1.77"
                />
              </svg>{" "}
              {fuel}
            </span>
          </div>

          <button
            onClick={() => {
              handleRent(_id);
            }}
            className="w-full shadow-lg py-2 bg-gradient-to-r from-black to-blue-500 hover:from-black hover:to-orange-500 text-white rounded-sm"
          >
            Rent
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
