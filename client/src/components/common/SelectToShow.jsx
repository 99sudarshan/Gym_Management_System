import React from "react";

const SelectToShow = ({ onChange }) => {
  return (
    <>
      <div className="flex justify-center text-sm items-center">
        <span className="pr-1"> Show </span>
        <select
          className="form-select form-select-sm block  px-2 py-1 pr-10 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-black appearance-none rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label=".form-select-sm example"
          name="selectResult"
          onChange={(e) => onChange(e)}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="100">100</option>
        </select>
        <span className="pl-1"> entries</span>
      </div>
    </>
  );
};

export default SelectToShow;
