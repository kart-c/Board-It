import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { addUserService } from "../services";

const defaultValue = {
  id: "",
  userName: "",
  email: "",
  userImgUrl: "",
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
        };

        addUserService(userObj);
        setCurrentUser(userObj);
      } else {
        setCurrentUser(defaultValue);
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
