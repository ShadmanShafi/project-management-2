// import firebaseDb from "../../../util/firebase";
// import { doc, setDoc } from "firebase/firestore/lite";
import axios from "axios";
// import { nextMemberId } from "../reducer";

// const COLLECTION_NAME = "members";
const baseUrl = "http://localhost:9001";
const addMember = async (userToken, memberName) => {
  try {
    // const id = nextMemberId(membersList).toString();
    const response = await axios({
      url: `${baseUrl}/private/members`,
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      method: "POST",
      data: {
        name: memberName,
      },
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }

  // return async () => {
  //   try {
  //     const members = doc(firebaseDb, COLLECTION_NAME, id);
  //     await setDoc(members, { id: id, name: memberName });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
};

export default addMember;
