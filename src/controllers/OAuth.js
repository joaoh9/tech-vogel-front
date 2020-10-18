import Axios from 'Helpers/axios';
import config from '@config';

export default class JobController {
  async confirmAcces(code) {
    const axios = await Axios.GetInstance({ api: 'api-github' });
    const res = await axios.post(
      `/access_token?code=${code}?client_id=${config.client_id}?client_secret=${config.client_secret}`,
    );
    return res;
  }

  async getAccesCode() {
    const axios = await Axios.GetInstance({ api: 'api-github' });

    await axios.get(`/authorize?client_id=${config.client_id}`);
  }
}
