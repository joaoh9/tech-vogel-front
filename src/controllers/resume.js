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
    console.log(finalObj)
    const { data } = await axios.post('/resumes', finalObj);
    return data;
  }
}
