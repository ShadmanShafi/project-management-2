import { USER_LOADED, USER_ADD, LOGOUT } from "./actionTypes";

const initialState = {
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        ...action.payload.user,
        token: action.payload.token
      };

    case USER_ADD:
      const { name, password } = action.payload;
      return {
        ...state,
        name,
        password,
      };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
