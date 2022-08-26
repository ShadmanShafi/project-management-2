import { TASK_ADD, TASK_UPDATE, TASK_DELETE, LOGOUT } from "./actionTypes";

export const taskAdd = (title, description, member) => {
  return {
    type: TASK_ADD,
    payload: {
      title,
      description,
      member,
    },
  };
};

export const taskUpdate = (id, title, description, member) => {
  return {
    type: TASK_UPDATE,
    payload: {
      id,
      title,
      description,
      member,
    },
  };
};

export const taskDelete = (id) => {
  return {
    type: TASK_DELETE,
    payload: id,
  };
};

export const taskLogout = () => {
  return {
    type: LOGOUT,
  };
};
