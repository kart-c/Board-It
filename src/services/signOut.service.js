import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";

const signOutService = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
};

export { signOutService };
