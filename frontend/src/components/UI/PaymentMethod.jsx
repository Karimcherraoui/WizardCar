import React from "react";
import "../../styles/payment-method.css";

const PaymentMethod = () => {
  return (
    <div className="flex flex-row justify justify-between mb-20">
      <div className="payment">
        <label htmlFor="" className="flex items-center gap-2">
          <input type="radio" className="form-radio" />
          <span className="ml-2">Direct Bank Transfer</span>
        </label>
      </div>

      <div className="payment   ">
        <label htmlFor="" className="">
          <input type="radio" className="form-radio" />
          <span className="ml-2">Cheque Payment</span>
        </label>
      </div>

      <div className="payment">
        <label htmlFor="" className="">
          <input type="radio" className="form-radio" />
          <span className="ml-2 ">Card</span>
        </label>
      </div>

      <div className="payment   flex ">
        <label htmlFor="" className="">
          <input type="radio" className="form-radio" />
          <span className="ml-2">Paypal</span>
        </label>
      </div>
      <div className="payment  mt-5">
        <button className="btn">Reserve Now</button>
      </div>
    </div>
  );
};

export default PaymentMethod;
