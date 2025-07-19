import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IServiceBO {
    getRequest: <T>(url: string, params?: Record<string, any>) => Promise<T>;
    postRequest: <T>(url: string, data?: Record<string, any>, params?: Record<string, any>) => Promise<T>;
}

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const getAccessToken = async (): Promise<string | null> => await AsyncStorage.getItem('accessToken');
const getRefreshToken = async (): Promise<string | null> => await AsyncStorage.getItem('refreshToken');

const api: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        const token = await getAccessToken();
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error) => {
        const originalRequest: any = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = await getRefreshToken();
                if (!refreshToken) {
                    throw new Error('No refresh token');
                }

                const { data } = await axios.post<{ accessToken: string; refreshToken: string }>(
                    `${API_BASE_URL}/auth/refresh-token`,
                    { refreshToken }
                );

                await AsyncStorage.setItem('accessToken', data.accessToken);
                await AsyncStorage.setItem('refreshToken', data.refreshToken);

                originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
                return api(originalRequest);
            } catch (refreshError) {
                console.error('Token refresh failed', refreshError);
                await AsyncStorage.removeItem('accessToken');
                await AsyncStorage.removeItem('refreshToken');
                // Optionally navigate to login screen
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

const getRequest = async <T>(url: string, params?: Record<string, any>): Promise<T> => {
    const response = await api.get<T>(url, { params });
    return response.data;
};

const postRequest = async <T>(
    url: string,
    data?: Record<string, any>,
    params?: Record<string, any>
): Promise<T> => {
    const response = await api.post<T>(url, data, { params });
    return response.data;
};

export const Services: IServiceBO = {
    getRequest,
    postRequest,
};

export default api;
