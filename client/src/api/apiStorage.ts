import axios from 'axios';

const apiStorage = axios.create({
  baseURL: 'http://localhost:4000/',
});

export default apiStorage;
