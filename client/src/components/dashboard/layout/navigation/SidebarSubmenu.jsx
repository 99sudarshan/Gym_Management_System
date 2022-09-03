import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { DropdownIcon } from "../../../../assets/icons";

const SidebarSubmenu = ({
  route,
  toggle,
  toggle_sidebar,
  activeIndex,
  setIndex,
  index,
  width,
}) => {
  const { title, icon } = route;
  const [pathname, setPathname] = useState("");
  const nav = useLocation();

  useEffect(() => {
    if (nav) {
      setPathname(nav.pathname);
    }
  }, [nav]);

  return (
    <li className="relative py-3.5 px-6">
      <button
        className="inline-flex items-center justify-between w-full text-white hover:text-purple-300 transition-colors duration-150 text-sm font-semibold relative"
        onClick={setIndex}
        aria-haspopup="true"
      >
        <div className="inline-flex items-center">
          {icon}
          {(!toggle_sidebar || width < 1023) && (
            <span className="ml-3 tracking-wide">{title}</span>
          )}
        </div>
        <DropdownIcon
          className={`w-5 h-5 animation <i
           ${activeIndex === index ? "rotate-180" : ""}`}
        />
      </button>
      {activeIndex === index && (
        <span className="absolute inset-y-0 h-14 left-0 w-1 bg-purple-400 rounded-tr-lg rounded-br-lg"></span>
      )}
      <div
        className={`overflow-hidden animation ${
          (width > 1023 && activeIndex === index && !toggle_sidebar) ||
          (activeIndex === index && width < 1023)
            ? "max-h-40"
            : "max-h-0"
        }`}
      >
        <ul
          className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded shadow-inner bg-white "
          aria-label="submenu"
        >
          {route.childrens.map((route, i) => {
            const { path, title } = route;
            return (
              <li
                className={`px-2 py-1 transition-colors duration-150 ${
                  pathname === path ? "text-purple-700" : ""
                }`}
                key={i}
                onClick={toggle}
              >
                <Link className="w-full block hover:text-purple-800 " to={path}>
                  {(!toggle_sidebar || width < 1023) && (
                    <span className="ml-4">{title}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
};

export default SidebarSubmenu;
