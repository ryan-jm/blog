import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  darkTheme: boolean;
}

const initialState = { darkTheme: false } as ThemeState;

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
