import axios from 'axios';

import { BASE_URL } from './baseUrl';

export const axiosConfig = axios.create({
  baseURL: BASE_URL,
});
