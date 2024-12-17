import { useSelector } from "react-redux";

import { useAppDispatch } from "../../../store/index";
import { authActions, authSelectors } from "@/bus/auth";

export const useData = () => {
  const userInfo = useSelector(authSelectors.getUserInfo);
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(authActions.signOutAsync());
  };

  return { userInfo, logout };
};
