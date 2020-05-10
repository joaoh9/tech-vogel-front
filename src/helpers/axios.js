import axios from 'axios';

export default class Axios {
  static getInstance(authToken = null) {
    const contentType = 'application/json;charset=UTF-8';
    const headers = {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
    };

    if (authToken) {
      headers.Authorization = `Bearer ${authToken}`;
    }

    return axios.create({
      baseURL: '/api',
      timeout: 30000,
      headers,
      maxContentLength: 20 * 1000000,
    });
  }
}
