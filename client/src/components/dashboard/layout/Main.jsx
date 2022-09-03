import React, { useEffect, useState, useLayoutEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./navigation/SideBar";
import NavBar from "./navigation/NavBar";
import Footer from "./footer/Footer";
import routes from "../../Static/dashboardRoutes";
import MobileSidebar from "./navigation/MobileSidebar";
import { toggleSidebar } from "../../../Redux/Actions/sidebarAction";
import PageNotFound from "../../Common/PageNotFound";
import {
  fetchAllMembers,
  fetchExpiredMembers,
  fetchExpiryValidMembers,
  fetchJoinedMembersCount,
  fetchValidMembers,
} from "../../api/services/members/membersApiServices";
import { fetchLoggedInUser, fetchUserData } from "../../api/services/system/systemUsersApiService";

const Main = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const { toggle_sidebar } = useSelector((state) => state.toggle_sidebar);
  const { loggedIn_user } = useSelector((state) => state.system_user);
  const dispatch = useDispatch();

  const handleWidth = () => {
    const innerWidth = window.innerWidth;
    setWidth(innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  });

  useEffect(() => {
    dispatch(fetchAllMembers());
    dispatch(fetchValidMembers());
    dispatch(fetchExpiredMembers());
    dispatch(fetchExpiryValidMembers());
    dispatch(fetchJoinedMembersCount());
    dispatch(fetchUserData());
    // eslint-disable-next-line
  }, []);

  useLayoutEffect(() => {
    dispatch(fetchLoggedInUser());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="flex h-screen m-0 p-0 box-border max-w-[2000px] 2xl:mx-auto">
        <SideBar width={width} toggle={() => dispatch(toggleSidebar(false))} />
        <MobileSidebar
          width={width}
          toggle={() => dispatch(toggleSidebar(!toggle_sidebar))}
        />
        <div className="flex flex-col flex-1 h-full overflow-auto">
          <NavBar />
          <div className="layout_div">
            <Routes>
              {routes
                .filter((route) => {
                  if (loggedIn_user?.user_type !== route.permission) {
                    return route.permission === undefined;
                  } else {
                    return route.permission !== undefined;
                  }
                })
                .map((route, i) => {
                  return route.component ? (
                    <Route
                      key={i}
                      path={route.path}
                      element={<route.component />}
                    />
                  ) : null;
                })}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Main;
