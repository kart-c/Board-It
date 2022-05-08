import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase.config";

const addNewBoardService = async (user, boardTitle) => {
  try {
    const boardsCollectionRef = collection(db, "boards");

    const editorUserObj = {
      editorId: user.id,
      editorName: user.userName,
      editorImg: user.userImgUrl,
    };

    const boardObj = {
      adminId: user.id,
      adminName: user.userName,
      boardTitle,
      editors: [editorUserObj],
      lists: [],
      visitors: [],
    };
    const response = await addDoc(boardsCollectionRef, boardObj);
    return response.id;
  } catch (error) {
    console.error(error);
  }
};

export { addNewBoardService };
