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
} from "./actionTypes";

export const setMembers = (members) => {
  return {
    type: SET_MEMBERS,
    payload: members,
  };
};

export const setValidMembers = (members) => {
  return {
    type: SET_VALID_MEMBERS,
    payload: members,
  };
};

export const setExpiredMembers = (members) => {
  return {
    type: SET_EXPIRED_MEMBERS,
    payload: members,
  };
};

export const setExpiryValidMembers = (members) => {
  return {
    type: SET_EXPIRY_VALID_MEMBERS,
    payload: members,
  };
};

export const selectedValidMember = (member) => {
  return {
    type: SELECTED_VALID_MEMBER,
    payload: member,
  };
};

export const setJoinedMembersCount = (membersCount) => {
  return {
    type: SET_JOINED_MEMBERS_COUNT,
    payload: membersCount,
  };
};

export const setMemberById = (member) => {
  return {
    type: SET_MEMBER_BY_ID,
    payload: member,
  };
};

export const removeSelectedmember = () => {
  return {
    type: REMOVE_SELECTED_MEMBER,
  };
};
export const removeSelectedValidmember = () => {
  return {
    type: REMOVE_SELECTED_VALID_MEMBER,
  };
};
