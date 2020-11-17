import axios from 'axios';

export default class Axios {
  static GetInstance({ api = '/serve', token = null } = {}) {
    const contentType = 'application/json;charset=UTF-8';
    const headers = {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'access-control-allow-origin': '*',
      'Access-Control-Allow-Headers': '*',
      accept: 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    console.log(
      `[AxiosHelper] Creating Axios with Header:
       ${JSON.stringify(headers)} and baseURL: ${api}`,
    );

    return axios.create({
      baseURL: api,
      timeout: 30 * 1000,
      headers,
      maxContentLength: 20 * 1000 * 1000,
      withCredentials: true,
    });
  }
}
