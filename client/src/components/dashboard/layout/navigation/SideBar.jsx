import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { routes } from "../../../Static/sidebarRoutes";
import CustomLink from "./CustomLink";
import SidebarSubmenu from "./SidebarSubmenu";
import GrowUpImg from "../../../../assets/images/growUp.png";

const SideBar = ({ toggle, width }) => {
  const { toggle_sidebar } = useSelector((state) => state.toggle_sidebar);
  const nav = useLocation().pathname;
  const [activeIndex, setActiveIndex] = useState("");

  const handleDropdown = (ind) => {
    if (ind !== "stop") {
      if (ind === activeIndex) {
        setActiveIndex("");
      } else {
        setActiveIndex(ind);
      }
    }
  };

  useEffect(() => {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].childrens) {
        for (let j = 0; j < routes[i].childrens.length; j++) {
          if (nav === routes[i].childrens[j].path) {
            setActiveIndex(i);
          }
        }
      }
    }
  }, [nav]);

  return (
    <aside
      className={` ${
        toggle_sidebar ? "w-20" : "w-64"
      } hidden h-screen overflow-y-auto  bg-gray-600 animation lg:block`}
    >
      <div className=" px-4 h-16 flex justify-center items-center my-1">
        <div className="flex justify-center items-center gap-1 ">
          <img src={GrowUpImg} alt="GrowUp" className="object-cover w-16" />
          <h4
            className={`font-lato text-white text-sm ${
              toggle_sidebar && "overflow-hidden"
            }`}
          >
            Grow Up Fitness Club
          </h4>
        </div>
      </div>
      <ul className="">
        {routes.map((route, index) => {
          return route.childrens ? (
            <SidebarSubmenu
              route={route}
              key={index}
              width={width}
              index={index}
              toggle={toggle}
              toggle_sidebar={toggle_sidebar}
              activeIndex={activeIndex}
              setIndex={() => {
                toggle();
                handleDropdown(index);
              }}
            />
          ) : (
            <CustomLink
              key={index}
              route={route}
              setIndex={() => handleDropdown(index)}
            >
              {route.icon}
              {!toggle_sidebar && <span className="ml-3">{route.title}</span>}
            </CustomLink>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
