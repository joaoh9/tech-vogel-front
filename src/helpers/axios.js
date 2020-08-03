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

    // const baseURL = `${process.env.VUE_APP_URL_PREFIX}://${process.env.VUE_APP_BASE_URL}:${process.env.VUE_APP_BACK_END_PORT}`;

    // console.log('base url' + baseURL)

    return axios.create({
      baseURL: '/api',
      timeout: 30000,
      headers,
      maxContentLength: 20 * 1000000,
    });
  }
}
