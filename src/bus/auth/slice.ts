import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./types";
import { signIn, signOut } from "./thunk";

const initialState: AuthState = {
  isLogged: false,
  token: null,
  userInfo: null,
};

const slice = createSlice({
  initialState,
  name: "Auth",
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        if (action.payload) {
          state.isLogged = true;
          state.token = action.payload.idToken;
          state.userInfo = action.payload.user;
        }
      })
      .addCase(signIn.rejected, state => {
        state.isLogged = false;
      })
      .addCase(signOut.fulfilled, state => {
        state.isLogged = false;
        state.token = null;
        state.userInfo = null;
      });
  },
});

export default slice.reducer;

export const authActions = {
  ...slice.actions,
  signInAsync: signIn,
  signOutAsync: signOut,
};
