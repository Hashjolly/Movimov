import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      state.push(action.payload);
    },
    removeFavorite: (state, action) => {
      return state.filter((movie) => movie.id !== action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
