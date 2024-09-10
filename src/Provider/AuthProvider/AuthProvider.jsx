import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../firebase/config";
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
