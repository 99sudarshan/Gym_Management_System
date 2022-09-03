import React from "react";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginImage from "../../../assets/images/login.png";

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full min-h-screen p-6 ">
        <div className="flex flex-1 items-center h-full bg-gray-100 shadow-lg shadow-zinc-400 max-w-3xl ">
          <div className="flex flex-col overflow-y-auto md:flex-row w-full">
            <div className="h-40 md:h-auto md:w-1/2">
              <img
                src={LoginImage}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <main className="flex-1 p-6 sm: md:p-10">
              <h1 className="mb-5 text-xl font-semibold text-gray-700">
                Login
              </h1>
              <LoginForm />
              <hr className="my-8" />
              <Link
                to="/forgot-password"
                className="text-purple-700 hover:underline hover:text-purple-700 text-sm font-medium"
              >
                Forgot Your Password?
              </Link>
            </main>
          </div>
        </div>
      </div>

      <ToastContainer theme="colored" />
    </>
  );
};

export default Login;
