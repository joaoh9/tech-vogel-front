import axios from 'axios';

export default class Axios {
  static GetInstance(token = null) {
    const contentType = 'application/json;charset=UTF-8';
    const headers = {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'access-control-allow-origin': '*',
      'Access-Control-Allow-Headers': '*',
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return axios.create({
      baseURL: '/api',
      timeout: 30000,
      headers,
      maxContentLength: 20 * 1000000,
    });
  }
}
