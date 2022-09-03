import {
  SELECTED_VALID_MEMBER,
  SET_EXPIRED_MEMBERS,
  SET_EXPIRY_VALID_MEMBERS,
  SET_MEMBERS,
  SET_VALID_MEMBERS,
  SET_JOINED_MEMBERS_COUNT,
  SET_MEMBER_BY_ID,
  REMOVE_SELECTED_MEMBER,
  REMOVE_SELECTED_VALID_MEMBER,
} from "../Actions/actionTypes";

const initialState = {
  all_members: [],
  valid_members: [],
  expired_members: [],
  expiry_valid_members: [],
  joined_members_count: [],
  selected_valid_member: {},
  selected_member: {},
};

export const membersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MEMBERS:
      return { ...state, all_members: payload };
    case SET_VALID_MEMBERS:
      return { ...state, valid_members: payload };
    case SET_EXPIRED_MEMBERS:
      return { ...state, expired_members: payload };
    case SET_EXPIRY_VALID_MEMBERS:
      return { ...state, expiry_valid_members: payload };
    case SELECTED_VALID_MEMBER:
      return {
        ...state,
        selected_valid_member: payload,
      };
    case SET_JOINED_MEMBERS_COUNT:
      return {
        ...state,
        joined_members_count: payload,
      };
    case SET_MEMBER_BY_ID:
      return {
        ...state,
        selected_member: payload,
      };
    case REMOVE_SELECTED_MEMBER:
      return {
        ...state,
        selected_member: {},
      };
    case REMOVE_SELECTED_VALID_MEMBER:
      return {
        ...state,
        selected_valid_member: {},
      };
    default:
      return state;
  }
};
