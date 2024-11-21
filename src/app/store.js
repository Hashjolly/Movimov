import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './slices/moviesSlice';


const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});

export default store;
