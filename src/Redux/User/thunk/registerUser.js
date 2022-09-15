import axios from "axios";
import { userLoaded } from "../actions";

const baseUrl = "http://localhost:9001";

const registerUser = async (
  navigate,
  dispatch,
  name,
  email,
  password,
  password2
) => {
  try {
    const response = await axios({
      url: `${baseUrl}/public/register`,
      method: "POST",
      data: {
        name,
        email,
        password,
        password2,
      },
    });
    console.log(response.data);
    dispatch(userLoaded(response.data));
    navigate("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

export default registerUser;
