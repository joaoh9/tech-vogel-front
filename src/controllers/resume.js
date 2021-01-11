import Axios from 'Helpers/axios';
import StorageHelper from 'Helpers/storage';

export default class {
  async save(resume) {
    const token = StorageHelper.loadState('userToken');
    const axios = await Axios.GetInstance(token);

    const { data } = await axios.post('/v1/resume', resume);

    return data;
  }

  async getCurrentResume() {
    const userToken = StorageHelper.loadState('userToken');
    const axios = Axios.GetInstance(userToken);
    const { data } = await axios.get('/v1/resume/me');

    return data;
  }

  async getByUserId(userId) {
    const userToken = StorageHelper.loadState('userToken');
    const axios = Axios.GetInstance(userToken);
    const { data } = await axios.get(`/v1/resume/${userId}`);

    return data;
  }

  async update(updates) {
    const userToken = StorageHelper.loadState('userToken');
    const axios = Axios.GetInstance(userToken);
    const { data } = await axios.put('/v1/resume/me', updates);

    return data;
  }
}
