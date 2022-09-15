import { USER_LOADED, LOGOUT } from "./actionTypes";

export const userLoaded = (user) => {
  return {
    type: USER_LOADED,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
