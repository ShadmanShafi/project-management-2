import {
  LOADING,
  TASK_GET_ALL,
  TASK_ADD,
  TASK_GET,
  TASK_UPDATE,
  TASK_MEMBER_UPDATE,
  TASK_DELETE,
  LOGOUT,
} from "./actionTypes";

const initialState = {
  loader: false,
  tasks: [],
  task: {},
};

//helper functions
const nextTaskId = (tasks) => {
  const maxId = tasks.reduce((maxId, task) => Math.max(task.id, maxId), -1);
  return maxId + 1;
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loader: action.payload,
      };

    case TASK_GET_ALL:
      return {
        ...state,
        loader: false,
        tasks: action.payload,
      };

    case TASK_ADD:
      const { title, description, member } = action.payload;
      const array = [...state.tasks];
      array.push({ id: nextTaskId(state.tasks), title, description, member });
      return {
        ...state,
        tasks: array,
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

    case TASK_UPDATE:
      const { id } = action.payload;
      const items = [...state.tasks];
      items[id].title = action.payload.title;
      items[id].description = action.payload.description;
      items[id].member = action.payload.member;
      return {
        ...state,
        tasks: items,
      };

    case TASK_MEMBER_UPDATE:
      const { oldMemberName, newMemberName } = action.payload;
      const arr = [...state.tasks];
      arr.map((task) => {
        if (task.member !== oldMemberName) {
          return task;
        }
        return {
          ...task,
          member: newMemberName,
        };
      });
      return {
        ...state,
        tasks: arr,
      };

    case TASK_DELETE:
      const arra = state.tasks.filter((task) => task.id != action.payload);
      return {
        ...state,
        tasks: arra,
      };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default tasksReducer;
