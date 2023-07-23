import { toast } from "react-toastify";
import {
  activateAcc,
  loginAxios,
  postNewAdmin,
  pushUserAxios,
} from "../../helper/axios";
import { setUser } from "../admin-signin/adminSlice";

export const addUserAction = async (user) => {
  const { status, message } = await postNewAdmin(user);
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

export const verifyUser = (obj) => async (dispatch) => {
  const pending = activateAcc(obj);
  toast.promise(pending, {
    pending: "pending....",
  });
  const result = await pending;
  toast[result?.status](result?.message);

  if (result?.status === "success") {
    dispatch(setUser(result?.user));
    return result;
  }
};
