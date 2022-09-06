import { USER_LOADED, USER_ADD, LOGOUT } from "./actionTypes";

const initialState = {
  name: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        name: action.payload,
      };

    case USER_ADD:
      return {
        ...state,
        name: action.payload,
      };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
