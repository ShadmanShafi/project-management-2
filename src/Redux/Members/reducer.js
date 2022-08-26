import {
  MEMBER_ADD,
  MEMBER_UPDATE,
  MEMBER_DELETE,
  LOGOUT,
} from "./actionTypes";

const initialState = [
  {
    id: 1,
    name: "Sinatraa",
  },
  {
    id: 2,
    name: "TenZ",
  },
];

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
      return [
        ...state,
        {
          id: nextMemberId(state),
          name: action.payload,
        },
      ];

    case MEMBER_UPDATE:
      const { id, name } = action.payload;
      return state.map((member) => {
        if (member.id != id) {
          return member;
        }
        return {
          ...member,
          name,
        };
      });

    case MEMBER_DELETE:
      return state.filter((member) => member.id !== id);

    case LOGOUT:
      return [];

    default:
      return state;
  }
};

export default membersReducer;
