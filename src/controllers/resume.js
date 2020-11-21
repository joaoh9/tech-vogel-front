import Axios from 'Helpers/axios';
import StorageHelper from 'Helpers/storage';

export default class {
  async save(resume) {
    const token = StorageHelper.loadState('userToken');
    const axios = await Axios.GetInstance(token);
    const userId = resume.id || resume.userId || this.decodeUserToken().id;

    const finalObj = {
      ...resume,
      userId,
    };

    const { data } = await axios.post('/v1/resume/', finalObj);

    return data;
  }

  async getByUserId(userId) {
    const axios = Axios.GetInstance();
    const { data } = await axios.get(`/v1/resume/${userId}`);

    return data;
  }
}
