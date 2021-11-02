import axios from "axios";

export const baseURL = "";

const api = axios.create({
    timeout: 60,
    baseURL
});

export default api;
