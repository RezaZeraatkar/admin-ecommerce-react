// store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { AppApi } from './api/api';

const store = configureStore({
  reducer: {
    rootReducer,
    [AppApi.reducerPath]: AppApi.reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AppApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type to store dispatch
export type AppDispatch = typeof store.dispatch;

export default store;
