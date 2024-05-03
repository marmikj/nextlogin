import axios, { AxiosRequestConfig } from "axios";



const axiosInstance = axios.create({
    baseURL: "https://mozarchyadminapi.redefineapp.io/",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  });


  // export const API = axios.create({
  //   baseURL: "https://mozarchyadminapi.redefineapp.io/",
  // });

  export const AsyncFetch = (request) => {
    return new Promise((resolve, reject) => {
      axiosInstance
        .request(request)
        .then(({ data, errors, success }) => {
          if (success) {
            resolve(data);
          } else {
            reject(errors);
            throw new Error(errors);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  axiosInstance.interceptors.request.use(async (request) => {
    if (request.data && request.data.files) {
      request.headers["Content-Type"] = "multipart/form-data";
    }
    return request;
  });
   
  axiosInstance.interceptors.response.use(
    (response) => {
      if (response && response.data && response.data.success) {
        return response.data;
      } else {
        return Promise.reject(response?.data.errors);
      }
    },
    (error) => {
      return Promise.reject(error?.response?.data);
    }
  );
   