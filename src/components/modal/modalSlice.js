import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
};
const modalSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setSystem: (state, { payload }) => {
      state.modal = payload;
    },
  },
});

const { reducer, actions } = modalSlice;

export const { setSystem } = actions;

export default reducer;
