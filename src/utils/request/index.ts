import axios from "axios";
import { type InternalAxiosRequestConfig } from "axios";
import { get, merge, split } from 'lodash-es';

let loading = false; // 全局 loading 状态


const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 60 * 1000,
  headers: {
    ContentType: "application/json;charset=utf8"
  }
});

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default service;
