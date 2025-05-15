import axios from "axios";
import { getAccessToken } from "./auth";

const baseConfig = {
  baseURL: "/api/v1",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

const tokenInstance = axios.create(baseConfig);
const publicInstance = axios.create(baseConfig);

tokenInstance.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

tokenInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
)

export { tokenInstance, publicInstance };