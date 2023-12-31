import axios from "axios";

const rootAPI = process.env.REACT_APP_ROOTAPI;
const userAPI = rootAPI + "/api/v1/user";
const categoryAPI = rootAPI + "/api/v1/category";
const paymentAPI = rootAPI + "/api/v1/payment";
const productAPI = rootAPI + "/api/v1/product";

const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};
const getRefreshJWT = () => {
  return localStorage.getItem("refreshJWT");
};

const axiosProcessor = async ({
  method,
  url,
  obj,
  isPrivate,
  refreshToken,
}) => {
  try {
    const token = refreshToken ? getRefreshJWT() : getAccessJWT();
    const headers = {
      Authorization: isPrivate ? token : null,
    };
    const { data } = await axios({
      method,
      url,
      data: obj,
      headers,
    });
    console.log(data);
    return data;
  } catch (error) {
    if (
      error.request?.status === 403 &&
      error?.response?.data?.message === "jwt expired"
    ) {
      const { status, accessJWT } = await newRefresherAxios();
      console.log(error);
      console.log(status);
      if (status === "success" && accessJWT) {
        sessionStorage.setItem("accessJWT", accessJWT);
      }

      return axiosProcessor({
        method,
        url,
        obj,
        isPrivate,
        refreshToken,
      });
    }
    console.log(error);
    return {
      status: "error",
      message: error?.response?.data?.message,
    };
  }
};

export const postNewAdmin = async (data) => {
  const obj = {
    method: "post",
    url: userAPI,
    obj: data,
  };
  return await axiosProcessor(obj);
};

// export const pushUserAxios = async (user) => {
//   const { data } = await axios.post(userAPI, user);
//   return data;
// };

export const loginAxios = async (user) => {
  const { data } = await axios.get(userAPI, { params: user });
  return data;
};

export const activateAcc = async (obj) => {
  const data = {
    method: "patch",
    url: userAPI + "/verify",
    obj: obj,
  };
  return await axiosProcessor(data);
};

export const pushCatalogAxios = async (obj) => {
  const data = {
    method: "post",
    url: categoryAPI,
    obj: obj,
    isPrivate: true,
  };
  return await axiosProcessor(data);
};

export const getAllCategoriesAxios = async () => {
  const obj = {
    method: "get",
    url: categoryAPI,
    isPrivate: true,
  };

  return await axiosProcessor(obj);
};
export const updateCatAxios = async (item) => {
  const obj = {
    method: "put",
    url: categoryAPI,
    obj: item,
    isPrivate: true,
  };

  return await axiosProcessor(obj);
};
export const getUserInfoAxios = async () => {
  const obj = {
    method: "get",
    url: userAPI + "/getUser",
    isPrivate: true,
  };

  return await axiosProcessor(obj);
};
// new refresh function is for getting new accessJWT from jwt.js through user router API
export const newRefresherAxios = async () => {
  const obj = {
    method: "get",
    url: userAPI + "/get-accessJWT",
    isPrivate: true,
    refreshToken: true,
  };
  return await axiosProcessor(obj);
};

export const logOutAxios = async (_id) => {
  const obj = {
    method: "post",
    url: userAPI + "/admin-logout",
    obj: {
      _id: _id,
      accessJWT: getAccessJWT(),
      refreshJWT: getRefreshJWT(),
    },
  };
  return await axiosProcessor(obj);
};

export const deleteCatAxios = async (id) => {
  const obj = {
    method: "delete",
    url: categoryAPI + "/" + id,
    isPrivate: true,
  };
  return await axiosProcessor(obj);
};

export const addPaymentMethodAxios = async (data) => {
  const obj = {
    method: "post",
    url: paymentAPI,
    obj: data,
    isPrivate: true,
  };
  return await axiosProcessor(obj);
};

export const getOptionPaymentsAxios = () => {
  const obj = {
    method: "get",
    url: paymentAPI,
    isPrivate: true,
  };

  return axiosProcessor(obj);
};
export const updateOptionPaymentsAxios = (data) => {
  const obj = {
    method: "put",
    url: paymentAPI,
    isPrivate: true,
    obj: data,
  };

  return axiosProcessor(obj);
};
export const deleteOptionPaymentAxios = (id) => {
  console.log(id);
  const obj = {
    method: "delete",
    url: paymentAPI + `/${id}`,
    isPrivate: true,
  };

  return axiosProcessor(obj);
};

export const pushProductAxios = async (data) => {
  const obj = {
    method: "post",
    url: productAPI,
    isPrivate: true,
    obj: data,
  };

  return await axiosProcessor(obj);
};
export const getProductsAxios = async (id) => {
  const obj = {
    method: "get",
    url: !id ? productAPI : productAPI + "/" + id,
    isPrivate: true,
  };

  return await axiosProcessor(obj);
};
export const deleteProductsAxios = async (id) => {
  const obj = {
    method: "delete",
    url: productAPI + `/${id}`,
    isPrivate: true,
  };

  return await axiosProcessor(obj);
};
export const updateProductsAxios = async (data) => {
  const obj = {
    method: "put",
    url: productAPI,
    isPrivate: true,
    obj: data,
  };

  return await axiosProcessor(obj);
};
export const reqOTPAxios = async (email) => {
  const obj = {
    method: "post",
    url: userAPI + "/get-OTP",
    obj: { email },
  };

  return await axiosProcessor(obj);
};
export const resetPassAxios = async (data) => {
  console.log("axios reset pass: ", data);
  const obj = {
    method: "post",
    url: userAPI + "/reset-pass",
    obj: data,
  };

  return await axiosProcessor(obj);
};

export const getAllAdminAxios = async () => {
  const obj = {
    method: "get",
    url: userAPI + "/get-all-admin",
    isPrivate: true,
  };

  return await axiosProcessor(obj);
};

export const updateProfileAxios = async (data) => {
  console.log(data);

  const obj = {
    method: "put",
    url: userAPI + "/update-profile",
    isPrivate: true,
    obj: data,
  };
  return await axiosProcessor(obj);
};

export const newPasswordAxios = async (data) => {
  const obj = {
    method: "patch",
    url: userAPI + "/new-password",
    isPrivate: true,
    obj: data,
  };
  return await axiosProcessor(obj);
};
