import { v4 as uuid } from "uuid";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";

const addNewListService = async (board, listTitle) => {
  try {
    const boardDoc = doc(db, "boards", board.id);

    const listObj = {
      listId: uuid(),
      listTitle: listTitle,
      cards: [],
    };

    await updateDoc(boardDoc, {
      lists: [...board.lists, listObj],
    });
  } catch (error) {
    console.error(error);
  }
};

export { addNewListService };
