import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { HidePassIcon, ShowPassIcon } from "../../../assets/icons";
import { handleLogin } from "../../api/services/authApiServices";
import LoadingRing from "../../Common/LoadingRing";
import { showErrorToast } from "../../Toastify/showToast";
import { loginInputs } from "./loginInputs";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    handleLogin(data, navigate, setLoading);

    // navigate("/dashboard", {
    //   state: (data = {
    //     name: data.user,
    //     password: data.password,
    //   }),
    // });
  };

  useEffect(() => {
    Object.keys(errors).length !== 0 &&
      showErrorToast("Invalid username and password!");
  }, [errors]);

  return (
    <form
      action=""
      className="flex flex-col w-full gap-2 lg:gap-4 justify-center items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      {loginInputs.map((item, i) => {
        const { type, name, className, label, placeholder, validation } = item;
        return (
          <div
            className="flex flex-col justify-center items-start gap-1 w-full"
            key={i}
          >
            {type === "text" ? (
              <div className="w-full">
                <label className="text-base text-gray-700">{label}</label>
                <input
                  type={type}
                  placeholder={placeholder}
                  className={className}
                  {...register(name, validation)}
                />
                <p className="text-red-500 h-3 text-sm">{errors?.[name]?.message}</p>
              </div>
            ) : (
              <div className=" w-full" key={i}>
                <label className="text-base text-gray-700">{label}</label>
                <div className="w-full flex justify-between items-center h-9 lg:h-10 bg-white pr-4 focus-within:ring-1 ring-purple-400 rounded-sm">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder={placeholder}
                    className={className}
                    {...register(name, validation)}
                  />
                  <span
                    className=" text-base outline-none pl-4 block cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? (
                      <ShowPassIcon className="w-5 h-5" />
                    ) : (
                      <HidePassIcon className="w-5 h-5" />
                    )}
                  </span>
                </div>
                <p className="text-red-500 h-3 text-sm">{errors?.[name]?.message}</p>
              </div>
            )}
          </div>
        );
      })}
      <button
        disabled={loading}
        className="w-full bg-gray-500 hover:bg-gray-600 text-white rounded-sm animation py-2 px-4 text-base shadow-gray-700 shadow-md focus:outline-none active:ring-0"
        type="submit"
      >
        {loading ? <LoadingRing /> : " Login"}
      </button>
    </form>
  );
};

export default LoginForm;
