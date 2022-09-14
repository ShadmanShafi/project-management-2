// import firebaseDb from "../../../util/firebase";
// import { doc, setDoc } from "firebase/firestore/lite";
import axios from "axios";

// const COLLECTION_NAME = "members";
const baseUrl = "http://localhost:9001";
const updateMember = async (navigate, userToken, memberId, name) => {
  try {
    const response = await axios({
      url: `${baseUrl}/private/members/${memberId}`,
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      method: "PATCH",
      data: {
        name,
      },
    });
    console.log(response.data);
    navigate("/members");
  } catch (error) {
    console.log(error);
  }
  // const id = memberId.toString();
  // return async () => {
  //   try {
  //     const members = doc(firebaseDb, COLLECTION_NAME, id);
  //     await setDoc(members, { id: id, name: memberName }, { merge: true });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
};

export default updateMember;
