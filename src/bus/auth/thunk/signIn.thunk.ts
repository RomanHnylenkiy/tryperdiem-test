import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithGoogle } from "../api";

export const signIn = createAsyncThunk("auth/signIn", async () => {
  try {
    const response = await signInWithGoogle();

    return response;
  } catch (e) {
    console.log("error sign in thunk", e);
  }
});
