import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:6000/graphql', // Change this if needed
    headers: {
        'Content-Type': 'application/json',
    },
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
