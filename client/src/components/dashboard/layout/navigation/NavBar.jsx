import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../../../Redux/Actions/sidebarAction";
import CommonDropdown from "../../../Common/CommonDropdown";
import { handleLogout } from "../../../api/services/authApiServices";
import {
  LogoutIcon,
  MenuIcon,
  SettingIcon,
  UserIcon,
} from "../../../../assets/icons";
import { removeLoggedInUser } from "../../../../Redux/Actions/systemUserAction";
import { greetings, Timer } from "./../../utils";

const NavBar = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const menuRef = useRef();
  const { toggle_sidebar } = useSelector((state) => state.toggle_sidebar);
  const { loggedIn_user } = useSelector((state) => state.system_user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <header
      ref={menuRef}
      className="sticky top-0 z-50 py-1 bg-gray-600 shadow-[0px_6px_5px_-4px_black] "
    >
      <nav className="h-16 w-full flex justify-between px-3 items-center relative  z-30">
        <button
          className="text-white"
          onClick={() => dispatch(toggleSidebar(!toggle_sidebar))}
        >
          <MenuIcon className="h-9 w-9" />
        </button>
        <div className="h-full flex flex-col justify-center items-center text-sm font-medium gap-1 text-white">
          <p className="tracking-wide md:text-base font-serif">{greetings()}</p>
          <span className="font-sans">{Timer()}</span>
        </div>
        <div className="flex justify-center items-center h-full relative">
          <span className="text-white font-medium mr-3">
            {loggedIn_user?.username}
          </span>
          <button
            className="relative group"
            onClick={() => setIsDropdown(!isDropdown)}
          >
            <span className=" h-10 w-10 grid place-content-center place-items-center rounded-full bg-gray-800 text-purple-400 text-xl font-bold">
              {loggedIn_user?.username?.charAt(0).toUpperCase()}
            </span>
            {/* <img
              src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
              alt=""
              className="h-10 w-10 object-cover rounded-full"
            /> */}
          </button>

          <CommonDropdown
            className="absolute right-0 top-6 w-56 origin-top-right rounded-md bg-gray-500 text-white shadow-lg focus:outline-none"
            open={isDropdown}
            setOpen={setIsDropdown}
          >
            <div className="flex flex-col justify-between py-3 px-2 text-sm font-medium">
              <Link
                to="/dashboard/profile-details"
                className="flex gap-4 items-center hover:bg-gray-600 hover:text-white py-2 px-2 rounded"
              >
                <UserIcon className="h-5 w-5" />
                <span>Profile</span>
              </Link>
              {loggedIn_user?.user_type === "AD" && (
                <Link
                  to="/dashboard/profile-setting"
                  className="flex gap-4 items-center hover:bg-gray-600 hover:text-white py-2 px-2 rounded"
                >
                  <SettingIcon className="h-5 w-5" />
                  <span>Setting</span>
                </Link>
              )}
              <button
                className="flex gap-4 items-center hover:bg-gray-600 hover:text-white py-2 px-2 rounded font-medium"
                onClick={() => {
                  handleLogout(navigate);
                  dispatch(removeLoggedInUser());
                }}
              >
                <LogoutIcon className="h-5 w-5" />
                <span>Log Out</span>
              </button>
            </div>
          </CommonDropdown>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
