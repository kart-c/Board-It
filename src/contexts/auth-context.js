import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { addUserService } from "../services";

const defaultValue = {
  id: "",
  userName: "",
  email: "",
  userImgUrl: "",
  userBoards: [],
};

const AuthContext = createContext(defaultValue);

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(defaultValue);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userObj = {
          userName: user.displayName,
          email: user.email,
          id: user.uid,
          userImgUrl: user.photoURL,
          userBoards: [],
        };
        addUserService(userObj);
        setCurrentUser(userObj);
        console.log("Logged In");
      } else {
        setCurrentUser(defaultValue);
        console.log("You're logged Out, Please Login");
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthContextProvider };
