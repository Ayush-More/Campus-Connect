import axios from "axios";

const SERVER_URL = "https://campus-connect-1-u67z.onrender.com/api/v1";

const axiosAuth = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true
});

export const axiosFormData = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true
});

export default axiosAuth;
