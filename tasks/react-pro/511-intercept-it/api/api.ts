import axios from 'axios';
import { Product } from '../model/Product';
import { trackSlowRequests } from '../api/tracker';

const productsApi = axios.create({
  baseURL: 'https://dummyjson.com',
});

type RequestConfig = {
  metadata?: {
    startTime: Date;
  };
};

productsApi.interceptors.request.use((config) => {
  (config as RequestConfig).metadata = { startTime: new Date() };
  return config;
});

productsApi.interceptors.response.use((response) => {
  const endTime = new Date();
  const startTime = (response.config as RequestConfig).metadata?.startTime;
  if (startTime) {
    const delay = endTime.getTime() - startTime.getTime();
    console.log(`Request to ${response.config.url} took ${delay}ms`);
    if (delay >= 5000) {
      trackSlowRequests();
    }
  }
  return response;
});

export async function getProducts(query: string, limit: number = 5, delay: number = 0) {
  const response = await productsApi.get<{ products: Product[] }>('/products/search', {
    params: {
      q: query,
      limit: limit,
      delay: delay,
    },
  });
  return response;
}
