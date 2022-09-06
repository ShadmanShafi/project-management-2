import { memberLoaded } from "../actions";
import firebaseDb from "../../../util/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

const COLLECTION_NAME = "members";

const fetchMembers = async (dispatch) => {
  try {
    const members = collection(firebaseDb, COLLECTION_NAME);
    const snapshot = await getDocs(members);
    const response = snapshot.docs.map((doc) => doc.data());

    dispatch(memberLoaded(response));
  } catch (error) {
    console.log(error);
  }
};

export default fetchMembers;
