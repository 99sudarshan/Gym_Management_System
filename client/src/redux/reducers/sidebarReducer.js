import { TOGGLE_SIDEBAR } from "../Actions/actionTypes";

const initialState = {
  toggle_sidebar: false,
};

export const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, toggle_sidebar: action.payload };

    default:
      return state;
  }
};
