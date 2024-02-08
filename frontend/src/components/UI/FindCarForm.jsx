import React from "react";
import "../../styles/find-car-form.css";
const FindCarForm = () => {
  return (
    <form className="form bg-white pb-4 shadow-lg rounded-md">
      <div className="flex items-center justify-between flex-wrap">
        <div className="form__group mb-4">
          <input
            type="text"
            placeholder="From address"
            className="form__input"
            required
          />
        </div>

        <div className="form__group mb-4">
          <input
            type="text"
            placeholder="To address"
            className="form__input"
            required
          />
        </div>

        <div className="form__group mb-4">
          <input
            type="date"
            placeholder="Journey date"
            className="form__input"
            required
          />
        </div>

        <div className="form__group mb-4">
          <input
            className="form__input journey__time"
            type="time"
            placeholder="Journey time"
            required
          />
        </div>

        <div className="select__group mb-4">
          <select className="form__select">
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>
          </select>
        </div>

        <div className="form__group mb-4">
          <button
            type="submit"
            className="btn find__car-btn bg-blue-500 text-white px-6 py-2"
          >
            Find Car
          </button>
        </div>
      </div>
    </form>
  );
};

export default FindCarForm;
