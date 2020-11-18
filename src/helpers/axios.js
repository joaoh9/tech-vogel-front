import axios from 'axios';

export default class Axios {
  static GetInstance(token = null) {
    const contentType = 'application/json;charset=UTF-8';
    const headers = {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'access-control-allow-origin': '*',
      'Access-Control-Allow-Headers': '*',
      accept: 'application/json',
    };

    console.log('token: ' + token)

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    console.log(
      `[AxiosHelper] Creating Axios with Header:
       ${JSON.stringify(headers)} and baseURL: /serve`,
    );

    return axios.create({
      baseURL: '/serve',
      timeout: 30 * 1000,
      headers,
      maxContentLength: 20 * 1000 * 1000,
      withCredentials: true,
    });
  }
}
