import { RootState } from "../../store/rootReducer";

export const getActiveButton = (state: RootState) => state.home.activeButton;
