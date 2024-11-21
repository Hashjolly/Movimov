import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/moviesSlice";
import favoritesReducer from "./slices/favoritesSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    favorites: favoritesReducer,
  },
});

export default store;
// import { configureStore } from "@reduxjs/toolkit";
// import moviesReducer from "./slices/moviesSlice";
// import favoritesReducer from "./slices/favoritesSlice";
// import { uiSlice } from './slices/uiSlice';

// const store = configureStore({
//   reducer: {
//     movies: moviesReducer,
//     favorites: favoritesReducer,
//     ui: uiSlice.reducer,
//   },
// });

// export default store;