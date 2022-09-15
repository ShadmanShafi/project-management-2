import axios from "axios";

const baseUrl = "http://localhost:9001";

const addTask = async (navigate, userToken, title, description, memberId) => {
  try {
    const response = await axios({
      url: `${baseUrl}/private/tasks`,
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      method: "POST",
      data: {
        title,
        description,
        memberId,
      },
    });
    console.log(response.data);
    navigate("/tasks");
  } catch (error) {
    console.log(error);
  }
};

export default addTask;
