import firebaseDb from "../../../util/firebase";
import { doc, addDoc } from "firebase/firestore/lite";

const COLLECTION_NAME = "user";

const addUser = (name) => {
  return async () => {
    const user = doc(firebaseDb, COLLECTION_NAME);
    await addDoc(user, {name});
  };
};

export default addUser;
