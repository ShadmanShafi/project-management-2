// import firebaseDb from "../../../util/firebase";
// import { collection, getDocs } from "firebase/firestore/lite";
import axios from "axios";
import { userLoaded } from "../actions";

// const COLLECTION_NAME = "user";
const baseUrl = "http://localhost:9001"
const loginUser = async (dispatch, email, password) => {
  try {
    // const user = collection(firebaseDb, COLLECTION_NAME);
    // const snapshot = await getDocs(user);
    // const response = snapshot.docs.map((doc) => doc.data());
    const response = await axios.post(`${baseUrl}/public/login`, {email, password})
    console.log(response.data)
    dispatch(userLoaded(response.data));
  } catch (error) {
    console.log(error);
  }
};

export default loginUser;
