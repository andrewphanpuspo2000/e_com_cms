import { toast } from "react-toastify";
import {
  addPaymentMethodAxios,
  deleteOptionPaymentAxios,
  getOptionPaymentsAxios,
  updateOptionPaymentsAxios,
} from "../../helper/axios";
import { setMethods } from "./paymentSlice";

export const addMethodAction = (data) => async (dispatch) => {
  const { status, message } = await addPaymentMethodAxios(data);
  toast[status](message);

  if (status === "success") {
    dispatch(getMethods());
  }
};

export const getMethods = () => async (dispatch) => {
  const { status, collection } = await getOptionPaymentsAxios();

  if (status === "success") {
    dispatch(setMethods(collection));
  }
};

export const updateOptionAction = (data) => async (dispatch) => {
  const { status, message } = await updateOptionPaymentsAxios(data);
  toast[status](message);
  if (status === "success") {
    dispatch(getMethods());
  }
};

export const deletePaymentAction = (id) => async (dispatch) => {
  const { status, message } = await deleteOptionPaymentAxios(id);

  toast[status](message);
  if (status === "success") {
    dispatch(getMethods());
  }
};
