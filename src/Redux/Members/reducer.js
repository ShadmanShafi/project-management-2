import {
  MEMBER_ADD,
  MEMBER_GET,
  MEMBER_UPDATE,
  MEMBER_DELETE,
  LOGOUT,
} from "./actionTypes";

const initialState = {
  members: [],
  member: {},
};

//helper functions
const nextMemberId = (members) => {
  const maxId = members.reduce(
    (maxId, member) => Math.max(member.id, maxId),
    -1
  );
  return maxId + 1;
};

const membersReducer = (state = initialState, action) => {
  switch (action.type) {
    case MEMBER_ADD:
      const array = [...state.members];
      array.push({ id: nextMemberId(state.members), name: action.payload });
      return {
        ...state,
        members: array,
      };

    case MEMBER_GET:
      return {
        ...state,
        member: { id: action.payload.id, name: action.payload.name },
      };

    case MEMBER_UPDATE:
      const { id, name } = action.payload;
      // const index = state.members.findIndex((item) => item.id === id);
      const items = [...state.members];
      items[id].name = name;
      return {
        ...state,
        members: items,
      };

    case MEMBER_DELETE:
      const arr = state.members.filter((item) => item.id != action.payload);
      return {
        ...state,
        members: arr,
      };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default membersReducer;
