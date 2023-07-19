import { toast } from "react-toastify";
import { loginAxios, pushUserAxios } from "../../helper/axios";
import { setUser } from "../admin-signin/adminSlice";

export const addUserAction = async (user) => {
  const { status, message } = await pushUserAxios(user);
  toast[status](message);

  if (status === "success") {
    console.log(message);
  }
};

export const loginAction = (info) => async (dispatch) => {
  const { status, message, user } = await loginAxios(info);
  toast[status](message);

  if (status === "success") {
    dispatch(setUser(user));
  }
};
