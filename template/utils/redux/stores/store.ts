import {configureStore} from '@reduxjs/toolkit';
import userSlices from '../reducers/user';
export const store = configureStore({
  reducer: {
    users: userSlices,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
