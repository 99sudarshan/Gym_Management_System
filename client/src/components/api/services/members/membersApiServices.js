import axiosInstance from "../../axiosInstance";
import * as actions from "../../../../Redux/Actions/membersActions";
import { showErrorToast } from "../../../Toastify/showToast";
import { showSuccessToast } from "../../../Toastify/showToast";

//  members
export const fetchAllMembers =
  (limit, page, searchTerm, memberType) => async (dispatch) => {
    try {
      const response = await axiosInstance.get(
        `/members/non-expired-members/?member_type=${
          memberType ? memberType : ""
        }&search=${searchTerm ? searchTerm : ""}&limit=${
          limit ? limit : 10
        }&page=${page ? page : 1}`
      );
      dispatch(actions.setMembers(response.data));
    } catch (error) {
      console.log(error, "fetch member error");
    }
  };

export const fetchValidMembers =
  (limit, page, searchTerm, status) => async (dispatch) => {
    try {
      const response = await axiosInstance.get(
        `/members/non-expired-members/?limit=${
          limit ? limit : 10
        }&member_type=Valid&status=${status ? status : ""}&page=${
          page ? page : 1
        }&search=${searchTerm ? searchTerm : ""}`
      );
      // console.log(response);
      dispatch(actions.setValidMembers(response.data));
    } catch (error) {
      console.log(error, "fetch valid member error");
    }
  };

export const fetchExpiredMembers =
  (limit, page, searchTerm, memberType) => async (dispatch) => {
    try {
      const response = await axiosInstance.get(
        `/members/expired-members/?member_type=${
          memberType ? memberType : ""
        }&search=${searchTerm ? searchTerm : ""}&limit=${
          limit ? limit : 10
        }&page=${page ? page : 1}`
      );
      // console.log(response);
      dispatch(actions.setExpiredMembers(response.data));
    } catch (error) {
      console.log(error, "expired fetch error");
    }
  };

export const fetchExpiryValidMembers =
  (limit, page, searchTerm) => async (dispatch) => {
    try {
      const response = await axiosInstance.get(
        `/members/non-expired-members/?limit=${
          limit ? limit : 10
        }&member_type=Valid&todayexpiry=1&page=${page ? page : 1}&search=${
          searchTerm ? searchTerm : ""
        }`
      );
      dispatch(actions.setExpiryValidMembers(response.data));
    } catch (error) {
      console.log(error, "epiry valid member fetch");
    }
  };

export const fetchJoinedMembersCount =
  (limit, page, fromDate, toDate) => async (dispatch) => {
    try {
      const response = await axiosInstance.get(
        `/members/daily-admission-data/?from=${fromDate ? fromDate : ""}&to=${
          toDate ? toDate : ""
        }&limit=${limit ? limit : 10}&page=${page ? page : 1}`
      );
      dispatch(actions.setJoinedMembersCount(response.data));
    } catch (error) {
      console.log(error, "admission data");
    }
  };

export const addMembersData =
  (formData, navigate, setLoading) => async (dispatch) => {
    try {
      await axiosInstance.post("/members/", formData);
      dispatch(fetchAllMembers());
      dispatch(fetchValidMembers());
      navigate("/dashboard/members/all");
      showSuccessToast("Member added successfully.");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error, "post error");
      if (error.response.status === 500) {
        showErrorToast("Internal server error!");
      } else {
        showErrorToast(error.response.data.detail);
      }
    }
  };

export const updateMemberData =
  (slug, formData, navigate, setLoading) => async (dispatch) => {
    try {
      await axiosInstance.patch(`/members/${slug}/`, formData);
      dispatch(fetchAllMembers());
      dispatch(fetchValidMembers());
      dispatch(fetchExpiryValidMembers());
      navigate("/dashboard/members/all");
      showSuccessToast("Member updated successfully.");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.response, "patch error");
      if (error.response.status === 500) {
        showErrorToast("Internal server error!");
      } else {
        showErrorToast(error.response.data.detail);
      }
    }
  };

export const fetchMemberDataById =
  (slug, setFormValues, setIsValid) => async (dispatch) => {
    try {
      const response = await axiosInstance.get(`/members/${slug}`);
      const { physical_details, package_details, ...rest } = response.data;
      const data = {
        ...package_details,
        ...physical_details,
        ...rest,
      };
      setFormValues(data);
      dispatch(actions.setMemberById(data));
      data.member_type === "Valid" ? setIsValid(true) : setIsValid(false);
    } catch (error) {
      console.log(error);
    }
  };

export const fetchValidMemberById = (slug) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/members/${slug}/`);
    dispatch(actions.selectedValidMember(response.data));
  } catch (error) {
    console.log(error.response);
  }
};

export const updateValidMemberData =
  (slug, formData, navigate, setLoading) => async (dispatch) => {
    try {
      axiosInstance.patch(`/members/${slug}/`, formData);
      dispatch(fetchAllMembers());
      dispatch(fetchValidMembers());
      navigate("/dashboard/valid-members/details/all");
      showSuccessToast("Member renewed successfully.");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response.status === 500) {
        showErrorToast("Internal server error!");
      } else {
        showErrorToast(error.response.data.detail);
      }
    }
  };

export const deleteMemberData = (id) => async (dispatch) => {
  try {
    await axiosInstance.delete(`/members/${id}`);
    dispatch(fetchAllMembers());
    dispatch(fetchValidMembers());
    dispatch(fetchExpiredMembers());
    dispatch(fetchExpiryValidMembers());
    showSuccessToast("Member deleted successfully.");
  } catch (err) {
    console.log(err.response);
  }
};
