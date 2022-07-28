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
    console.log(task)
    const newList = state.taskList.filter((item) => item.uid !== task.uid);
    console.log(newList)
    updateState({ ...state, taskList: newList });
  };

  const setMemberList = (newValue) => {
    const id = v4();
    const array = [...state.memberList];
    array.push({ uid: id, ...newValue });
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
  const setTask = (task) => {
    updateState({...state, task})
  }
  const editTask = (task) => {
    const index = state.taskList.findIndex(vTask => vTask.uid === task.uid)
    const vTasks = [...state.taskList]
    vTasks[index] = task
    updateState({...state, task, taskList: vTasks})

  }
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
        setTask,
        updateState,
        editTask
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);

export default UserContext;
