import React from "react";
import { lastDate, minDate } from "../dashboard/utils/dateTime";

const DateCriteria = ({
  formErrors,
  formValues,
  handleChange,
  nameOfDate,
  memberState,
}) => {
  const { start_date, members_expiry_date } = formValues;
  return (
    <>
      <div className="font-lato text-sm xsm:text-base ">
        <p className="text-gray-800 font-semibold tracking-wider ">
          {nameOfDate}
          <span className="text-red-500 tracking-wide">&#42;</span>
        </p>
        <input
          type="date"
          className="form_input_date  h-10 w-full"
          max={lastDate}
          min={minDate}
          name="start_date"
          value={start_date}
          onChange={handleChange}
          disabled={memberState === "details"}
        />
        <small className="text-red-500 tracking-wide">
          {formErrors.start_date}
        </small>
      </div>

      <div
        className={`font-lato text-sm xsm:text-base ${
          members_expiry_date === "" && "hidden"
        }`}
      >
        <p className="text-gray-800 font-semibold tracking-wider ">
          Expiry Date<span className="text-red-500 tracking-wide">&#42;</span>
        </p>
        <input
          type="date"
          className="form_input_date  h-10 w-full"
          name="members_expiry_date"
          value={members_expiry_date}
          onChange={handleChange}
          disabled={memberState === "details"}
        />
      </div>
    </>
  );
};

export default DateCriteria;
