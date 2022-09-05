import {
  MEMBER_LOADED,
  MEMBER_ADD,
  MEMBER_GET,
  MEMBER_UPDATE,
  MEMBER_DELETE,
  LOGOUT,
} from "./actionTypes";

export const memberLoaded = (members) => {
  return {
    type: MEMBER_LOADED,
    payload: members,
  };
};

export const memberAdd = (name) => {
  return {
    type: MEMBER_ADD,
    payload: name,
  };
};

export const memberGet = (id, name) => {
  return {
    type: MEMBER_GET,
    payload: {
      id,
      name,
    },
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
  // console.log(id)
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
