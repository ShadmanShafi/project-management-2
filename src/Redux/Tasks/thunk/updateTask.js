import firebaseDb from "../../../util/firebase";
import { doc, setDoc } from "firebase/firestore/lite";

const COLLECTION_NAME = "tasks";

const updateTask = (taskId, title, description, member) => {
  const id = taskId.toString();

  return async () => {
    const tasks = doc(firebaseDb, COLLECTION_NAME, id);
    await setDoc(tasks, { id, title, description, member }, { merge: true });
  };
};

export default updateTask;
