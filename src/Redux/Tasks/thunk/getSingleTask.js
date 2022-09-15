import axios from "axios";
import { taskGet } from "../actions";

const baseUrl = "http://localhost:9001";

const getSingleTask = async (dispatch, userToken, id) => {
  try {
    const response = await axios({
      url: `${baseUrl}/private/tasks/${id}`,
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      method: "GET",
      body: {},
    });
    console.log(response.data.task);
    dispatch(
      taskGet(
        response.data.task.id,
        response.data.task.title,
        response.data.task.description,
        response.data.task.Member.name
      )
    );
  } catch (error) {
    console.log(error);
  }
};

export default getSingleTask;
