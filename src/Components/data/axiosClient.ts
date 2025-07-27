import axios from 'axios';

const api = axios.create({
  baseURL:'https://exapi-gjsy.onrender.com/',
  withCredentials: true //send cookies!
});

export default api;