import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./auth/login/Login";
const ForgotPassword = lazy(() =>
  import("./auth/forgot-password/ForgotPassword")
);

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
