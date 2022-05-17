import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import authorsReducer from '../slices/authors';
import counterReducer from '../slices/counter';

export const store = configureStore({
  reducer: {
    authors: authorsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
