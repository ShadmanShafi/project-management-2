import {
  LOADING,
  TASK_GET,
  TASK_ADD,
  TASK_GET_ALL,
  TASK_UPDATE,
  TASK_MEMBER_UPDATE,
  TASK_DELETE,
  LOGOUT,
} from "./actionTypes";

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

export const taskMemberUpdate = (oldMemberName, newMemberName) => {
  return {
    type: TASK_MEMBER_UPDATE,
    payload: {
      oldMemberName,
      newMemberName,
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
