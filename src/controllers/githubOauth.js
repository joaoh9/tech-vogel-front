import Axios from 'Helpers/axios';
import StorageHelper from 'Helpers/storage';

import config from '@config';

export default class JobController {
  async confirmAcces(code) {
    const axios = await Axios.GetInstance({ api: '/serve' });
    const { data } = await axios.get(`/v1/users/auth/callback?code=${code}`);

    return data;
  }

  async getUserInfo() {
    const accessToken = StorageHelper.loadState('access_token');
    if (!accessToken) {
      throw {
        status: 403,
        message: 'You must grant github acces first!',
      };
    }
    const axios = await Axios.GetInstance({ api: '/serve', token: accessToken });

    const { data } = await axios.get('/v1/users/info');
    console.log(data);
    return data;
  }
}
