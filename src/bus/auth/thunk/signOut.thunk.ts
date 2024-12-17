import { createAsyncThunk } from "@reduxjs/toolkit";
import { signOutFromGoogle } from "../api";

export const signOut = createAsyncThunk("auth/signOut", async () => {
  try {
    await signOutFromGoogle();
  } catch (e) {
    console.log("error sign out thunk", e);
  }
});
