import axios from 'axios';

const apiConfig = axios.create({
    baseURL: 'http://localhost:8080',
    // baseURL: 'https://sds1-prmorais.herokuapp.com',
});

export default apiConfig;
