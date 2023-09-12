import { createContext, useEffect, useState } from "react";
import getAuth, {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

// export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = () => {
  const [user, setUser] = useState(null);
  const [loading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);

      if (currentUser) {
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser?.email),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.token);
          });
      }
      setUser(currentUser);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
  };

  return <AuthContext.Provider value={authInfo}></AuthContext.Provider>;
};

export default AuthProvider;
