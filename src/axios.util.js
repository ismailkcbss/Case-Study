import axios from "axios";
import * as storage from './storage.helper'

const axiosInstance = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  baseURL: 'https://case.edulog.com.tr',
});

axiosInstance.interceptors.request.use((config) => {
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      storage.setKeyWithValue("token", "");
      if (window.location.pathname !== '/Login')
        window.location.assign('/Login');

      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

const setApiToken = (token) => {
  axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
};
export { axiosInstance, setApiToken };