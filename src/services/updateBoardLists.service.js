import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";

const updateBoardListsService = async (board) => {
  try {
    const boardDoc = doc(db, "boards", board.id);

    await updateDoc(boardDoc, {
      lists: [...board.lists],
    });
  } catch (error) {
    console.error(error);
  }
};

export { updateBoardListsService };
