import axiosInstance from "../../axiosInstance";
import * as actions from "../../../../Redux/Actions/systemUserAction";
import { showErrorToast } from "../../../Toastify/showToast";
import { showSuccessToast } from "../../../Toastify/showToast";

// group
export const fetchGroupData = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/account/groups/");
    dispatch(actions.setSystemGroupData(response.data.groups));
  } catch (error) {
    console.log(error.response);
  }
};

export const addGroupData =
  (data, setLoading, closeModal) => async (dispatch) => {
    try {
      await axiosInstance.post("/account/groups", data);
      dispatch(fetchGroupData());
      setLoading(false);
      closeModal();
      showSuccessToast("Group added successfully");
    } catch (error) {
      setLoading(false);
      if (error.response === undefined) {
        showErrorToast("Internal server error.");
      } else {
        setLoading(false);
        showErrorToast(error.response.data.message);
      }
    }
  };

export const udateGroupData =
  (id, data, setLoading, closeModal) => async (dispatch) => {
    try {
      await axiosInstance.post(`/account/groups/${id}`, data);
      dispatch(fetchGroupData());
      setLoading(false);
      closeModal();
      showSuccessToast("Group updated successfully");
    } catch (error) {
      setLoading(false);
      if (error.response === undefined) {
        showErrorToast("Internal server error.");
      } else {
        setLoading(false);
        showErrorToast(error.response.data.message);
      }
    }
  };

// users

export const fetchLoggedInUser = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/accounts/profile`);
    dispatch(actions.setLoggedInUser(response.data));
  } catch (error) {
    console.log(error.response);
  }
};

export const fetchUserData = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/accounts/`);
    dispatch(actions.setSystemUserData(response.data));
  } catch (error) {
    console.log(error.response);
  }
};

export const fetchUserDataById = async (id, data, setUserData) => {
  try {
    const response = await axiosInstance.get(`/accounts/${id}/`);
    setUserData({
      ...data,
      id: response.data.id,
      first_name: response.data.first_name,
      last_name: response.data.last_name,
      username: response.data.username,
      email: response.data.email,
      password: "",
      confirm_password: "",
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const addUserData =
  (data, closeModal, setLoading) => async (dispatch) => {
    try {
      await axiosInstance.post(`/accounts/`, data);
      dispatch(fetchUserData());
      setLoading(false);
      closeModal();
      showSuccessToast("User added successfully");
    } catch (error) {
      setLoading(false);
      console.log(error);
      if (error.response === undefined) {
        showErrorToast("Internal server error.");
      } else {
        setLoading(false);
        showErrorToast(error.response.data.password[0]);
      }
    }
  };

export const updataUserData =
  (id, data, closeModal, setLoading) => async (dispatch) => {
    try {
      console.log(data);
      await axiosInstance.patch(`/accounts/${id}/`, data);
      dispatch(fetchUserData());
      setLoading(false);
      closeModal();
      showSuccessToast("User updated successfully");
    } catch (error) {
      setLoading(false);
      if (error.response === undefined) {
        showErrorToast("Internal server error.");
      } else {
        setLoading(false);
        showErrorToast(error.response.data.detail);
      }
    }
  };

export const deleteUserData = (id) => async (dispatch) => {
  try {
    await axiosInstance.delete(`/accounts/${id}`);
    dispatch(fetchUserData());
    showSuccessToast("User deleted successfully.");
  } catch (error) {
    console.log(error.response);
  }
};
