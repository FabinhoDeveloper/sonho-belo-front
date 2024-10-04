const axios = require('axios')

const api = axios.create({
    baseURL: 'http://localhost:5000', // Define a URL base para todas as requisições
    timeout: 10000, // (Opcional) Define um tempo limite de 10 segundos para requisições
    headers: {
        'Content-Type': 'application/json', // Define cabeçalhos padrão
    }
});

module.exports = api