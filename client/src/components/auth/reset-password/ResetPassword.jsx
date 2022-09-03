import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { resetInputs } from "./resetPassInputs";
import { handleResetPassword } from "../../api/services/authApiServices";
import { useNavigate } from "react-router-dom";
import LoadingRing from "../../Common/LoadingRing";

const ResetPassword = ({ className, path }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setLoading(true);
    const { token, confirm_password } = data;
    const formData = {
      token,
      password: confirm_password,
    };
    handleResetPassword(formData, setLoading, navigate);
  };

  useEffect(() => {
    path === "/forgot-password" &&
      reset({ token: "", password: "", confirm_password: "" });
  }, [path]);

  return (
    <div
      className={`transform transition-all duration-500 ease-in-out  ${className}`}
    >
      <div>
        <h1 className="font-bold text-lg font-sans tracking-wide">
          Reset Password
        </h1>
        <p className="text-sm">
          Add received OTP from your email and set New Password here.
        </p>
      </div>
      <form
        autoComplete="off"
        className="flex flex-col items-center gap-3 mt-4 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        {resetInputs.map((item, i) => {
          const { type, name, placeholder, validation, cpass } = item;
          return cpass ? (
            <div className="w-full sm:w-80" key={i}>
              <input
                autoComplete="off"
                type={type}
                placeholder={placeholder}
                className="outline-none text-sm rounded-3xl bg-gray-200 pl-5 py-3 w-full focus:ring-1 ring-purple-400"
                {...register(name, {
                  required: true,
                  validate: (val) => {
                    if (watch("password") !== val) {
                      return "Password do not match!";
                    }
                  },
                })}
              />
              <small className="text-red-500 ml-4 ">
                {errors?.[name]?.message}
              </small>
            </div>
          ) : (
            <div className="w-full sm:w-80" key={i}>
              <input
                autoComplete={name === "token" ? "token" : "new-password"}
                type={type}
                placeholder={placeholder}
                className="outline-none text-sm rounded-3xl bg-gray-200 pl-5 py-3 w-full focus:ring-1 ring-purple-400"
                {...register(name, validation)}
              />
              <small className="text-red-500 ml-4 ">
                {errors?.[name]?.message}
              </small>
            </div>
          );
        })}
        <button
          type="submit"
          disabled={loading}
          className="bg-gray-500 hover:bg-gray-600 animation w-full sm:w-80 rounded-3xl py-2 text-white font-medium focus:outline-none"
        >
          {loading ? <LoadingRing /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
