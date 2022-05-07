import { getDocs, collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase.config";

const getBoardsService = async (setBoards) => {
  try {
    const boardsCollectionRef = collection(db, "boards");
    await getDocs(boardsCollectionRef);

    onSnapshot(boardsCollectionRef, (response) => {
      const demoBoards = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBoards(demoBoards);
    });
  } catch (error) {
    console.error(error);
  }
};

export { getBoardsService };
