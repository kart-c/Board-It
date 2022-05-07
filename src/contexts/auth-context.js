import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";

const defaultValue = {
  currentUser: null,
};

const AuthContext = createContext(defaultValue);

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        console.log("Logged In");
      } else {
        console.log("You're logged Out, Please Login");
      }
    });
  }, []);

  const value = {
    currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthContextProvider };
