import axiosInstance from "../axiosInstance";
import { showErrorToast, showSuccessToast } from "../../Toastify/showToast";

export const handleLogin = async (data, navigate, setLoading) => {
  try {
    const res = await axiosInstance.post(`/accounts/login/`, data);
    localStorage.setItem("access_token", res.data.access);
    localStorage.setItem("refresh_token", res.data.refresh);
    localStorage.setItem("user_type", res.data.user_type);
    navigate("/dashboard");
    showSuccessToast("Logged in sucessfully.");
    setLoading(false);
  } catch (err) {
    console.log(err);
    setLoading(false);
    if (err.response.status === 500) {
      showErrorToast("Internal server error!");
    } else {
      showErrorToast(err.response.data.detail);
    }
  }
};

export const handleLogout = async (navigate) => {
  try {
    const refresh_token = localStorage.getItem("refresh_token");
    await axiosInstance.post(`/accounts/logout/`, { refresh: refresh_token });
    localStorage.clear();
    navigate("/");
  } catch (err) {
    console.log(err);
    if (err.response.status === 500) {
      showErrorToast("Internal server error!");
    } else {
      showErrorToast(err.response.data.detail);
    }
  }
};

export const handleChangePassword = async (data, setLoading) => {
  try {
    await axiosInstance.post(`/accounts/change-password/`, data);
    setTimeout(() => {
      window.location.reload();
    }, 3000);
    setLoading(false);
    showSuccessToast("Password changed successfully.");
  } catch (err) {
    setLoading(false);
    console.log(err.response);
    if (err.response.status === 500) {
      showErrorToast("Internal server error!");
    } else {
      showErrorToast(err.response.data.detail) ||
        showErrorToast(err.response.data.new_password[0]);
    }
  }
};

export const handleForgotPassword = async (
  data,
  reset,
  navigate,
  setLoading
) => {
  try {
    await axiosInstance.post(`/accounts/password_reset/`, data);
    setLoading(false);
    navigate("/reset-password");
    showSuccessToast("Mail has been sent into your email");
    reset({ ...data, email: "" });
  } catch (err) {
    console.log(err);
    setLoading(false);
    if (err.response.status === 500) {
      showErrorToast("Internal server error!");
    } else {
      showErrorToast("No user found for given email!");
    }
  }
};

export const handleResetPassword = async (data, setLoading, navigate) => {
  try {
    await axiosInstance.post(`/accounts/password_reset/confirm/`, data);
    setLoading(false);
    navigate("/");
    showSuccessToast("Password reset successfully.");
  } catch (err) {
    console.log(err.response);
    setLoading(false);
    if (err.response.status === 500) {
      showErrorToast("Internal server error!");
    } else if (err.response.data.password) {
      showErrorToast(err.response.data.password[0]);
    } else {
      showErrorToast("Token is invalid!");
    }
  }
};
