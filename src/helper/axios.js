import axios from "axios";

const rootAPI = process.env.REACT_APP_ROOTAPI;
const userAPI = rootAPI + "/api/v1/user";
const categoryAPI = rootAPI + "/api/v1/category";
const axiosProcessor = async ({ method, url, obj }) => {
  try {
    const { data } = await axios({
      method,
      url,
      data: obj,
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
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
  };
  return await axiosProcessor(data);
};

export const getAllCategoriesAxios = async () => {
  const obj = {
    method: "get",
    url: categoryAPI,
  };

  return await axiosProcessor(obj);
};
