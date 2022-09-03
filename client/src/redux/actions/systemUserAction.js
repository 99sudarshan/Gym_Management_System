import {
  SET_GROUP_DATA,
  SET_LOGGEDIN_USER,
  SET_USER_DATA,
  REMOVE_LOGGEDIN_USER,
} from "./actionTypes";

export const setLoggedInUser = (data) => {
  return {
    type: SET_LOGGEDIN_USER,
    payload: data,
  };
};

export const removeLoggedInUser = () => {
  return {
    type: REMOVE_LOGGEDIN_USER,
  };
};

export const setSystemGroupData = (data) => {
  return {
    type: SET_GROUP_DATA,
    payload: data,
  };
};

export const setSystemUserData = (data) => {
  return {
    type: SET_USER_DATA,
    payload: data,
  };
};
