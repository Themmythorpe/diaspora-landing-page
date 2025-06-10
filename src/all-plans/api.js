import axios from 'axios';

// Load base URL from environment variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Set up response interceptor
api.interceptors.response.use(
  (response) => {
    if (response.data && response.data.statusCode && response.data.statusCode !== 200) {
      return Promise.reject(response.data.statusText || 'Unexpected error');
    }
    return response.data.data || response.data;
  },
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// Fetch plans directly (if needed elsewhere outside PlansAPI)
export const fetchPlans = async () => {
  try {
    const response = await api.get('/all-plans?diaspora=true');
    return response;
  } catch (error) {
    console.error('fetchPlans Error:', error);
    throw error;
  }
};

// Organized API methods
export const PlansAPI = {
  getDiasporaPlans: () => api.get('/all-plans?diaspora=true'),
};
