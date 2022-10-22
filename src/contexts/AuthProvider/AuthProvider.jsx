import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  
  const providerLogin = (provider) => signInWithPopup(auth, provider);

  const createUser = ({email, password}) => createUserWithEmailAndPassword(auth, email, password);

  const login = ({email, password}) => signInWithEmailAndPassword(auth, email, password);

  const logOut = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('user', currentUser);
      setUser(currentUser)
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {user, providerLogin, createUser, login, logOut};

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
