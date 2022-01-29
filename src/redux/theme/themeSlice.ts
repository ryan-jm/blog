import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../store";

interface ThemeState {
  darkTheme: boolean;
  logo: string;
}

const initialState = {
  darkTheme: false,
  logo: "./logo-lightmode.svg",
} as ThemeState;

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
      if (!state.darkTheme) {
        state.logo = "./logo-lightmode.svg";
      } else {
        state.logo = "./logo-darkmode.svg";
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.darkTheme;
export default themeSlice.reducer;
