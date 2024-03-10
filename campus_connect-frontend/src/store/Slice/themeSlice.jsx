import { createSlice } from "@reduxjs/toolkit";

 const themeSlice = createSlice({
  name: "Theme",
  initialState: true,
  reducers: {
    toggleTheme: (state) => {
      return (state = !state);
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
