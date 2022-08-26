import { TASK_ADD, TASK_UPDATE, TASK_DELETE, LOGOUT } from "./actionTypes";

const initialState = [
  // {
    // id: 1,
    // title: "First todo",
    // description: "This is the first task",
    // member: "member",
  // },
];

//helper functions
const nextTaskId = (tasks) => {
  const maxId = tasks.reduce((maxId, task) => Math.max(task.id, maxId), -1);
  return maxId + 1;
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_ADD:
      const { title, description, member } = action.payload;
      return [
        ...state,
        {
          id: nextTaskId(state),
          title,
          description,
          member,
        },
      ];

    case TASK_UPDATE:
      return state.map((task) => {
        if (task.action.payload.id !== action.payload.id) {
          return task;
        }
        return {
          ...task,
          title: action.payload.title,
          description: action.payload.description,
          member: action.payload.member,
        };
      });

    case TASK_DELETE:
      return state.filter((task) => task.id !== action.payload.id);

    case LOGOUT:
      return [];

    default:
      return state;
  }
};

export default tasksReducer;
