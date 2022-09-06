import firebaseDb from "../../../util/firebase";
import { doc, deleteDoc } from "firebase/firestore/lite";

const COLLECTION_NAME = "members";

const clearMembers = (membersList) => {
  return async () => {
    await membersList.map((member) =>
      deleteDoc(doc(firebaseDb, COLLECTION_NAME, member.id))
    );
  };
};

export default clearMembers;
