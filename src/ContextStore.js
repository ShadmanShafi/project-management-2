import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

const initialState = {
  name: "",
  taskList: [
    {
      uid: "1",
      title: "First Task",
      details: "Details of first task",
      member: "TenZ",
    },
    {
      uid: "2",
      title: "Second Task",
      details: "Details of second task",
      member: "TenZ",
    },
    {
      uid: "3",
      title: "Third Task",
      details: "Details of third task",
      member: "Sinatraa",
    },
  ],
  memberList: [
    {
      uid: "1",
      member: "Sinatraa",
    },
    {
      uid: "2",
      member: "TenZ",
    },
    {
      uid: "3",
      member: "Shroud",
    },
  ],
};

const UserContext = createContext({
  ...initialState,
  setName: () => {},
});

export function MyProvider({ children }) {
  const getLocalItems = () => {
    let list = localStorage.getItem("taskManagementStore");
    return list ? JSON.parse(list) : initialState;
  };
  const [state, updateState] = useState(getLocalItems());
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("taskManagementStore", JSON.stringify(state));
    // console.log(state);
  }, [state]);

  const setName = (newValue) => {
    updateState({ ...state, name: newValue });
  };

  const logout = () => {
    updateState(initialState);

    navigate("/");
  };

  const setTaskList = (newValue) => {
    const id = v4();
    const array = [...state.taskList];
    array.push({ uid: id, ...newValue });
    updateState({ ...state, taskList: array });
  };

  const getTaskInfo = (id) =>
    state.taskList.find((task) => task.uid.toString() === id.toString());

  const editTask = (task) => {
    const index = state.taskList.findIndex((item) => item.uid === task.uid);
    const items = [...state.taskList];
    items[index] = task;
    updateState({ ...state, taskList: items, task });
  };

  const deleteTask = (task) => {
    // console.log(task);
    const newList = state.taskList.filter((item) => item.uid !== task.uid);
    // console.log(newList);
    updateState({ ...state, taskList: newList });
  };

  const setMemberList = (newValue) => {
    const id = v4();
    const array = [...state.memberList];
    array.push({ uid: id, ...newValue });
    updateState({ ...state, memberList: array });
  };

  const getMemberInfo = (id) =>
    state.memberList.find((member) => member.uid.toString() === id.toString());

  const editMember = (member) => {
    const index = state.memberList.findIndex((item) => item.uid === member.uid);
    const items = [...state.memberList];
    items[index] = member;
    updateState({ ...state, memberList: items, member });

    // state.taskList.filter((item) => {if(item.member.member === member.member) console.log(item)})
  };

  const deleteMember = (member) => {
    const newList = state.memberList.filter((item) => item.uid !== member.uid);
    updateState({ ...state, memberList: newList });
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        setName,
        logout,
        setTaskList,
        setMemberList,
        getTaskInfo,
        getMemberInfo,
        editTask,
        editMember,
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
