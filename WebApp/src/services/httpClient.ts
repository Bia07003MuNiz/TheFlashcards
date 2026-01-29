import axios from 'axios';
import localStorageService from './localStorage.service';
import { Envs } from '@constants/envs';

export const httpClient = axios.create({
  baseURL: Envs.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.request.use((config) => {
  const token = localStorageService.getToken();
  if (token) {config.headers.Authorization = `Bearer ${token}`;}
  return config;
});

httpClient.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
    delete config.headers['Content-Type'];
  }
  return config;
});

export interface IAxiosError {
  response: {
    data: {
      error: string;
    };
  };
}
