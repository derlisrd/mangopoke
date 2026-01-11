import { createSlice } from '@reduxjs/toolkit';
const noticiasSlice = createSlice({
  name: 'noticias',
  initialState: {
    items: [],
  },
  reducers: {
    setNoticias(state, action) {
      state.items = action.payload;
    },
  },
});
export const { setNoticias } = noticiasSlice.actions;
export default noticiasSlice.reducer;