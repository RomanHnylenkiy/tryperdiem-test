import { RootState } from "../../store/rootReducer";

export const getToken = (state: RootState) => state.auth.token;
export const getUserInfo = (state: RootState) => state.auth.userInfo;
export const getIsLogged = (state: RootState) => state.auth.isLogged;
