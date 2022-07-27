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
    {
      uid: "4",
      title: "Delete Task",
      details: "Details of Delete this task",
      member: "Delete",
    },
  ],
  memberList: [{
    uid: "1",
    member: "Sinatraa",
  },{
    uid: "2",
    member: "TenZ",
  },{
    uid: "3",
    member: "Shroud",
  },{
    uid: "4",
    member: "Delete",
  }],
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
    console.log(state);
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

  // const setInitialTask = () => {
  //   updateState({ ...state, taskList: initialState.taskList });
  // };

  // const getTaskInfo = (id) =>
  //   state.taskList.find((task) => task.id.toString() === id.toString());

  const deleteTask = (task) => {
    const newList = [...state.taskList].filter((item) => item.uid !== task);
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

  // const setInitialMember = () => {
  //   updateState({ ...state, memberList: initialState.memberList });
  // };

  // const getMemberInfo = (id) =>
  //   state.memberList.find((member) => member.id.toString() === id.toString());

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
