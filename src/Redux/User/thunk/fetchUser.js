import firebaseDb from "../../../util/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import { userLoaded } from "../actions";

const COLLECTION_NAME = "user";

const fetchUser = async (dispatch) => {
  const user = collection(firebaseDb, COLLECTION_NAME);
  const snapshot = await getDocs(user);
  const response = snapshot.docs.map((doc) => doc.data());

  dispatch(userLoaded(response));
};

export default fetchUser;
