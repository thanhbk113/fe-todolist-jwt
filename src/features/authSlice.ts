import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { User } from "../share/type";

interface InitialState {
  user: User | null;
}

const initialState: InitialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const authSelector = (state: RootState) => state.auth.user;

export default authSlice.reducer;
