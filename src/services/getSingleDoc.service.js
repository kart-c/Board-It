import { getDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase.config";

const getSingleDocService = async (docId, setterFunc) => {
  const docRef = doc(db, "boards", docId);

  try {
    getDoc(docRef).then((doc) => setterFunc({ ...doc.data(), id: doc.id }));
    onSnapshot(doc(db, "boards", docId), (doc) => {
      setterFunc({ ...doc.data(), id: doc.id });
    });
  } catch (error) {
    console.error(error);
  }
};

export { getSingleDocService };
