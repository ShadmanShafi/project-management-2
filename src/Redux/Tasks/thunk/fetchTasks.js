import { taskLoaded } from "../actions";
import firebaseDb from "../../../util/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

const COLLECTION_NAME = "tasks";

const fetchTasks = async (dispatch) => {
  const tasks = collection(firebaseDb, COLLECTION_NAME);
  const snapshot = await getDocs(tasks);
  const response = snapshot.docs.map((doc) => doc.data());

  dispatch(taskLoaded(response));
};

export default fetchTasks;
