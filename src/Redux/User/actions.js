import { USER_LOADED, USER_ADD, LOGOUT } from "./actionTypes";

export const userLoaded = (user) => {
  return {
    type: USER_LOADED,
    payload: user,
  };
};

export const userAdd = (name) => {
  return {
    type: USER_ADD,
    payload: name,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
