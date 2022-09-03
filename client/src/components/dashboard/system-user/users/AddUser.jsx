import React, { useEffect, useState } from "react";
import { userInputs } from "./userInputs";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { CrossIcon } from "../../../../assets/icons";
import {
  addUserData,
  updataUserData,
} from "../../../api/services/system/systemUsersApiService";
import LoadingRing from "../../../Common/LoadingRing";

const AddUser = ({ closeModal, userData }) => {
  const {
    handleSubmit,
    watch,
    formState: { errors },
    register,
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { username, first_name, last_name, email, password, password2 } =
      data;
    setLoading(true);
    if (userData.id === "") {
      const formData = {
        first_name,
        last_name,
        username,
        email,
        password,
        password2,
      };
      dispatch(addUserData(formData, closeModal, setLoading));
    } else {
      const formData = {
        first_name,
        last_name,
        username,
        email,
      };
      dispatch(updataUserData(userData.id, formData, closeModal, setLoading));
      console.log(data);
    }
  };

  useEffect(() => {
    if (userData.id !== "") {
      reset({ ...userData, password: "12345678", password2: "12345678" });
    }
    // eslint-disable-next-line
  }, [userData]);

  return (
    <>
      <div className="px-6 py-4 mb-8 h-full">
        <header className="flex justify-end">
          <button
            className="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded  hover:text-gray-700"
            onClick={closeModal}
          >
            <CrossIcon className="w-4 h-4" />
          </button>
        </header>
        <p className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
          Add User
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          {userInputs.map((data, index) => {
            const { label, name, type, validation, placeholder, cpass } = data;
            return (
              <div key={index}>
                {cpass ? (
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold text-gray-800">{label}</label>
                    <input
                      className="form_input h-10"
                      type={type}
                      {...register(name, {
                        required: true,
                        validate: (val) => {
                          if (watch("password") !== val) {
                            return "Your passwords do not match";
                          }
                        },
                      })}
                      disabled={userData.id !== "" && true}
                    />
                    <small className="text-red-500">{errors?.[name]?.message}</small>
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold text-gray-800">{label}</label>
                    <input
                      className="form_input h-10"
                      type={type}
                      placeholder={
                        name === "password" && userData.id
                          ? "********"
                          : placeholder
                      }
                      {...register(name, validation)}
                      disabled={
                        name === "password" && userData.id !== "" && true
                      }
                    />
                    <small className="text-red-500">{errors?.[name]?.message}</small>
                  </div>
                )}
              </div>
            );
          })}
          <button className="bg-gray-500 hover:bg-gray-600 animation text-white py-2 shadow-md focus:outline-none shadow-gray-800 rounded-sm text-base">
            {loading ? (
              <LoadingRing />
            ) : (
              <>{userData.id === "" ? "Add User" : "Update User"}</>
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddUser;
