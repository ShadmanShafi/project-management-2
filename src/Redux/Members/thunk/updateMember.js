import firebaseDb from "../../../util/firebase";
import {  doc, setDoc } from "firebase/firestore/lite";

const COLLECTION_NAME = "members";

const updateMember = (memberId, memberName) => {
  const id = memberId.toString();

  return async () => {
    const members = doc(firebaseDb, COLLECTION_NAME, id);
    await setDoc(members, { id: id, name: memberName }, { merge: true });
  };
};

export default updateMember;
