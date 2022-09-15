import axios from "axios";
import { userLoaded } from "../actions";

const baseUrl = "http://localhost:9001";

const loginUser = async (dispatch, email, password) => {
  try {
    const response = await axios.post(`${baseUrl}/public/login`, {
      email,
      password,
    });
    console.log(response.data);
    dispatch(userLoaded(response.data));
  } catch (error) {
    console.log(error);
  }
};

export default loginUser;
