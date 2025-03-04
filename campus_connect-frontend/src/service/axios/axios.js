import axios from "axios";
const SERVER_URL = "https://campus-connect-1-u67z.onrender.com";

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
