import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";

const updateCardService = async (board, listId, cardId, cardContent, currentUser) => {
  try {
    const boardDoc = doc(db, "boards", board.id);
    const todaysDate = new Date().toDateString();

    const cardObj = {
      cardId: cardId,
      cardContent: cardContent,
      lastEditedBy: currentUser.userName,
      lastEditTime: todaysDate,
    };

    let cardList = board.lists.find((item) => item.listId === listId);

    const unEditedCards = cardList.cards.filter(
      (item) => item.cardId !== cardId
    );

    cardList = { ...cardList, cards: [...unEditedCards, cardObj] };

    const otherLists = board.lists.filter((item) => item.listId !== listId);

    await updateDoc(boardDoc, {
      lists: [...otherLists, cardList],
    });
  } catch (error) {
    console.error(error);
  }
};

export { updateCardService };
