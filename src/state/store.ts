import { configureStore } from '@reduxjs/toolkit';
import { jokesApiSlice } from './quotesAPISlice';

export const store = configureStore({
  reducer: {
    [jokesApiSlice.reducerPath]: jokesApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(jokesApiSlice.middleware);
  },
});
