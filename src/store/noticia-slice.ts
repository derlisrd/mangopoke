import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewsArticle } from '../services/dto/news-response';



interface NoticiaSelectState {
  selected: NewsArticle | null;
}

const initialState: NoticiaSelectState = {
  selected: null,
};

const noticiaSelectSlice = createSlice({
  name: 'noticiaSelect',
  initialState,
  reducers: {
    setSelectNoticia(state, action: PayloadAction<NewsArticle | null>) {
      state.selected = action.payload;
    },
    setClearNoticia(state) {
      state.selected = null;
    }
  },
});
export const { setSelectNoticia, setClearNoticia } = noticiaSelectSlice.actions;


export default noticiaSelectSlice.reducer;