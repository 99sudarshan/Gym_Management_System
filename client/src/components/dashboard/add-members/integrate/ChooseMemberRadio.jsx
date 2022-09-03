import React from "react";

const ChooseMemberRadio = ({
  isValid,
  setIsValid,
  handleChange,
  memberState,
}) => {
  return (
    <div className="font-lato">
      <h3 className="text-gray-800 font-semibold tracking-wider text-sm xsm:text-base">
        Member Type
        <span className="text-red-500 tracking-wide">&#42;</span>
      </h3>
      <div className="float-left mr-4 pt-2">
        <input
          type="radio"
          id="guest"
          value="Guest"
          onChange={handleChange}
          name="member_type"
          className="cursor-pointer"
          onClick={() => setIsValid(false)}
          required
          checked={!isValid}
          disabled={memberState === "details" && isValid}
        />
        <label
          htmlFor="guest"
          className="text-gray-800 font-semibold text-xs xsm:text-sm ml-1 cursor-pointer"
        >
          Guest Member
        </label>
      </div>
      <div className="pt-2">
        <input
          type="radio"
          id="valid"
          value="Valid"
          name="member_type"
          className="cursor-pointer"
          required
          onClick={() => setIsValid(true)}
          onChange={handleChange}
          checked={isValid}
          disabled={memberState === "details" && !isValid}
        />
        <label
          htmlFor="valid"
          className="text-gray-800 font-semibold text-xs xsm:text-sm ml-1 cursor-pointer"
        >
          Valid Member
        </label>
      </div>
    </div>
  );
};

export default ChooseMemberRadio;
