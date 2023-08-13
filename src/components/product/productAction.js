import { toast } from "react-toastify";
import {
  deleteProductsAxios,
  getProductsAxios,
  pushProductAxios,
  updateProductsAxios,
} from "../../helper/axios";
import { setProducts } from "./productSlice";

export const addProductAction = (data) => async (dispatch) => {
  const pending = pushProductAxios(data);

  toast.promise(pending, {
    pending: "pending....",
  });

  const { status, message } = await pending;
  toast[status](message);
  if (status === "success") {
    dispatch(getAllProductsAction());
  }
};

export const getAllProductsAction = () => async (dispatch) => {
  const { status, data } = await getProductsAxios();

  if (status === "success") {
    dispatch(setProducts(data));
  }
};

export const deleteProductAction = (id) => async (dispatch) => {
  const { status, message } = await deleteProductsAxios(id);

  toast[status](message);

  if (status === "success") {
    dispatch(getAllProductsAction());
  }
};

export const getProduct = async (id) => {
  const { status, product } = await getProductsAxios(id);

  if (status === "success") {
    return product;
  }
};
export const updateProductAction = (data) => async (dispatch) => {
  const { status, message } = await updateProductsAxios(data);
  toast[status](message);
  if (status === "success") {
    dispatch(getAllProductsAction());
  }
};
