import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.config";

const addUserToEditorsService = async (visitor, board) => {
  try {
    const boardDoc = doc(db, "boards", board.id);
    const updatedVisitors = board.visitors.filter(
      (item) => item.visitorId !== visitor.visitorId
    );

    const newEditor = {
      editorId: visitor.visitorId,
      editorName: visitor.visitorName,
      editorImg: visitor.visitorImg,
    };
    const updatedEditors = [...board.editors, newEditor];

    await updateDoc(boardDoc, {
      visitors: updatedVisitors,
      editors: updatedEditors,
    });
    
  } catch (error) {
    console.error(error);
  }
};

export { addUserToEditorsService };
