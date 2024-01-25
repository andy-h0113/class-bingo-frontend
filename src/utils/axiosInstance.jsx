import axios from 'axios'
import authService from "./authService";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT
})

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('accessToken')
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

// Handle token expiration and retry the request with a refreshed token
        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const isRefreshSuccessful = authService.refreshToken();
            if (isRefreshSuccessful) {
                return axiosInstance(originalRequest);
            }
        }

        return Promise.reject(error);
    }
);



export default axiosInstance