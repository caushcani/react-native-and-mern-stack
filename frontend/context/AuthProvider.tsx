import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";
import React, { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/store/user.store";
interface IAppContext {
  isLoggedIn: boolean;
  setIsLoggedIn: any;
}

//TODO: api call for user token
export const AuthContext = createContext<IAppContext | any>({
  isLoggedIn: false,
});

const AuthProvider = ({ children }: any) => {
  const [token, setToken] = useState<any>(null);
  const dispatch = useDispatch();

  const login = (val: string) => {
    AsyncStorage.setItem("access_token", val);
    setToken(val);
  };

  const logout = () => {
    AsyncStorage.setItem("access_token", "");
    setToken(null);
  };
  const isLoggedIn = async () => {
    const tkn = await AsyncStorage.getItem("access_token");
    if (tkn) {
      setToken(tkn);
    }
  };

  const parseJwt = (userToken: string) => {
    if (!userToken) {
      return;
    }
    return jwtDecode(userToken);
  };

  if (parseJwt(token)) {
    const decoded = parseJwt(token);
    dispatch(setUser(decoded));
  }
  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
