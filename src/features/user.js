import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { value: { name: "", age: 0, email: "" } };

export const userSlice = createSlice({
  name: "user",
  initialState: initialStateValue,
  reducers: {
    //Action
    login: (state, action) => {
      state.value = action.payload;
    },
    //Action
    logout: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
