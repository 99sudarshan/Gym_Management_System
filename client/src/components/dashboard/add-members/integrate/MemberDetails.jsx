import React from "react";
import { emergencyContact, memberDetails } from "./memberDetailInputs";

const MemberDetails = ({ handleChange, formValues, formErrors, isValid }) => {
  return (
    <>
      <div className="flex justify-center">
        <h3 className="text-center text-white rounded font-bold my-5 text-sm lg:text-lg underline py-4 px-10 bg-gray-600">
          MEMBER'S DETAILS
        </h3>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
        {memberDetails.map((item, index) => {
          const { type, name, label, mandatory, placeholder } = item;
          return type === "text" ? (
            <div
              className={`font-lato text-sm xsm:text-base ${
                (name === "name" || name === "mobile") && isValid && "hidden"
              } `}
              key={index}
            >
              <p className="text-gray-800 font-semibold tracking-wider ">
                {label}
                {mandatory}
              </p>
              <input
                autoCapitalize="on"
                type="text"
                className="form_input h-10 w-full placeholder:text-xs xsm:placeholder:text-sm "
                placeholder={placeholder}
                name={name}
                value={formValues[name]}
                onChange={handleChange}
              />
              <small className="text-red-500">{formErrors[name]}</small>
            </div>
          ) : (
            <div
              className={`font-lato text-sm xsm:text-base ${
                name === "current_address" && isValid && "hidden"
              }`}
              key={index}
            >
              <p className="text-gray-800 font-semibold tracking-wider ">
                {label}
                {mandatory}
              </p>
              <textarea
                autoCapitalize="on"
                className="pl-4 pt-2 text-gray-800 text-sm h-16  w-full outline-none focus:border-purple-400 border-2 rounded placeholder:text-xs xsm:placeholder:text-sm resize-none"
                placeholder={placeholder}
                name={name}
                value={formValues[name]}
                onChange={handleChange}
              ></textarea>
              <small className="text-red-500">{formErrors[name]}</small>
            </div>
          );
        })}
      </div>

      {/* EMergency Contact Details */}
      <h3 className="font-bold text-base md:text-lg italic tracking-wide underline my-3">
        Emergency Contact:
      </h3>
      <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
        {emergencyContact.map((item, index) => {
          const { type, name, label, placeholder } = item;
          return type === "textarea" ? (
            <div className="font-lato text-sm xsm:text-base" key={index}>
              <p className="text-gray-800 font-semibold tracking-wider ">
                {label}
              </p>
              <textarea
                autoCapitalize="on"
                className="pl-4 pt-2 text-gray-800 text-sm h-16 w-full outline-none border-2 focus:border-purple-400 rounded placeholder:text-xs xsm:placeholder:text-sm resize-none"
                placeholder={placeholder}
                name={name}
                value={formValues[name]}
                onChange={handleChange}
              ></textarea>
            </div>
          ) : (
            <div className="font-lato text-sm xsm:text-base" key={index}>
              <p className="text-gray-800 font-semibold tracking-wider ">
                {label}
              </p>
              <input
                type={type}
                className="form_input h-10 w-full placeholder:text-xs xsm:placeholder:text-sm"
                placeholder={placeholder}
                name={name}
                value={formValues[name]}
                onChange={handleChange}
              />
              <small className="text-red-500">{formErrors[name]}</small>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MemberDetails;
