import React, { createContext, useState } from "react";

interface IAppContext {
  isLoggedIn: boolean;
}

//TODO: api call for user token
export const AuthContext = createContext<IAppContext>({
  isLoggedIn: false,
});

const AuthProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
