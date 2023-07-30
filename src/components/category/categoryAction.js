import { toast } from "react-toastify";
import {
  getAllCategoriesAxios,
  pushCatalogAxios,
  updateCatAxios,
} from "../../helper/axios";
import { setCategory } from "./categorySlice";

export const sendCategoryAction = (data) => async (dispatch) => {
  const { status, message } = await pushCatalogAxios(data);
  toast[status](message);
  if (status === "success") {
    dispatch(getAllCategoriesAction());
  }
};

export const updateCat = (item) => async (dispatch) => {
  const { status, message } = await updateCatAxios(item);

  toast[status](message);
  if (status === "success") {
    dispatch(getAllCategoriesAction());
  }
};
export const getAllCategoriesAction = () => async (dispatch) => {
  const { status, message, result } = await getAllCategoriesAxios();

  // toast[status](message);
  if (status === "success") {
    dispatch(setCategory(result));
  }
};