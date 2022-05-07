import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase.config";

const googleSignInService = async () => {
  const googleProvider = new GoogleAuthProvider();

  try {
    await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.error(error);
  }
};

export { googleSignInService };
