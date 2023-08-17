import { configureStore } from "@reduxjs/toolkit";
import { setUser } from "../store/user.store";
import rootReducer from "./rootReducer";
import reduxManager from "../../utils/ReduxManager";

const initStore = (currentUser: any) => {
  const appStore = configureStore({
    reducer: rootReducer,
  });
  
  reduxManager.dispatch = appStore.dispatch;
  if (currentUser) {
    appStore.dispatch(setUser(currentUser))
  };
  
  return appStore;
};

export default initStore;
