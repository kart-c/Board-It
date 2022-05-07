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

    await addDoc(boardsCollectionRef, boardObj);
  } catch (error) {
    console.error(error);
  }
};

export { addNewBoardService };
