import { createSlice } from "@reduxjs/toolkit";



const themeSlice = createSlice({
  name: "Theme",
  initialState: { value: "" },
  reducers: {
    Theme: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { Theme } = themeSlice.actions;
export default themeSlice.reducer;
