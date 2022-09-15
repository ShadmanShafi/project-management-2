import axios from "axios";

const baseUrl = "http://localhost:9001";

const addMember = async (navigate, userToken, memberName) => {
  try {
    const response = await axios({
      url: `${baseUrl}/private/members`,
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      method: "POST",
      data: {
        name: memberName,
      },
    });
    console.log(response.data);
    navigate("/members");
  } catch (error) {
    console.log(error);
  }
};

export default addMember;
