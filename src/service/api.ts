import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3000/api/',
});

api.interceptors.response.use(
    (response: any) => {
        if (response.config.url.includes("/login") && response.data.token) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));

        }
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        console.log('tokennn', token)

        config.headers["Authorization"] = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
