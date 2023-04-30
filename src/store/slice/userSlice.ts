import { createSlice } from "@reduxjs/toolkit";
import { type RootState } from "../store";
import { IUserState } from "./model";

const initialState: IUserState = {
  value: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setValue } = userSlice.actions;

export const selectUserId = (state: RootState) => state.user;

export default userSlice.reducer;
