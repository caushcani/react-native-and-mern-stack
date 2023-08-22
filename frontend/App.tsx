import React, { useContext } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import AuthProvider, { AuthContext } from "./context/AuthProvider";
import axiosInit from "./initializers/axios";
import Nav from "./navigation/Nav";
import store from "./store/store";
export default function App() {
  const { login } = useContext(AuthContext);
  axiosInit();
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <AuthProvider>
          <Nav />
        </AuthProvider>
      </Provider>
    </View>
  );
}
