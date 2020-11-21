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

  async getByUsername(username) {
    const axios = Axios.GetInstance();
    const { data } = await axios.get(`/v1/resume/${username}`);

    return data;
  }

  async editByUsername(edits) { // TODO: Fix this function
    const user = StorageHelper.loadState('user');

    const axios = Axios.GetInstance();
    const { data } = await axios.put(`/v1/resume/${user.username}`, edits);

    return data;
  }
}
