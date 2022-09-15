import axios from "axios";

const baseUrl = "http://localhost:9001";

const deleteMember = async (userToken, memberId) => {
  try {
    const response = await axios({
      url: `${baseUrl}/private/members/${memberId}`,
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

export default deleteMember;
