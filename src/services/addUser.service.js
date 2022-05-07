import { getDocs, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase.config";

const addUserService = async (userObj) => {
  try {
    const usersCollectionRef = collection(db, "users");
    const response = await getDocs(usersCollectionRef);
    const demoUsers = response.docs.map((doc) => ({
      ...doc.data(),
    }));
    const checkUser = demoUsers.find((user) => user.id === userObj.id);
    if (!checkUser) {
      await addDoc(usersCollectionRef, userObj);
    }
  } catch (error) {
    console.error(error);
  }
};

export { addUserService };
