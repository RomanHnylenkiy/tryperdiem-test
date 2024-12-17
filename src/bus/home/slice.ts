import { createSlice } from "@reduxjs/toolkit";
import { HomeState } from "./types";

const initialState: HomeState = {
  activeButton: "Catch Pokémon",
};

const slice = createSlice({
  initialState,
  name: "Auth",
  reducers: {
    setActiveButton: (state, action) => {
      state.activeButton = action.payload;
    },
  },
});

export default slice.reducer;

export const homeActions = {
  ...slice.actions,
};
