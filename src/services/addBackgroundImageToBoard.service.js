import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";

const addBackgroundImageToBoardService = async (board, bgImg) => {
  try {
    const boardDoc = doc(db, "boards", board.id);

    await updateDoc(boardDoc, {
      backgroundImg: bgImg,
    });
  } catch (error) {
    console.error(error);
  }
};

export { addBackgroundImageToBoardService };
