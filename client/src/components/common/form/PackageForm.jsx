import React, { useMemo } from "react";
import { lastDate, minDate } from "../../dashboard/utils/dateTime";
import { packageInputs } from "./packageInputs";
import {
  duration_valid_member,
  duration_guest_member,
  package_type_valid,
  package_type_guest,
} from "./packageFiles";
import PaymentModes from "../PaymentModes";

const PackageForm = ({ handleChange, formErrors, formValues, isValid }) => {
  const {
    package_period,
    package_type,
    received_amount,
    package_fee,
    admission_charge,
  } = formValues;

  const calcValue = (name) => {
    if (name === "total_fee") {
      if (isValid && admission_charge) {
        return Number(package_fee) + Number(admission_charge);
      } else {
        return Number(package_fee);
      }
    } else if (name === "due_amount") {
      if (isValid && admission_charge) {
        return (
          Number(package_fee) +
          Number(admission_charge) -
          Number(received_amount)
        );
      } else {
        return Number(package_fee) - Number(received_amount);
      }
    }
  };

  const packages = useMemo(() => {
    if (isValid) {
      return {
        durations:
          package_period === ""
            ? duration_valid_member
            : duration_valid_member.filter(
                (data) => data.package_period !== ""
              ),
        type:
          package_type === ""
            ? package_type_valid
            : package_type_valid.filter((data) => data.pkg_type !== ""),
      };
    } else {
      return {
        durations:
          package_period === ""
            ? duration_guest_member
            : duration_guest_member.filter(
                (data) => data.package_period !== ""
              ),
        type:
          package_type === ""
            ? package_type_guest
            : package_type_guest.filter((data) => data.pkg_type !== ""),
      };
    }
  }, [isValid, package_period, package_type]);

  return (
    <>
      <div className="font-lato ">
        <p className="text-gray-800 font-semibold tracking-wider text-sm xsm:text-base">
          Package Type<span className="text-red-500 tracking-wide">&#42;</span>
        </p>
        <select
          className="selector"
          name="package_type"
          value={package_type}
          onChange={handleChange}
        >
          {packages?.type.map((item, index) => {
            return (
              <option value={item.pkg_type} key={index}>
                {item.pkg_type !== "" ? item.pkg_type : "--Select package--"}
              </option>
            );
          })}
        </select>
        <small className="text-red-500">{formErrors.package_type}</small>
      </div>
      <div className="font-lato ">
        <p className="text-gray-800 font-semibold tracking-wider text-sm xsm:text-base">
          Package Period
          <span className="text-red-500 tracking-wide">&#42;</span>
        </p>
        <select
          className="selector"
          name="package_period"
          value={package_period}
          onChange={handleChange}
        >
          {packages?.durations.map((data, index) => {
            return (
              <option value={data.package_period} key={index}>
                {data.package_period !== ""
                  ? data.package_period
                  : "--Select Period--"}
              </option>
            );
          })}
        </select>
        <small className="text-red-500">{formErrors.package_period}</small>
      </div>

      {packageInputs.map((item, i) => {
        const { type, name, disable, mandatory, options, label, format } = item;
        return type === "select" ? (
          <div className="font-lato text-sm xsm:text-base" key={i}>
            <div className="text-gray-800 tracking-wider">
              <p className="font-semibold">
                {label}
                {mandatory && mandatory}
              </p>
              <select
                className="selector"
                name={name}
                value={formValues[name]}
                onChange={handleChange}
              >
                {options.map((item, i) => (
                  <option value={item.value} key={i}>
                    {item.value !== "" ? item.value : "--Select Schedule--"}
                  </option>
                ))}
              </select>
              <small className="text-red-500">{formErrors[name]}</small>
            </div>
          </div>
        ) : format === "amount" ? (
          <div className="font-lato text-sm xsm:text-base" key={i}>
            <p className="text-gray-800 tracking-wider font-semibold">
              {label}
            </p>
            <div className="amount_div">
              <p className="text-center flex-1 px-1 my-auto sm:px-0">Rs.</p>
              <input
                type={type}
                className="placeholder:text-sm placeholder:text-gray-700 flex-[9] outline-none h-full pr-6 border-l-2 pl-2 text-sm"
                name={name}
                disabled={disable || name === "package_fee"}
                value={disable === true ? calcValue(name) : formValues[name]}
                onChange={handleChange}
              />
            </div>
          </div>
        ) : type === "date" ? (
          <div className="font-lato text-sm xsm:text-base" key={i}>
            <p className="text-gray-800 font-semibold tracking-wider ">
              {label}
            </p>
            <input
              type={type}
              className="form_input_date h-10 w-full"
              max={lastDate}
              min={minDate}
              name={name}
              value={formValues[name] === null ? "" : formValues[name]}
              onChange={handleChange}
            />
          </div>
        ) : (
          <div className="font-lato text-sm xsm:text-base" key={i}>
            <p className="text-gray-800 font-semibold tracking-wider">
              {label}
            </p>
            <input
              type={type}
              className="form_input border-2 h-10 w-full"
              name={name}
              value={formValues[name]}
              onChange={handleChange}
            />
          </div>
        );
      })}
      <div className="font-lato text-sm xsm:text-base ">
        <h3 className="text-gray-800 font-semibold tracking-wider">
          Payment Modes<span className="text-red-500">&#42;</span>
        </h3>
        <PaymentModes handleChange={handleChange} formValues={formValues} />
      </div>
    </>
  );
};

export default PackageForm;
