import axios from 'axios';

/* Variável criada para utilização da API de forma mais simples */

const api = axios.create({
   baseURL: 'https://api.github.com/'
})

export default api;