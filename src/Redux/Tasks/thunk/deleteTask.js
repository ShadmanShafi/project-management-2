import firebaseDb from "../../../util/firebase";
import { doc, deleteDoc } from "firebase/firestore/lite";

const COLLECTION_NAME = "tasks";

const deleteTask = (taskId) => {
  const id = taskId.toString();

  return async () => {
    await deleteDoc(doc(firebaseDb, COLLECTION_NAME, id));
  };
};

export default deleteTask;
