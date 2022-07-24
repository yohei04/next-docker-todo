import axios from 'axios';

export const axiosConfig = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});
