import AsyncStorage from '@react-native-async-storage/async-storage';
import { Reducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

export const createPersistReducer = (
  reducer: Reducer,
  key: string,
  config?: any,
): typeof reducer =>
  persistReducer(
    {
      ...config,
      key,
      storage: AsyncStorage,
    },
    reducer,
  );
