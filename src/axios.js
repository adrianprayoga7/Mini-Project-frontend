import axios from 'axios';

// axios.defaults.headers.common['ngrok-skip-browser-warning'] = 'any value';

//fungsi untuk membuat request dengan menggunakan axios
//baseURL yang digunakan adalah localhost 8800
export const makeRequest = axios.create({
  baseURL: 'http://localhost:8800/api/',
  withCredentials: true,
});
