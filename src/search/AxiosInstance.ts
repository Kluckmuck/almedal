import axios from "axios";
import TokenService from "./TokenService";
import VastTrafikService from "./VastTrafikService";

export const axiosInstance = axios.create({
  baseURL: "https://api.vasttrafik.se/",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  data: {},
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalToken();
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token.access_token}`,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (originalConfig.url !== "/token" && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const token = await VastTrafikService.getVasttrafikToken();
          TokenService.updateLocalToken(token);
          return axiosInstance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    if (
      originalConfig.url === "/token" &&
      err.response.status === 415 &&
      !originalConfig._retry
    ) {
      TokenService.clearUser();
    }
    return Promise.reject(err);
  }
);
