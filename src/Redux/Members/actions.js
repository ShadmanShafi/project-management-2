import {
  MEMBER_LOADED,
  MEMBER_GET,
} from "./actionTypes";

export const memberLoaded = (members) => {
  return {
    type: MEMBER_LOADED,
    payload: members,
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