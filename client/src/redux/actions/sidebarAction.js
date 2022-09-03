import { TOGGLE_SIDEBAR } from "./actionTypes";

export const toggleSidebar = (data) => {
  return {
    type: TOGGLE_SIDEBAR,
    payload: data,
  };
};
