import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  selectedMovie: null,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
  },
});

export const { setMovies, setSelectedMovie } = movieSlice.actions;
export default movieSlice.reducer;
