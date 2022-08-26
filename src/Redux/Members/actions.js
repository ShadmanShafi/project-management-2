import {
  MEMBER_ADD,
  MEMBER_UPDATE,
  MEMBER_DELETE,
  LOGOUT,
} from "./actionTypes";

export const memberAdd = (name) => {
  return {
    type: MEMBER_ADD,
    payload: name,
  };
};

export const memberUpdate = (id, name) => {
  return {
    type: MEMBER_UPDATE,
    payload: {
      id,
      name,
    },
  };
};

export const memberDelete = (id) => {
  return {
    type: MEMBER_DELETE,
    payload: id,
  };
};

export const memberLogout = () => {
  return {
    type: LOGOUT,
  };
};
