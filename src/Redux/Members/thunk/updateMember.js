import axios from "axios";

const baseUrl = "http://localhost:9001";

const updateMember = async (navigate, userToken, memberId, name) => {
  try {
    const response = await axios({
      url: `${baseUrl}/private/members/${memberId}`,
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      method: "PATCH",
      data: {
        name,
      },
    });
    console.log(response.data);
    navigate("/members");
  } catch (error) {
    console.log(error);
  }
};

export default updateMember;
