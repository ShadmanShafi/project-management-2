import firebaseDb from "../../../util/firebase";
import { doc, setDoc } from "firebase/firestore/lite";

const COLLECTION_NAME = "tasks";

const updateTaskMember = (oldMemberName, newMemberName, taskList) => {
  // taskList.map((task) => {
  //   if (task.member === oldMemberName) task.member = newMemberName;
  // });

//   return async () => {
//     const tasks = doc(firebaseDb, COLLECTION_NAME, id);
    
//     await setDoc(tasks, { member }, { merge: true });
//   };
};

export default updateTaskMember;
