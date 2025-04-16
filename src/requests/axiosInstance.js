import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/graphql', // Change this if needed
    headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}` || "" ,
        'Content-Type': 'application/json',
    },
});
axiosInstance.interceptors.request.use(function (config) {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem('token')}` || "" 
    return config;
  });
// Response Interceptor to handle errors
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        console.error('API Error:', error.response?.data?.message || error.message);
        return Promise.reject(error);
    }
);

export default axiosInstance;
