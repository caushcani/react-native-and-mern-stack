import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICartState {
  products: any[];
}

const initialState: ICartState = {
  products: [],
};
const cartStore = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(_state, action: PayloadAction<any>) {
      //if present, update quantity, else add as new product
      const found = _state.products.find((p) => p.id === action.payload.id);
      if (found) {
        found.quantity = found.quantity + 1;
      } else {
        _state.products.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    //TODO: later :)
    updateQuantity(_state, action: PayloadAction<any>) {},
  },
});

export default cartStore;

export const { addToCart } = cartStore.actions;
