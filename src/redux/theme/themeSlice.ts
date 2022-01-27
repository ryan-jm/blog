import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

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
export const selectTheme = (state: RootState) => state.theme.darkTheme;
export default themeSlice.reducer;
