import { authActions } from "../../../bus/auth/slice";
import { useAppDispatch } from "@/store";

export const useData = () => {
  const dispatch = useAppDispatch();
  const login = async () => {
    dispatch(authActions.signInAsync());
  };
  return { login };
};
