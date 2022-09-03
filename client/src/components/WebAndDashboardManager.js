import React, { lazy, useEffect, useState, useLayoutEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { fetchLoggedInUser } from "./api/services/system/systemUsersApiService";
const Main = lazy(() => import("./dashboard/layout/Main"));
const App = lazy(() => import("./App"));

const WebAndDashboardManager = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const tokenManager = () => {
    const token = localStorage.getItem("refresh_token");
    let decoded;
    try {
      decoded = jwt_decode(token);
      const loggedIn = decoded && decoded.exp && decoded.user_id && true;
      if (loggedIn) {
        if (Date.now() > decoded.exp * 1000) {
          setLoggedIn(false);
          localStorage.clear();
          navigate("/");
        } else {
          setLoggedIn(true);
        }
      } else {
        setLoggedIn(false);
        localStorage.clear();
        navigate("/");
      }
    } catch (e) {
      setLoggedIn(false);
    }
  };

  useLayoutEffect(() => {
    dispatch(fetchLoggedInUser());
    // eslint-disable-next-line
  }, [loggedIn]);

  useEffect(() => {
    tokenManager();
    // eslint-disable-next-line
  }, [location]);

  return (
    <>
      <ToastContainer theme="colored" />
      <Routes>
        {!loggedIn && <Route path="/*" element={<App />} />}

        {loggedIn && (
          <>
            <Route path="/dashboard/*" element={<Main />} />
          </>
        )}
        <Route
          path="*"
          element={
            loggedIn ? (
              <Navigate replace to="/dashboard" />
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
      </Routes>
    </>
  );
};

export default WebAndDashboardManager;
