import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  methods: [],
};
const paymentSlice = createSlice({
  name: "paymentSlice",
  initialState,
  reducers: {
    setMethods: (state, { payload }) => {
      state.methods = payload;
    },
  },
});

const { reducer, actions } = paymentSlice;

export const { setMethods } = actions;

export default reducer;
