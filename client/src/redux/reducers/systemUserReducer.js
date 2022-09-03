import {
  SET_GROUP_DATA,
  SET_USER_DATA,
  SET_LOGGEDIN_USER,
  REMOVE_LOGGEDIN_USER,
} from "../Actions/actionTypes";

const initialState = {
  loggedIn_user: {},
  group_list: [],
  user_list: [],
};

const systemUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOGGEDIN_USER:
      return {
        ...state,
        loggedIn_user: payload,
      };

    case SET_GROUP_DATA:
      return {
        ...state,
        group_list: payload,
      };
    case SET_USER_DATA:
      return {
        ...state,
        user_list: payload,
      };
    case REMOVE_LOGGEDIN_USER:
      return {
        ...state,
        loggedIn_user: {},
      };
    default:
      return state;
  }
};

export default systemUserReducer;
