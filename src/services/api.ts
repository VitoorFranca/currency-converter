import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_EXCHANGERATE_API_BASE}${process.env.REACT_APP_EXCHANGERATE_API_KEY}`
});

//api.defaults.headers['Authorization'] = `Bearer ${process.env.REACT_APP_EXCHANGERATE_API_KEY}`;

export default api;