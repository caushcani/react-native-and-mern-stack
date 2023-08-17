import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserState {
  name: string;
  email:string
  exp: string;
  iat: string;
  id: string;
}
const userStore = createSlice({
  name: "user",
  initialState: {} as IUserState, 
  reducers: {
    setUser(_state, action: PayloadAction<any>) {
      return action.payload;
    }
  },
});

export default userStore;

export const {
  setUser
} = userStore.actions;
