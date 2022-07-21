import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

const initialState = {
  name: "",
  taskList: [],
  memberList: [],
};

const UserContext = createContext({
  ...initialState,
  setName: () => {},
});

export function MyProvider({ children }) {
  const [state, updateState] = useState(initialState);
  const navigate = useNavigate();

  useEffect(() => {
    const adminStore = JSON.parse(localStorage.getItem("adminStore"));
    if (adminStore) updateState(adminStore);
  }, []);

  useEffect(() => {
    localStorage.setItem("adminStore", JSON.stringify(initialState));
  }, [initialState]);

  const setName = (newValue) => {
    updateState({ ...state, name: newValue });
  };

  const logout = () => {
    updateState(initialState);

    navigate("/");
  };

  const setTaskList = (newValue) => {
    const uid = v4();
    const array = [...state.taskList];
    array.push({ id: uid, ...newValue });
    updateState({ ...state, taskList: array });
  };

  const updateTask = (task) => {
    const newList = state.taskList;
    for (let i in newList) {
      if (newList[i].id === task.id) {
        newList[i] = task;
        break;
      }
    }
    updateState({ ...state, taskList: newList });
  };

  const setInitialTask = () => {
    updateState({ ...state, taskList: initialState.taskList });
  };

  const getTaskInfo = (id) =>
    state.taskList.find((task) => task.id.toString() === id.toString());

  const deleteTask = (task) => {
    const newList = [...state.taskList].filter((item) => item.id !== task.id);
    updateState({ ...state, taskList: newList });
  };

  const setMemberList = (newValue) => {
    const uid = v4();
    const array = [...state.memberList];
    array.push({ id: uid, ...newValue });
    updateState({ ...state, memberList: array });
  };

  const updateMember = (member) => {
    const newList = state.memberList;
    for (let i in newList) {
      if (newList[i].id === member.id) {
        newList[i] = member;
        break;
      }
    }
    updateState({ ...state, memberList: newList });
  };

  const setInitialMember = () => {
    updateState({ ...state, memberList: initialState.memberList });
  };

  const getMemberInfo = (id) =>
    state.memberList.find((member) => member.id.toString() === id.toString());

  const deleteMember = (member) => {
    const newList = [...state.memberList].filter(
      (item) => item.id !== member.id
    );
    updateState({ ...state, memberList: newList });
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        setName,
        logout,
        setTaskList,
        updateTask,
        setMemberList,
        updateMember,
        setInitialTask,
        setInitialMember,
        getTaskInfo,
        getMemberInfo,
        deleteTask,
        deleteMember,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);

export default UserContext;
