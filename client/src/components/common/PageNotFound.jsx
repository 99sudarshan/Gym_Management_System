import React from "react";
import { Link } from "react-router-dom";
import { ForbiddenIcon } from "../../assets/icons";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center">
      <ForbiddenIcon
        className="w-12 h-12 mt-8 text-gray-500"
        aria-hidden="true"
      />
      <h1 className="text-6xl font-semibold text-gray-700 dark:text-gray-200">
        404
      </h1>
      <p className="text-gray-700 dark:text-gray-300">
        Page not found. Check the address or{" "}
        <Link
          className="text-purple-600 hover:text-purple-600 hover:underline dark:text-purple-300"
          to="/dashboard"
        >
          go back
        </Link>
        .
      </p>
    </div>
  );
};

export default PageNotFound;
