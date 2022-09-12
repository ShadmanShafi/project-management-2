import firebaseDb from "../../../util/firebase";
import { doc, setDoc } from "firebase/firestore/lite";
import { nextTaskId } from "../reducer";

const COLLECTION_NAME = "tasks";

const addTask = (title, description, member, taskList) => {
  const id = nextTaskId(taskList).toString();

  return async () => {
    const tasks = doc(firebaseDb, COLLECTION_NAME, id);
    await setDoc(tasks, { id, title, description, member });
  };
};

export default addTask;
