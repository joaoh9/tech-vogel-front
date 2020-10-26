import Axios from 'Helpers/axios';
import StorageHelper from 'Helpers/storage';

export default class {
  async save(resume) {
    const axios = await Axios.GetInstance({ api: '/api' });
    const user = StorageHelper.loadState('user');

    const finalObj = {
      ...resume,
      username: user.username,
    };
    const { data } = await axios.post('/resumes', finalObj);
    return data;
  }

  async getByUsername(username) {
    const axios = Axios.GetInstance({ api: '/api' });
    const { data } = await axios.get(`/resumes/${username}`);

    return data;
  }

  async hasSavedResume(username) {
    const userResume = await this.getByUsername(username);
    return userResume.length > 0;
  }
}
