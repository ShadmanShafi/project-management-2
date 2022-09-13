// import firebaseDb from "../../../util/firebase";
// import { collection, addDoc } from "firebase/firestore/lite";
import axios from "axios";
import { userLoaded } from "../actions";

// const COLLECTION_NAME = "user";
const baseUrl = "http://localhost:9001";
const registerUser = async (navigate, dispatch, name, email, password, password2) => {
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
    // const user = collection(firebaseDb, COLLECTION_NAME);
    // await addDoc(user, { name, password });
  } catch (error) {
    console.log(error);
  }
};

export default registerUser;
