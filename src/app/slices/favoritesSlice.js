import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem("favorites")) || [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state));
    },
    removeFavorite: (state, action) => {
      const updatedState = state.filter((movie) => movie.id !== action.payload.id);
      localStorage.setItem("favorites", JSON.stringify(updatedState));
      return updatedState;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
