import { toast } from "react-toastify";
import {
  activateAcc,
  getAllAdminAxios,
  getUserInfoAxios,
  loginAxios,
  newPasswordAxios,
  newRefresherAxios,
  postNewAdmin,
  reqOTPAxios,
  resetPassAxios,
  updateProfileAxios,
} from "../../helper/axios";
import { setUser, setUserCol } from "../admin-signin/adminSlice";

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
    const { accessJWT } = await newRefresherAxios(); // new refresh action is for getting new accessJWT from jwt.js
    if (accessJWT) {
      sessionStorage.setItem("accessJWT", accessJWT);
      dispatch(getUserInfo());
    }
  }
};

export const reqOTPAction = async (email) => {
  const pending = reqOTPAxios(email);

  toast.promise(pending, {
    pending: "pending...",
  });

  const { status, message } = await pending;
  toast[status](message);
  return status;
};

export const resetPassAction = async (data) => {
  console.log(data);
  const { status, message } = await resetPassAxios(data);
  toast[status](message);

  if (status === "success") {
    return status;
  }
};

export const getAllAdminAction = () => async (dispatch) => {
  const { status, data } = await getAllAdminAxios();

  if (status === "success") {
    dispatch(setUserCol(data));
  }
};

export const updateProfileAction = (data) => async (dispatch) => {
  const { status, message } = await updateProfileAxios(data);
  toast[status](message);
  if (status === "success") {
    dispatch(getUserInfo());
  }
};

export const newPasswordAction = async (data) => {
  const { status, message } = await newPasswordAxios(data);

  status === "success" ? toast[status](message) : toast.error(message);
};
