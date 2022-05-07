import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";

const editListTitleService = async (board, listId, listTitle) => {
  try {
    const boardDoc = doc(db, "boards", board.id);

    let cardList = board.lists.find((item) => item.listId === listId);

    cardList = { ...cardList, listTitle: listTitle };

    const otherLists = board.lists.filter((item) => item.listId !== listId);

    await updateDoc(boardDoc, {
      lists: [...otherLists, cardList],
    });
  } catch (error) {
    console.error(error);
  }
};

export { editListTitleService };
