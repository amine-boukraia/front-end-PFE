import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

axiosInstance.interceptors.request.use( (config) => {
  config.headers.Authorization =  `bearer ${localStorage.getItem("token")}`
  return config;
});

export default axiosInstance;
