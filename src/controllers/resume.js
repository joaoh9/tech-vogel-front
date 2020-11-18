import Axios from 'Helpers/axios';
import StorageHelper from 'Helpers/storage';

export default class {
  async save(resume) {
    const axios = await Axios.GetInstance();
    const user = StorageHelper.loadState('user');

    const finalObj = {
      ...resume,
    };
    const { data } = await axios.post(`/v1/resume/${user.username}`, finalObj);
    return data;
  }

  async getByUsername(username) {
    const axios = Axios.GetInstance();
    const { data } = await axios.get(`/v1/resume/${username}`);
    return data;
  }

  async editByUsername(edits) {
    const user = StorageHelper.loadState('user');

    const axios = Axios.GetInstance();
    const { data } = await axios.put(`/v1/resume/${user.username}`, edits);

    return data;
  }
}
