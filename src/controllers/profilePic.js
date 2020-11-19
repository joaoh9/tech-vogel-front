import Axios from 'Helpers/axios';
import StorageHelper from 'Helpers/storage';

export default class {
  async save(resume) {
    const axios = await Axios.GetInstance();

    const finalObj = {
      ...resume,
    };
    const { data } = await axios.post('/v1/profile-picture/', finalObj);
    return data;
  }

  async getByUsername(email) {
    const axios = Axios.GetInstance();
    const { data } = await axios.get(`/v1/profile-picture/${email}`);

    return data;
  }

  async editByUsername(edits) {
    const user = StorageHelper.loadState('user');

    const axios = Axios.GetInstance();
    const { data } = await axios.put(`/v1/profile-picture/${user.email}`, edits);

    return data;
  }
}
