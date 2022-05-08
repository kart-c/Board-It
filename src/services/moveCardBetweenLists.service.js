import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";

const moveCardBetweenListsService = async (
  board,
  sourceListId,
  destinationListId,
  cardId
) => {
  try {
    const boardDoc = doc(db, "boards", board.id);

    let sourceList = board.lists.find((item) => item.listId === sourceListId);

    let destinationList = board.lists.find(
      (item) => item.listId === destinationListId
    );

    const currentCard = sourceList.cards.find((item) => item.cardId === cardId);

    const otherLists = board.lists.filter(
      (item) =>
        item.listId !== sourceListId && item.listId !== destinationListId
    );

    sourceList = {
      ...sourceList,
      cards: sourceList.cards.filter((item) => item.cardId !== cardId),
    };

    destinationList = {
      ...destinationList,
      cards: [...destinationList.cards, currentCard],
    };

    await updateDoc(boardDoc, {
      lists: [...otherLists, sourceList, destinationList],
    });
  } catch (error) {
    console.error(error);
  }
};

export { moveCardBetweenListsService };
