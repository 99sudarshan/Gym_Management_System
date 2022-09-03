import React from "react";
import { lastDate, minDate } from "../../utils";
import { admissionInputs } from "./admissionInputs";

const AdmissionForm = ({
  formValues,
  handleChange,
  memberState,
  formErrors,
}) => {
  return (
    <>
      <div className="flex justify-center mt-10">
        <h2 className="text-center text-white rounded font-bold text-sm lg:text-lg underline p-4 bg-gray-600">
          ADMISSION FORM
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:gap-6 pt-5">
        {admissionInputs.map((item, index) => {
          const {
            label,
            name,
            type,
            placeholder,
            disable,
            options,
            forr,
            icon,
            mandatory,
          } = item;
          return type === "select" ? (
            <div className="font-lato" key={index}>
              <p className="text-gray-800 text-sm sm:text-base font-semibold tracking-wider">
                {label}
                {mandatory}
              </p>
              <select
                className="selector"
                name={name}
                value={formValues[name]}
                onChange={handleChange}
                disabled={memberState === disable}
              >
                {options?.map((item, i) => {
                  return (
                    <option value={item.value} key={i}>
                      {item.value ? item.value : `--Select ${label}--`}
                    </option>
                  );
                })}
              </select>
              <p className="text-red-500">{formErrors[name]}</p>
            </div>
          ) : forr === "number" ? (
            <div className="font-lato text-sm xsm:text-base" key={index}>
              <p className="text-gray-800 font-semibold tracking-wider">
                {label}
                {mandatory}
              </p>
              <div className="form_div">
                <input
                  type={type}
                  className="form_input_icon"
                  placeholder={placeholder}
                  name={name}
                  value={formValues[name]}
                  onChange={handleChange}
                  disabled={memberState === disable}
                />
                <p className="form_icon_para">{icon}</p>
              </div>
              <small className="text-red-500">{formErrors[name]}</small>
            </div>
          ) : type === "date" ? (
            <div className="font-lato text-sm xsm:text-base" key={index}>
              <p className="text-gray-800 font-semibold tracking-wider ">
                {label}
                {mandatory}
              </p>
              <input
                type={type}
                className="form_input_date  h-10 w-full"
                max={lastDate}
                min={name === "dob" ? null : minDate}
                name={name}
                value={formValues[name] === null ? "" : formValues[name]}
                onChange={handleChange}
                disabled={memberState === disable}
              />
              <small className="text-red-500 ">{formErrors[name]}</small>
            </div>
          ) : forr === "fee" ? (
            <div className="font-lato text-sm xsm:text-base" key={index}>
              <p className="text-gray-800 font-semibold tracking-wider">
                {label}
                {mandatory}
              </p>
              <div className="amount_div">
                <p className="text-center flex-1 px-1 sm:px-0">Rs.</p>
                <input
                  type={type}
                  className="placeholder:text-sm placeholder:text-gray-700 flex-[9] outline-none h-full pr-6 border-l-2 pl-2 text-sm"
                  name={name}
                  value={formValues[name]}
                  onChange={handleChange}
                  disabled={memberState === disable}
                />
              </div>
              <small className="text-red-500 tracking-wide">
                {formErrors[name]}
              </small>
            </div>
          ) : type === "textarea" ? (
            <div className="font-lato text-sm xsm:text-base" key={index}>
              <p className="text-gray-800 font-semibold tracking-wider ">
                {label}
                {mandatory}
              </p>
              <textarea
                autoCapitalize="on"
                className="pl-4 pt-2 text-gray-800 text-sm h-16  w-full outline-none border-2 focus:border-purple-400 rounded placeholder:text-xs xsm:placeholder:text-sm resize-none"
                placeholder={placeholder}
                name={name}
                value={formValues[name]}
                onChange={handleChange}
                disabled={memberState === disable}
              ></textarea>
              <small className="text-red-500 ">{formErrors[name]}</small>
            </div>
          ) : (
            <div className="font-lato text-sm xsm:text-base" key={index}>
              <p className="text-gray-800 font-semibold tracking-wider ">
                {label}
                {mandatory}
              </p>
              <input
                autoCapitalize="on"
                type={type}
                className="form_input  h-10 w-full placeholder:text-xs xsm:placeholder:text-sm"
                placeholder={placeholder}
                name={name}
                value={formValues[name]}
                onChange={handleChange}
                disabled={memberState === disable}
              />
              <small className="text-red-500">{formErrors[name]}</small>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AdmissionForm;
