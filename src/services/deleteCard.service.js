import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";

const deleteCardService = async (board, listId, cardId) => {
  try {
    const boardDoc = doc(db, "boards", board.id);

    let cardList = board.lists.find((item) => item.listId === listId);

    const unEditedCards = cardList.cards.filter(
      (item) => item.cardId !== cardId
    );

    cardList = { ...cardList, cards: [...unEditedCards] };

    const otherLists = board.lists.filter((item) => item.listId !== listId);

    await updateDoc(boardDoc, {
      lists: [...otherLists, cardList],
    });
  } catch (error) {
    console.error(error);
  }
};

export { deleteCardService };
