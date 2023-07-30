import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./components/admin-signin/adminSlice";

import categorySlice from "./components/category/categorySlice";
import modalSlice from "./components/modal/modalSlice";

const store = configureStore({
  reducer: {
    userData: userSlice,
    categoryData: categorySlice,
    modalSystem: modalSlice,
  },
});

export default store;
