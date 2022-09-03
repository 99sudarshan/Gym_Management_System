import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ArrowLeft } from "../../../assets/icons";
import forgotPassoword from "../../../assets/images/forgot-password.jpg";
import ResetPassword from "../reset-password/ResetPassword";
import { handleForgotPassword } from "../../api/services/authApiServices";
import LoadingRing from "../../Common/LoadingRing";

const ForgotPassword = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const path = useLocation().pathname;
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setLoading(true);
    handleForgotPassword(data, reset, navigate, setLoading);
  };

  useEffect(() => {
    if (path === "/reset-password") {
      setTimeout(() => {
        navigate("/forgot-password");
      }, 360000);
    }
    // eslint-disable-next-line
  }, [path]);

  return (
    <>
      <div className="px-6">
        <button
          className="absolute top-4 left-10 hover:text-gray-800"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="w-7 h-7" />
        </button>
        <div className="flex items-center flex-col h-full overflow-hidden w-full lg:w-2/5 mx-auto py-4">
          <div className=" w-full xsm:w-1/2 lg:w-3/5">
            <img
              src={forgotPassoword}
              alt=""
              className=" h-full w-full object-cover"
            />
          </div>
          <div
            className={` transition-all duration-500 ease-in-out transform ${
              path === "/reset-password"
                ? " -translate-x-[150%] max-h-0 invisible"
                : "translate-x-0"
            }`}
          >
            <div>
              <h1 className="font-bold text-lg font-sans tracking-wide">
                Forgot Password?
              </h1>
              <p className="text-sm">
                Enter your email to receive a token to reset your password.
              </p>
            </div>
            <form
              action=""
              className="flex flex-col items-center gap-3 mt-4 w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="w-full sm:w-80">
                <input
                  type="text"
                  placeholder="Email"
                  className="outline-none focus:ring-1 ring-purple-400 rounded-3xl text-sm bg-gray-200 pl-5 py-3 w-full"
                  {...register("email", {
                    required: "Email is required!",
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                      message: "Invalid email!",
                    },
                  })}
                />
                <small className="text-red-500 ml-4">
                  {errors?.email?.message}
                </small>
              </div>
              <button
                disabled={loading}
                type="submit"
                className="bg-gray-500 hover:bg-gray-600 animation w-full sm:w-80 rounded-3xl py-2 text-white font-medium focus:outline-none"
              >
                {loading ? <LoadingRing /> : "  Submit"}
              </button>
            </form>
          </div>
          <ResetPassword
            path={path}
            className={
              path === "/forgot-password"
                ? "translate-x-[150%] max-h-0 invisible"
                : "translate-x-0"
            }
          />
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
