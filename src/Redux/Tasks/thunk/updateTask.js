// import firebaseDb from "../../../util/firebase";
// import { doc, setDoc } from "firebase/firestore/lite";
import axios from "axios";

// const COLLECTION_NAME = "tasks";
const baseUrl = "http://localhost:9001";
const updateTask = async (navigate, userToken, taskId, title, description, member) => {
  // const id = taskId.toString();

  // return async () => {
  //   const tasks = doc(firebaseDb, COLLECTION_NAME, id);
  //   await setDoc(tasks, { id, title, description, member }, { merge: true });
  // };
  try {
    const response = await axios({
      url: `${baseUrl}/private/tasks/${taskId}`,
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      method: "PATCH",
      data: {
        title,
        description,
        memberId: member,
      },
    });
    console.log(response.data);
    navigate("/tasks");
  } catch (error) {
    console.log(error);
  }
};

export default updateTask;
