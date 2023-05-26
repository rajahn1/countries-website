import axios from "axios";
const apiUrl = 'https://restcountries.com/v3.1/all';

export const api = axios.create({
    baseURL: apiUrl,
    timeout: 10000,
    headers: {"Content-Type" : "Application/Json"}
});
