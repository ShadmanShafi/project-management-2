import firebaseDb from "../../../util/firebase";
import { doc, deleteDoc } from "firebase/firestore/lite";

const COLLECTION_NAME = "members";

const deleteMember = (memberName) => {
  const id = memberName.toString();

  return async () => {
    try {
      await deleteDoc(doc(firebaseDb, COLLECTION_NAME, id));
    } catch (error) {
      console.log(error);
    }
  };
};

export default deleteMember;
