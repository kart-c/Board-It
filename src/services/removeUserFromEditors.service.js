import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.config";

const removeUserFromEditorsService = async (editor, board) => {
  try {
    const boardDoc = doc(db, "boards", board.id);
    const updatedEditors = board.editors.filter(
      (item) => item.editorId !== editor.editorId
    );

    const newVisitor = {
      visitorId: editor.editorId,
      visitorName: editor.editorName,
      visitorImg: editor.editorImg,
    };
    const updatedVisitors = [...board.visitors, newVisitor];

    await updateDoc(boardDoc, {
      visitors: updatedVisitors,
      editors: updatedEditors,
    });
    
  } catch (error) {
    console.error(error);
  }
};

export { removeUserFromEditorsService };
