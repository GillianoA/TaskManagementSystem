import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5145/api',
    withCredentials: true,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
},
    (error) => Promise.reject(error)
);

// Add this to debug token issues
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error('Authentication error:', error.response.data);
            // Optional: Redirect to login if token is invalid
            // window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;
