import Axios from 'Helpers/axios';
import StorageHelper from 'Helpers/storage';
import UserController from './user';

export default class {
  async save(resume) {
    const token = StorageHelper.loadState('userToken');
    const userInfo = new UserController().decodeUserToken(token);
    const axios = await Axios.GetInstance(token);
    const userId = resume.id || resume.userId || userInfo.id;

    const finalObj = {
      ...resume,
      userId,
    };

    const { data } = await axios.post('/v1/resume/', finalObj);

    return data;
  }

  async getByUserId(userId) {
    const userToken = StorageHelper.loadState('userToken');
    const axios = Axios.GetInstance(userToken);
    const { data } = await axios.get(`/v1/resume/${userId}`);

    return data;
  }

  async updateByUserId(userId, updates) {
    const userToken = StorageHelper.loadState('userToken');
    const axios = Axios.GetInstance(userToken);
    const { data } = await axios.put(`/v1/resume/${userId}`, updates);

    return data;
  }

  async removeByUserId(userId) {
    const userToken = StorageHelper.loadState('userToken');
    const axios = Axios.GetInstance(userToken);
    const { data } = await axios.delete(`/v1/resume/${userId}`);

    return data;
  }
}
