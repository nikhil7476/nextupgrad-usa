import axios from "axios";
import Router from "next/router";

//Axios instance for setting up base url automatically
const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://53c50cd527.nxcli.io/nextupgrad_backend/api",
  timeout: 10000, // Set a timeout
});

// Axios interceptor for request intercept.
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("loginToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//Axios interceptor for response intercept old.

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response.status === 401) {
//       refreshToken();
//     }
//     return Promise.reject(error);
//   }
// );

// async function refreshToken() {
//   const refreshToken = localStorage.getItem("refreshToken");
//   try {
//     const res = await axios.post(
//       process.env.NEXT_PUBLIC_SITE_URL + "/api/auth/refresh/",
//       {
//         refresh: refreshToken,
//       }
//     );
//     const newToken = res.data.access;
//     if (newToken) {
//       localStorage.setItem("loginToken", newToken);
//     }
//   } catch (err) {
//     console.log(err.message);
//   }
// }
let isRefreshing = false;
let failedQueue = [];

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return axiosInstance(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      return new Promise((resolve, reject) => {
        refreshToken()
          .then((token) => {
            axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(axiosInstance(originalRequest));
          })
          .catch((err) => {
            reject(err);
          })
          .finally(() => {
            isRefreshing = false;
          });
      });
    }
    return Promise.reject(error);
  }
);

async function refreshToken() {
  const refreshToken = localStorage.getItem("refreshToken");
  try {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_SITE_URL + "/api/auth/refresh/",
      {
        refresh: refreshToken,
      }
    );
    const newToken = res.data.access;
    if (newToken) {
      localStorage.setItem("loginToken", newToken);
      return newToken;
    }
  } catch (err) {
    console.log(err.message);
    throw err;
  }
}
export default axiosInstance;
