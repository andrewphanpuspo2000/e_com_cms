import axios from "axios";

const rootAPI = "http://localhost:8000";
const userAPI = rootAPI + "/api/v1/user";

export const pushUserAxios = async (user) => {
  const { data } = await axios.post(userAPI, user);
  return data;
};

export const loginAxios = async (user) => {
  const { data } = await axios.get(userAPI, { params: user });
  return data;
};
