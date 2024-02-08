import React from "react";
import "../../styles/booking-form.css";


const BookingForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-wrap gap-4">
      <div className="flex items-center mb-4">
        <input type="text" placeholder="First Name" className="booking__form" />
        <input type="text" placeholder="Last Name" className="booking__form ms-1" />
      </div>

      <div className="flex items-center mb-4">
        <input type="email" placeholder="Email" className="booking__form" />
        <input type="number" placeholder="Phone Number" className="booking__form ms-1" />
      </div>

      <div className="flex items-center mb-4">
        <input type="text" placeholder="From Address" className="booking__form" />
        <input type="text" placeholder="To Address" className="booking__form ms-1" />
      </div>

      <div className="flex items-center mb-4">
        <select className="booking__form" name="persons">
          <option value="1 person">1 Person</option>
          <option value="2 persons">2 Persons</option>
          <option value="3 persons">3 Persons</option>
          <option value="4 persons">4 Persons</option>
          <option value="5+ persons">5+ Persons</option>
        </select>

        <select className="booking__form ms-1" name="luggage">
          <option value="1 luggage">1 Luggage</option>
          <option value="2 luggage">2 Luggage</option>
          <option value="3 luggage">3 Luggage</option>
          <option value="4 luggage">4 Luggage</option>
          <option value="5+ luggage">5+ Luggage</option>
        </select>
      </div>

      <div className="flex items-center mb-4">
        <input type="date" placeholder="Journey Date" className="booking__form" />
        <input type="time" placeholder="Journey Time" className="booking__form ms-1 time__picker" />
      </div>

      <div className="w-full mb-4">
        <textarea rows={5} className="textarea booking__form" placeholder="Write"></textarea>
      </div>

      <button type="submit" className="btn bg-blue-500 text-white px-6 py-2">Submit</button>
    </form>
  );
};

export default BookingForm;
