import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";

const addUserAsVisitorService = async (board, user) => {
  try {
    const boardDoc = doc(db, "boards", board.id);

    const otherVisitors = board.visitors.filter(
      (item) => item.visitorId !== user.id
    );

    const visitorObj = {
      visitorId: user.id,
      visitorName: user.userName,
      visitorImg: user.userImgUrl,
    };

    await updateDoc(boardDoc, {
      visitors: [...otherVisitors, visitorObj],
    });
  } catch (error) {
    console.error(error);
  }
};

export { addUserAsVisitorService };
