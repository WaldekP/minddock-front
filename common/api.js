import axios from 'axios';

export const api = axios.create({
  withCredentials: true,
});

export const API_URL = process.env.API || 'http://localhost:2000';

export const getAppUrl = req => {
  const host = req
    ? req.headers['x-forwarded-host'] || req.headers.host
    : window.location.host;

  const proto = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  return `${proto}://${host}`;
};
