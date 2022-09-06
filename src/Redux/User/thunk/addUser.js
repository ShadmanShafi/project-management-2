import firebaseDb from "../../../util/firebase";
import { collection, addDoc } from "firebase/firestore/lite";

const COLLECTION_NAME = "user";

const addUser = (name) => {
  return async () => {
    try {
      const user = collection(firebaseDb, COLLECTION_NAME);
      await addDoc(user, { name });
    } catch (error) {
      console.log(error);
    }
  };
};

export default addUser;
