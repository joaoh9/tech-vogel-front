import axios from 'axios';

export default class Axios {
  static GetInstance({ api = '/api' } = { api: '/api' }) {
    const contentType = 'application/json;charset=UTF-8';
    const headers = {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'access-control-allow-origin': '*',
      'Access-Control-Allow-Headers': '*',
      accept: 'application/json',
    };

    return axios.create({
      baseURL: api,
      timeout: 30000,
      headers,
      maxContentLength: 20 * 1000000,
    });
  }
}
