import React from "react";
import { SearchIcon } from "../../assets/icons";

const SearchBtn = ({ setTerm, getResult }) => {
  return (
    <div className="flex items-center h-10  rounded focus-within:ring-1 ring-purple-400 w-full lg:w-80 bg-gray-100 overflow-hidden ">
      <input
        type="text"
        className="h-full w-4/5 outline-none border focus-within:border-none focus-within::outline-none focus-within::ring-0 [background:none] pl-4 text-xs xsm:text-sm "
        placeholder="search..."
        onChange={setTerm}
      />
      <button
        className=" w-1/5 flex justify-center items-center text-sm xsm:text-base bg-gray-500 h-full text-white hover:text-white animation focus:outline-none hover:bg-gray-600 "
        onClick={(e) => {
          e.preventDefault();
          getResult();
        }}
      >
        <SearchIcon className="w-5 h-5"/>
      </button>
    </div>
  );
};

export default SearchBtn;
