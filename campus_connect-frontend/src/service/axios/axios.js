import axios from "axios";
const SERVER_URL = "http://127.0.0.1:5000/api/v1";

const axiosAuth = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosFormData = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export default axiosAuth;
