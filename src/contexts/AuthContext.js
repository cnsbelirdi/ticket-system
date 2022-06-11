import React, { useContext, createContext, useState } from "react";

const AuthContext = createContext(undefined);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState({
    username: '',
    role: '',
    token: '',
  });


  return (
    <AuthContext.Provider value={[user, setUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) throw "AuthContext cannot be used outside of AuthProvider!";

  return context;
}

export default AuthProvider;