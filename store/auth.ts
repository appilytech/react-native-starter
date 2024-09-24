import { createSlice } from "@reduxjs/toolkit";

export type AuthProps = {
  token?: string;
};

const initialState: AuthProps = {};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
