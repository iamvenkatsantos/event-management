import { configureStore } from '@reduxjs/toolkit';
import commonSlice from './commonSlice';
import authSlice from './authSlice';
import locationSlice from './locationSlice';

export const store = configureStore({
  reducer: {
    counter: commonSlice,
    auth: authSlice,
    location: locationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
