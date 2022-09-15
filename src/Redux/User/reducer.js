import { USER_LOADED, LOGOUT } from "./actionTypes";

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        ...action.payload.user,
        token: action.payload.token,
      };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
