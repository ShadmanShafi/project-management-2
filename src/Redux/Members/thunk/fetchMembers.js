import axios from "axios";
import { memberLoaded } from "../actions";

const baseUrl = "http://localhost:9001";

const fetchMembers = async (dispatch, userToken) => {
  try {
    const response = await axios({
      url: `${baseUrl}/private/members`,
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      method: "GET",
      body: {},
    });
    console.log(response.data.members);
    dispatch(memberLoaded(response.data.members));
  } catch (error) {
    console.log(error);
  }
};

export default fetchMembers;
