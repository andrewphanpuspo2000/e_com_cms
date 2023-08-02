import { toast } from "react-toastify";
import {
  activateAcc,
  getUserInfoAxios,
  loginAxios,
  newRefresherAxios,
  postNewAdmin,
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
  const { status, message, token } = await loginAxios(info);
  toast[status](message);

  if (status === "success") {
    localStorage.setItem("refreshJWT", token.refreshJWT);
    sessionStorage.setItem("accessJWT", token.accessJWT);
    dispatch(getUserInfo());
  }

  //get the user data and mount it
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

export const getUserInfo = () => async (dispatch) => {
  const { status, message, user } = await getUserInfoAxios();
  // toast[status](message);
  if (status === "success") {
    dispatch(setUser(user));
  }
};

export const autoLogin = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");

  if (accessJWT) return dispatch(getUserInfo());

  const refreshJWT = localStorage.getItem("refreshJWT");

  if (refreshJWT) {
    const { accessJWT } = await newRefresherAxios();
    if (accessJWT) {
      sessionStorage.setItem("accessJWT", accessJWT);
      dispatch(getUserInfo());
    }
  }
};
