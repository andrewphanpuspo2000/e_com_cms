import { toast } from "react-toastify";
import { loginAxios, pushUserAxios } from "../../helper/axios";

export const addUserAction = async (user) => {
  const { status, message } = await pushUserAxios(user);
  toast[status](message);

  if (status === "success") {
    console.log(message);
  }
};

export const loginAction = async (info) => {
  const { status, message } = await loginAxios(info);
  toast[status](message);
};
