import { MEMBER_LOADED, MEMBER_GET } from "./actionTypes";

const initialState = {
  members: [],
  member: {},
};

const membersReducer = (state = initialState, action) => {
  switch (action.type) {
    case MEMBER_LOADED:
      return {
        ...state,
        members: action.payload,
      };

    case MEMBER_GET:
      return {
        ...state,
        member: { id: action.payload.id, name: action.payload.name },
      };

    default:
      return state;
  }
};

export default membersReducer;
