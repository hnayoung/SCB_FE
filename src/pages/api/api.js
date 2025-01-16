import axios from 'axios';

const api = axios.create({
  baseURL:  '/api',//process.env.REACT_APP_API_BASE_URL || 'http://port-0-scb-be-m5p35c12a9749b96.sel4.cloudtype.app/api',
  headers: {
    accept: 'application/json',
    'X-CSRFTOKEN': process.env.REACT_APP_API_KEY || '',
  },
});

export default api;
