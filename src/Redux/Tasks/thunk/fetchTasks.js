import axios from "axios";
import { taskLoaded } from "../actions";

const baseUrl = "http://localhost:9001";

const fetchTasks = async (dispatch, userToken) => {
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
