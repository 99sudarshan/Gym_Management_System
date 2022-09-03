import React from "react";
import { Link } from "react-router-dom";
import { DetailIcon } from "../../assets/icons";

const ViewDetailsLink = ({ id, getDetails }) => {
  return (
    <>
      <Link
        to={`/dashboard/valid-members/details/${id}`}
        className="text-blue-500 font-normal px-2 py-1 rounded-md hover:underline flex justify-center items-center"
        onClick={getDetails}
      >
        <span> View Details</span>
        <DetailIcon className="w-4 h-4" />
      </Link>
    </>
  );
};

export default ViewDetailsLink;
