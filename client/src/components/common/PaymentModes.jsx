import React from "react";

const PaymentModes = ({ handleChange, formValues, memberState }) => {
  const { payment_mode } = formValues;
  return (
    <>
      <div className="float-left mr-4 pt-2">
        <input
          type="radio"
          id="cash"
          value="Cash"
          name="payment_mode"
          className="cursor-pointer"
          onChange={handleChange}
          required
          checked={payment_mode === "Cash"}
          disabled={memberState === "details" && payment_mode === "FonePay"}
        />
        <label
          htmlFor="cash"
          className="text-gray-800 font-semibold text-sm ml-1 cursor-pointer "
        >
          Cash
        </label>
      </div>
      <div className="float-left mr-4 pt-2">
        <input
          type="radio"
          id="fonePay"
          value="FonePay"
          name="payment_mode"
          className="cursor-pointer"
          onChange={handleChange}
          required
          checked={payment_mode === "FonePay"}
          disabled={memberState === "details" && payment_mode === "Cash"}
        />
        <label
          htmlFor="fonePay"
          className="text-gray-800 font-semibold text-sm ml-1 cursor-pointer "
        >
          FonePay
        </label>
      </div>
    </>
  );
};

export default PaymentModes;
