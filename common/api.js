import axios from 'axios';

export const api = axios.create({
  withCredentials: true,
});

export const API_URL = process.env.API || 'http://localhost:2000'
