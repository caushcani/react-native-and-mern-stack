import React, { useContext } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import AuthProvider from "./context/AuthProvider";
import axiosInit from "./initializers/axios";
import Nav from "./navigation/Nav";
import store from "./store/store";
export default function App() {
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
