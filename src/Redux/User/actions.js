import { USER_LOADED, USER_ADD, LOGOUT } from "./actionTypes";

export const userLoaded = (user) => {
  return {
    type: USER_LOADED,
    payload: user,
  };
};

export const userAdd = (name, password) => {
  return {
    type: USER_ADD,
    payload: { name, password },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
