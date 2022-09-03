import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ route, children, setIndex }) => {
  const resolved = useResolvedPath(route.path);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className="relative py-3.5 px-6 text-white" onClick={setIndex}>
      <Link
        to={route.path}
        className={`inline-flex w-full text-sm tracking-wide font-semibold hover:text-purple-300 ${
          match ? "text-purple-400" : ""
        } `}
      >
        {children}
      </Link>

      {match && (
        <span className="absolute inset-y-0 left-0 w-1 bg-purple-400 rounded-tr-lg rounded-br-lg"></span>
      )}
    </div>
  );
};

export default CustomLink;
