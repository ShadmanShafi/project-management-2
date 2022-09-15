import axios from "axios";

const baseUrl = "http://localhost:9001";

const updateTask = async (
  navigate,
  userToken,
  taskId,
  title,
  description,
  member
) => {
  try {
    const response = await axios({
      url: `${baseUrl}/private/tasks/${taskId}`,
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      method: "PATCH",
      data: {
        title,
        description,
        memberId: member,
      },
    });
    console.log(response.data);
    navigate("/tasks");
  } catch (error) {
    console.log(error);
  }
};

export default updateTask;
