// src/lib/http/AxiosService.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const HARDCODED_TOKEN = 'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiVVNFUiIsInVzZXJJZCI6ImRmNzdmMjY4LTYyNTgtNGM1MC05ZDEwLWY5NGFlMjQyMzM0NyIsInN1YiI6ImpvaG4uZG9lQGV4YW1wbGUuY29tIiwiaXNzIjoicmVzdW1lLWJ1aWxkZXIiLCJpYXQiOjE3ODcyOTEzNzYsImV4cCI6MTc4Nzg5NjE3NiwianRpIjoiNDUwMDMwNGItNDZiMy00Y2IwLTkzYzgtMmE5MzAxNDI1ZWUyIn0.YUHueK25aL3ZiRgrr6c6NH47CsKUnLR4BgHLMi8J-yGeFclkyZU3alDYuHvYxyOQU-RR4YTxYzIOTuZTxY2YtQ';

class AxiosService {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:8080/api',
      // timeout: 15000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Attach bearer token to every request
    this.instance.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${HARDCODED_TOKEN}`;
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Pass responses through, log errors
    this.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error('API error:', error.response?.status, error.response?.data);
        return Promise.reject(error);
      }
    );
  }

  get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.get<T>(url, config);
  }

  post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.post<T>(url, data, config);
  }

  put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.put<T>(url, data, config);
  }

  patch<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.patch<T>(url, data, config);
  }

  delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.delete<T>(url, config);
  }
}

export const axiosService = new AxiosService();
export default axiosService;