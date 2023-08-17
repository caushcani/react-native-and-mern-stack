import { combineReducers } from "@reduxjs/toolkit";
import cartStore from "../store/cart.store";
import userStore from "../store/user.store";

const rootReducer = combineReducers({
  user: userStore.reducer,
  cart: cartStore.reducer
});

export default rootReducer;
