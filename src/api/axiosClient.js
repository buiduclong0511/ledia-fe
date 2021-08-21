import axios from "axios";
import { logout, store } from "src/redux";

const queryString = require("query-string");

const deploy_origin = "https://media-player-be.herokuapp.com/api";
const local_origin = "http://localhost:3001/api";

const axiosClient = axios.create({
    baseURL: local_origin,

    headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
    },

    paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use((config) => {
    const token = store.getState().auth.token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response;
        }
        return response;
    },

    (error) => {
        // Handle errors
        if (error.response && error.response.status === 401) {
            store.dispatch(logout());
        }
        throw error;
    }
);

export default axiosClient;