import Axios from 'Helpers/axios';
import StorageHelper from 'Helpers/storage';

export default class {
  async save(resume) {
    const axios = await Axios.GetInstance({ api: '/serve' });
    const user = StorageHelper.loadState('user');

    const finalObj = {
      ...resume,
    };
    const { data } = await axios.post(`/v1/profile-picture/${user.username}`, finalObj);
    return data;
  }

  async getByUsername(username) {
    const axios = Axios.GetInstance({ api: '/serve' });
    const { data } = await axios.get(`/v1/profile-picture/${username}`);

    return data;
  }

  async editByUsername(edits) {
    const user = StorageHelper.loadState('user');

    const axios = Axios.GetInstance({ api: '/serve' });
    const { data } = await axios.put(`/v1/profile-picture/${user.username}`, edits);

    return data;
  }
}
