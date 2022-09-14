import axios from "axios";
import { taskLoaded } from "../actions";
// import firebaseDb from "../../../util/firebase";
// import { collection, getDocs } from "firebase/firestore/lite";

const baseUrl = "http://localhost:9001";
const fetchTasks = async (dispatch, userToken) => {
  // const tasks = collection(firebaseDb, COLLECTION_NAME);
  // const snapshot = await getDocs(tasks);
  // const response = snapshot.docs.map((doc) => doc.data());
  try {
    const response = await axios({
      url: `${baseUrl}/private/tasks`,
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      method: "GET",
      body: {},
    });
    console.log(response.data.tasks);
    dispatch(taskLoaded(response.data.tasks));
  } catch (error) {
    console.log(error);
  }
};

export default fetchTasks;
