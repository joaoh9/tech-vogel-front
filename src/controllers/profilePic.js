import Axios from 'Helpers/axios';
import StorageHelper from 'Helpers/storage';
import UserController from 'Controllers/user';

export default class {
  async save(resume) {
    const axios = await Axios.GetInstance();
    const userController = new UserController();
    const userId = userController.decodeUserToken().id;

    const finalObj = {
      ...resume,
      userId,
    };
    const { data } = await axios.post('/v1/profile-picture/', finalObj);

    return data;
  }

  async getByUsername(userId) {
    const axios = Axios.GetInstance();
    const { data } = await axios.get(`/v1/profile-picture/${userId}`);

    return data;
  }

  async editByUsername(edits) {
    const axios = Axios.GetInstance();
    const userController = new UserController();
    const userId = userController.decodeUserToken().id;

    const { data } = await axios.put(`/v1/profile-picture/${userId}`, edits);

    return data;
  }
}
