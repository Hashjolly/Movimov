import { createSlice } from '@reduxjs/toolkit';

console.log(import.meta.env);

export const uiSlice = createSlice({
  name: 'colors',
  initialState: {
    darkMode: false,
    mainColor: import.meta.env.VITE_MAIN_COLOR,
    secondColor: import.meta.env.VITE_SECOND_COLOR,
    thirdColor: import.meta.env.VITE_THIRD_COLOR,
    detailsColor: import.meta.env.VITE_FOURTH_COLOR,
  },
  reducers: {
    setDarkMode: (state) => {
        state.darkMode = true;
        state.mainColor = import.meta.env.VITE_SECOND_COLOR;
        state.secondColor = import.meta.env.VITE_MAIN_COLOR;
        state.thirdColor = import.meta.env.VITE_FOURTH_COLOR;
        state.detailsColor = import.meta.env.VITE_THIRD_COLOR;
    },
    setLightMode: (state) => {
        state.darkMode = false;
        state.mainColor = import.meta.env.VITE_MAIN_COLOR;
        state.secondColor = import.meta.env.VITE_SECOND_COLOR;
        state.thirdColor = import.meta.env.VITE_THIRD_COLOR;
        state.detailsColor = import.meta.env.VITE_FOURTH_COLOR;
    },
  }
});

// Exporter les actions pour les utiliser dans vos composants
export const { setDarkMode, setLightMode } = uiSlice.actions;

// Exporter le reducer pour l'ajouter au store
export default uiSlice.reducer;
