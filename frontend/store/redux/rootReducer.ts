import { combineReducers } from "@reduxjs/toolkit";
import userStore from "../store/user.store";

const rootReducer = combineReducers({
  user: userStore.reducer,
});

export default rootReducer;
