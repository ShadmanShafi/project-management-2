import firebaseDb from "../../../util/firebase";
import { doc, deleteDoc } from "firebase/firestore/lite";

const COLLECTION_NAME = "tasks";

const clearTasks = (tasksList) => {
  return async () => {
    await tasksList.map((task) =>
      deleteDoc(doc(firebaseDb, COLLECTION_NAME, task.id))
    );
  };
};

export default clearTasks;
