import React from "react";

import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";

const PaymentMethod = () => {
  return (
    <>
      <div className="payment">
        <label htmlFor="" className="flex items-center gap-2">
          <input type="radio" className="form-radio" />
          <span className="ml-2">Direct Bank Transfer</span>
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="" className="flex items-center gap-2">
          <input type="radio" className="form-radio" />
          <span className="ml-2">Cheque Payment</span>
        </label>
      </div>

      <div className="payment mt-3 flex items-center justify-between">
        <label htmlFor="" className="flex items-center gap-2">
          <input type="radio" className="form-radio" />
          <span className="ml-2">Master Card</span>
        </label>

        <img src={masterCard} alt="Master Card" className="w-20" />
      </div>

      <div className="payment mt-3 flex items-center justify-between">
        <label htmlFor="" className="flex items-center gap-2">
          <input type="radio" className="form-radio" />
          <span className="ml-2">Paypal</span>
        </label>

        <img src={paypal} alt="Paypal" className="w-20" />
      </div>
      <div className="payment text-end mt-5">
        <button className="btn">Reserve Now</button>
      </div>
    </>
  );
};

export default PaymentMethod;
