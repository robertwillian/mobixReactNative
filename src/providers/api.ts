import axios from "axios";

export const baseURL = "https://pokeapi.co/api/v2/";

const api = axios.create({
    timeout: 60,
    baseURL
});

export default api;
