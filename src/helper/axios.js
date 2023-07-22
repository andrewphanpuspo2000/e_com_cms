import axios from "axios";

const rootAPI = process.env.REACT_APP_ROOTAPI;
const userAPI = rootAPI + "/api/v1/user";

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
