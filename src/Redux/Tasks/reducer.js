import { TASK_LOADED, TASK_GET } from "./actionTypes";

const initialState = {
  loader: false,
  tasks: [],
  task: {},
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_LOADED:
      return {
        ...state,
        tasks: action.payload,
      };

    case TASK_GET:
      return {
        ...state,
        task: {
          id: action.payload.id,
          title: action.payload.title,
          description: action.payload.description,
          member: action.payload.member,
        },
      };

    default:
      return state;
  }
};

export default tasksReducer;
