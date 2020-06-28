import axios from 'axios';

export default class Axios {
  static GetInstance(token = null) {
    const headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return axios.create({
      baseURL: 'http://localhost:5000',
      timeout: 30000,
      headers,
      maxContentLength: 20 * 1000000,
    });
  }
}
