import axios from 'axios';

const api = axios.create({
    // Definindo Base url.
    baseURL:'https://api.github.com',
});

export default api;