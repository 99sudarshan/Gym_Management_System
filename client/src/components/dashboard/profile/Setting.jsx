import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { passwordInputs } from "./profileInputs";
import { handleChangePassword } from "../../api/services/authApiServices";
import LoadingRing from "../../Common/LoadingRing";
import { HidePassIcon, ShowPassIcon } from "../../../assets/icons";

const Setting = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState({
    current_password: false,
    new_password: false,
    confirm_password: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    handleChangePassword(data, setLoading);
  };

  return (
    <>
      <p className="page_topic">Setting</p>
      <section className="page_section px-4 xsm:px-8 lg:px-16 xl:px-36 py-2 min-h-[20rem]">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          {/* Change Password Form */}
          <div className="grid gap-4 md:grid-cols-2 lg:gap-6 py-5">
            {passwordInputs.map((item, index) => {
              const { label, mandatory, placeholder, name, validation } = item;
              return (
                <div className="font-lato text-sm xsm:text-base" key={index}>
                  <p className="text-gray-800 font-semibold tracking-wider">
                    {label}
                    {mandatory}
                  </p>
                  <div className="form_div">
                    <input
                      type={showPassword[name] ? "text" : "password"}
                      name={name}
                      {...register(
                        name,
                        name !== "new_password2"
                          ? validation
                          : {
                              required: true,
                              validate: (val) => {
                                if (watch("new_password") !== val) {
                                  return "Password do not match!";
                                }
                              },
                            }
                      )}
                      className="form_input_icon"
                      placeholder={placeholder}
                    />
                    <span
                      className="form_icon_para cursor-pointer grid place-content-center "
                      onClick={(e) => {
                        e.preventDefault();
                        setShowPassword({
                          ...showPassword,
                          [name]: !showPassword[name],
                        });
                      }}
                    >
                      {showPassword[name] ? (
                        <ShowPassIcon className="w-5 h-5" />
                      ) : (
                        <HidePassIcon className="w-5 h-5" />
                      )}
                    </span>
                  </div>
                  <small className="text-red-500">
                    {errors?.[name]?.message}
                  </small>
                </div>
              );
            })}
          </div>
          <div className="pt-4 lg:pt-10">
            <button
              className="button_style hover:bg-green-600 active:bg-green-600 mr-2"
              type="submit"
            >
              {loading ? <LoadingRing /> : "Update"}
            </button>
            <button
              className="button_style hover:bg-red-500 active:bg-red-500"
              type="reset"
            >
              Reset
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Setting;
