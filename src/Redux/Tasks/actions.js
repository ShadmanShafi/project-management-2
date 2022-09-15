import {
  TASK_LOADED,
  TASK_GET,
} from "./actionTypes";

export const taskLoaded = (tasks) => {
  return {
    type: TASK_LOADED,
    payload: tasks,
  };
};

export const taskGet = (id, title, description, member) => {
  return {
    type: TASK_GET,
    payload: {
      id,
      title,
      description,
      member,
    },
  };
};