import { configureStore } from '@reduxjs/toolkit';
import noticiaSelectReducer from './noticia-slice';

export const store = configureStore({
  reducer: {
    noticiaSelect: noticiaSelectReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    //serializableCheck: {
      // ignoredActions: ['noticiaSelect/setSelectNoticia'],
     // }
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;