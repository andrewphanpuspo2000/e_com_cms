import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./components/admin-signin/adminSlice";

import categorySlice from "./components/category/categorySlice";
import modalSlice from "./components/modal/modalSlice";
import paymentSlice from "./components/payment/paymentSlice";
const store = configureStore({
  reducer: {
    userData: userSlice,
    categoryData: categorySlice,
    modalSystem: modalSlice,
    paymentMethod: paymentSlice,
  },
});

export default store;
