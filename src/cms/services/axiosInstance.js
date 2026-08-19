import axios from 'axios';

import { API_BASE_URL } from "@/cms/utils/config";

export const axiosInstance = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  withCredentials: true,
});
