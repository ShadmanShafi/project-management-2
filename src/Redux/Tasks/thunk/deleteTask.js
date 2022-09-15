import axios from "axios";

const baseUrl = "http://localhost:9001";

const deleteTask = async (userToken, taskId) => {
  try {
    const response = await axios({
      url: `${baseUrl}/private/tasks/${taskId}`,
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      method: "DELETE",
      body: {},
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export default deleteTask;
