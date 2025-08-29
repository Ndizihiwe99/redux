import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { value: { name: "", age: 0, email: "" } },
  reducers: {
    Login: (state, action) => {
      state.value = action.payload;
    },
    Logout: (state) => {
      state.value = { name: "", age: 0, email: "" };
    },
  },
});

export const { Login, Logout } = userSlice.actions;
export default userSlice.reducer;
