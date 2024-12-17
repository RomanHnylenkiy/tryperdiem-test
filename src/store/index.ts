import { configureStore } from "@reduxjs/toolkit";

import createRootReducer from "./rootReducer";

import { persistStore } from "redux-persist";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: createRootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ immutableCheck: false, serializableCheck: false, thunk: true }),
});

export const useAppDispatch = useDispatch<typeof store.dispatch>;

export const persistor = persistStore(store);
