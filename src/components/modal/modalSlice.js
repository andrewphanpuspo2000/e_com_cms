import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
  editModal: false,
};
const modalSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setSystem: (state, { payload }) => {
      state.modal = payload;
    },
    setEditSystem: (state, { payload }) => {
      state.editModal = payload;
    },
  },
});

const { reducer, actions } = modalSlice;

export const { setSystem, setEditSystem } = actions;

export default reducer;
