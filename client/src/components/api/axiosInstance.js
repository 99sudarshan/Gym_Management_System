import axios from "axios";

// export const baseURL = "http://192.168.1.119:8000";
export const baseURL = "http://127.0.0.1:8000";
// export const baseURL = "http://192.168.1.74:8000";

const axiosInstance = axios.create({
  baseURL: baseURL,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
      config.headers["Access-Control-Allow-Origin"] = "*";
      // config.headers["Access-Control-Allow-Credentials"] = "true";
      // config.headers["Access-Control-Allow-Header"] = "*";
      config.headers["Content-Type"] = "application/json";
      config.headers["accept"] = "application/json";
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    let refreshToken = localStorage.getItem("refresh_token");
    if (
      refreshToken &&
      error.response.status === 401 &&
      error.response.data.code === "token_not_valid" &&
      !originalRequest._retry
    ) {
      const response = await axiosInstance.post("/accounts/refreshtoken/", {
        refresh: refreshToken,
      });
      const access_token = response.data.access;
      localStorage.setItem("access_token", access_token);
      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
