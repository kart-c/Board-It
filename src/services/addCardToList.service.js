import { v4 as uuid } from "uuid";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";

const addCardToListService = async (board, listId, cardContent) => {
  try {
    const boardDoc = doc(db, "boards", board.id);

    const cardObj = {
      cardId: uuid(),
      cardContent: cardContent,
    };

    let cardList = board.lists.find((item) => item.listId === listId);

    cardList = { ...cardList, cards: [...cardList.cards, cardObj] };

    const otherLists = board.lists.filter((item) => item.listId !== listId);

    await updateDoc(boardDoc, {
      lists: [...otherLists, cardList],
    });
  } catch (error) {
    console.error(error);
  }
};

export { addCardToListService };
