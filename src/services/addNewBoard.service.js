import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase.config";

const addNewBoardService = async (user, boardTitle) => {
  try {
    const boardsCollectionRef = collection(db, "boards");

    const boardObj = {
      adminId: user.id,
      adminName: user.userName,
      boardTitle,
      editors: [user.id],
      lists: [],
    };
    const response = await addDoc(boardsCollectionRef, boardObj);
    return response.id;
  } catch (error) {
    console.error(error);
  }
};

export { addNewBoardService };
