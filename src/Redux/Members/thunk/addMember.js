import firebaseDb from "../../../util/firebase";
import { doc, setDoc } from "firebase/firestore/lite";
import { nextMemberId } from "../reducer";

const COLLECTION_NAME = "members";

const addMember = (memberName, membersList) => {
  const id = nextMemberId(membersList).toString();

  return async () => {
    try {
      const members = doc(firebaseDb, COLLECTION_NAME, id);
      await setDoc(members, { id: id, name: memberName });
    } catch (error) {
      console.log(error);
    }
  };
};

export default addMember;
