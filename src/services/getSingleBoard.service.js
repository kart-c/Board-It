import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase.config";

const getSingleBoardService = async (boardId, setBoard) => {
  try {
    const boardsCollectionRef = collection(db, "boards");
    const response = await getDocs(boardsCollectionRef);

    const demoBoards = response.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    const singleBoard = demoBoards.find((board) => board.id === boardId);

    setBoard(singleBoard);
  } catch (error) {
    console.error(error);
  }
};

export { getSingleBoardService };
