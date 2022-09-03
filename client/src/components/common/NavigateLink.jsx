import React from "react";
import { Link } from "react-router-dom";

const NavigateLink = ({ name, path, icon, subName }) => {
  return (
    <Link
      to={path}
      className=" flex items-center bg-gray-500 px-3 py-2 ml-2 rounded-md hover:bg-gray-600 animation hover:text-white text-white text-sm"
    >
      {subName} <i className={icon}></i>
      {name}
    </Link>
  );
};

export default NavigateLink;
