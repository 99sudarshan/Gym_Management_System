import React from "react";
import { physicalInputs } from "./physicalInputs";

const PhysicalDetailTable = ({ formValues, handleChange, memberState }) => {
  return (
    <div className="mx-auto pt-3 w-full xl:w-[33rem]">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          {/* table head */}
          <div className="flex justify-center items-center text-sm font-semibold w-full border-y border-black">
            <div className="px-5 xsm:px-3 text-center border-x border-black flex-1">
              Particulars
            </div>
            <div className="px-3 text-center border-r border-black flex-1">
              Measurement
            </div>
            <div className="px-5 xsm:px-3 text-center border-r border-black flex-1">
              Particulars
            </div>
            <div className="px-3 text-center border-r border-black flex-1">
              Measurement
            </div>
          </div>

          {/* table body */}
          <div className="flex w-full">
            <div className="grow flex flex-col items-center border-x border-b border-black">
              {physicalInputs[0].map((item, i) => {
                const { label, name, disable, type } = item;
                return (
                  <div
                    className="flex items-center w-full border-b text-sm font-normal border-black"
                    key={i}
                  >
                    <span className="flex-1 text-center border-r border-black  py-1">
                      {label}
                    </span>
                    <span className="grow text-center flex-1">
                      <input
                        type={type}
                        className="outline-none text-center w-full px-1"
                        name={name}
                        value={formValues[name]}
                        onChange={handleChange}
                        disabled={memberState === disable}
                      />
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="grow flex flex-col items-center border-r border-b border-black text-sm font-normal">
              {physicalInputs[1].map((item, i) => {
                const { label, name, disable, type } = item;
                return (
                  <div
                    className="flex items-center w-full border-b border-black"
                    key={i}
                  >
                    <span className="flex-1 text-center border-r border-black py-1">
                      {label}
                    </span>
                    <span className="grow text-center flex-1">
                      <input
                        type={type}
                        className=" outline-none text-center w-full"
                        name={name}
                        value={formValues[name]}
                        onChange={handleChange}
                        disabled={memberState === disable}
                      />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysicalDetailTable;
