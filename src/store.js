import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import userSlice from "./components/admin-signin/adminSlice";
import { persistStore, persistReducer } from "redux-persist";
import categorySlice from "./components/category/categorySlice";
const userConfig = {
  key: "userDetail",
  storage,
};

const userPersistedreducer = persistReducer(userConfig, userSlice);
const store = configureStore({
  reducer: {
    userData: userPersistedreducer,
    categoryData: categorySlice,
  },
});

const persistor = persistStore(store);

export { store, persistor };
