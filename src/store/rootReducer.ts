import { combineReducers } from "@reduxjs/toolkit";
import { AuthState } from "../bus/auth/types";
import { createPersistReducer } from "./middleware/presist";
import { authReducer } from "@/bus/auth";
import { homeReducer } from "@/bus/home";
import { HomeState } from "@/bus/home/types";

const rootReducer = combineReducers({
  auth: createPersistReducer(authReducer, "AUTH"),
  home: createPersistReducer(homeReducer, "HOME"),
});

export type RootState = {
  auth: AuthState;
  home: HomeState;
};

export default rootReducer;
