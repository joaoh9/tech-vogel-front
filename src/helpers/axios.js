import axios from 'axios';
import StorageHelper from 'Helpers/storage';

const MB = 1000000;

export default class Axios {
  static GetInstance() {
    const contentType = 'application/json;charset=UTF-8';
    const headers = {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'access-control-allow-origin': '*',
      'Access-Control-Allow-Headers': '*',
      accept: 'application/json',
    };

    const userToken = StorageHelper.loadState('userToken');

    if (userToken) {
      headers['Authorization'] = `Bearer ${userToken}`;
    }

    return axios.create({
      baseURL: '/api',
      timeout: 30 * 1000,
      headers,
      maxContentLength: 15 * MB,
      withCredentials: true,
    });
  }
}
