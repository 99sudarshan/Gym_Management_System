import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CustomLink from "./CustomLink";
import SidebarSubmenu from "./SidebarSubmenu";
import { routes } from "../../../Static/sidebarRoutes";
import { toggleSidebar } from "../../../../Redux/Actions/sidebarAction";
import GrowUpImg from "../../../../assets/images/growUp.png";

const MobileSidebar = ({ toggle, width }) => {
  const { toggle_sidebar } = useSelector((state) => state.toggle_sidebar);
  const nav = useLocation().pathname;
  const [activeIndex, setActiveIndex] = useState("");
  const dispatch = useDispatch();

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
    <>
      {toggle_sidebar && (
        <div
          className="h-full fixed inset-0 z-50 bg-[rgba(0,0,0,0.4)] lg:hidden"
          onClick={() => dispatch(toggleSidebar())}
        ></div>
      )}
      <aside
        className={`fixed inset-y-0 z-[60] flex-shrink-0 w-64 mt-16 overflow-y-auto bg-gray-600 lg:hidden animation transform ${
          toggle_sidebar ? "translate-x-0" : "-translate-x-[120%]"
        }`}
      >
        <div className="py-2 px-4 h-16 flex justify-between md:gap-2 items-center ">
          <div className="flex justify-center items-center gap-1">
            <img src={GrowUpImg} alt="GrowUp" className="object-cover w-16" />
            <h4 className="font-lato text-sm text-white text-center">
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
                toggle_sidebar={toggle_sidebar}
                activeIndex={activeIndex}
                toggle={toggle}
                setIndex={() => handleDropdown(index)}
              />
            ) : (
              <CustomLink
                key={index}
                route={route}
                setIndex={() => {
                  toggle();
                  handleDropdown(index);
                }}
              >
                {route.icon}
                <span className="ml-4">{route.title}</span>
              </CustomLink>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default MobileSidebar;
