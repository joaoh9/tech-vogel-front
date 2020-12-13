import Axios from 'Helpers/axios';
import StorageHelper from 'Helpers/storage';
import UserController from 'Controllers/user';

export default class {
  async save(resume) {
    const token = StorageHelper.loadState('userToken');
    const axios = await Axios.GetInstance(token);

    const userController = new UserController();
    const userId = userController.decodeUserToken().id;

    const finalObj = {
      ...resume,
      userId,
    };
    const { data } = await axios.post('/v1/profile-picture/', finalObj);

    return data;
  }

  async getByUserId(userId) {
    const token = StorageHelper.loadState('userToken');
    const axios = await Axios.GetInstance(token);
    const { data } = await axios.get(`/v1/profile-picture/${userId}`);

    return data;
  }

  async updateByUserId(userId, updates) {
    const userToken = StorageHelper.loadState('userToken');
    const axios = Axios.GetInstance(userToken);
    const { data } = await axios.put(`/v1/profile-picture/${userId}`, updates);

    return data;
  }

  async removeByUserId(userId) {
    const userToken = StorageHelper.loadState('userToken');
    const axios = Axios.GetInstance(userToken);
    const { data } = await axios.delete(`/v1/profile-picture/${userId}`);

    return data;
  }
}
