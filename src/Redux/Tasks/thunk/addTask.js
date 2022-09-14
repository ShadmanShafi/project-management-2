// import firebaseDb from "../../../util/firebase";
// import { doc, setDoc } from "firebase/firestore/lite";
import axios from "axios";
// import { nextTaskId } from "../reducer";

// const COLLECTION_NAME = "tasks";
const baseUrl = "http://localhost:9001";
const addTask = async (navigate, userToken, title, description, memberId) => {
  // const id = nextTaskId(taskList).toString();

  // return async () => {
  //   const tasks = doc(firebaseDb, COLLECTION_NAME, id);
  //   await setDoc(tasks, { id, title, description, member });
  // };
  try {
    const response = await axios({
      url: `${baseUrl}/private/tasks`,
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      method: "POST",
      data: {
        title,
        description,
        memberId,
      },
    });
    console.log(response.data);
    navigate("/tasks");
  } catch (error) {
    console.log(error);
  }
};

export default addTask;
