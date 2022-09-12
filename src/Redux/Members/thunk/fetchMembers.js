import { memberLoaded } from "../actions";
import firebaseDb from "../../../util/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import axios from "axios";

const COLLECTION_NAME = "members";
const baseUrl = "http://localhost:9001"
const fetchMembers = async (dispatch, token) => {
  try {
    // const response2 = await axios({
    //   url: `${baseUrl}/private/users`,
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   },
    //   method: "GET",
    //   body: {}
    // })
    const members = collection(firebaseDb, COLLECTION_NAME);
    const snapshot = await getDocs(members);
    const response = snapshot.docs.map((doc) => doc.data());

    dispatch(memberLoaded(response));
  } catch (error) {
    console.log(error);
  }
};

export default fetchMembers;
