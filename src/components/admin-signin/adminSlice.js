import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  usersCol: [],
};
const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setUserCol: (state, { payload }) => {
      state.usersCol = payload;
    },
  },
});

const { reducer, actions } = adminSlice;

export const { setUser, setUserCol } = actions;

export default reducer;
