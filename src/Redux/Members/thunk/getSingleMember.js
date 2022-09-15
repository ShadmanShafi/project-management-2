import axios from "axios";
import { memberGet } from "../actions";

const baseUrl = "http://localhost:9001";

const getSingleMember = async (dispatch, userToken, id) => {
  try {
    const response = await axios({
      url: `${baseUrl}/private/members/${id}`,
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      method: "GET",
      body: {},
    });
    console.log(response.data.member);
    dispatch(memberGet(response.data.member.id, response.data.member.name));
  } catch (error) {
    console.log(error);
  }
};

export default getSingleMember;
