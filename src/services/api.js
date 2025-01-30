import axios from "axios";

// GET https://cep.awesomeapi.com.br/:format/:cep
// https://cep.awesomeapi.com.br/json/05424020

const api = axios.create({
    baseURL: 'https://cep.awesomeapi.com.br/json/'
})

export default api;