import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { todoApi } from "../api/todoAPi";
import { RootState } from "../app/store";
import { User } from "../share/type";

interface InitialState {
  loading: boolean;
  user: User | null;
}

const initialState: InitialState = {
  loading: false,
  user: null,
};

export const loginHandler = createAsyncThunk<
  User,
  { email: string; password: string }
>("auth/login", async ({ email, password }) => {
  const { data } = await todoApi.login(email, password);
  return data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginHandler.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginHandler.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginHandler.rejected, (state, action) => {
        state.user = null;
        state.loading = false;
      });
  },
});

export const authSelector = (state: RootState) => state.auth;

export default authSlice.reducer;
