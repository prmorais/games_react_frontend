import axios from 'axios';

const apiConfig = axios.create({
    baseURL: 'https://sds1-prmorais.herokuapp.com'
});

export default apiConfig;