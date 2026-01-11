import { configureStore } from '@reduxjs/toolkit';
import noticiaReducer from './noticias-slice';

export default configureStore({
  reducer: {
    noticia: noticiaReducer
  },
});
