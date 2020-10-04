import Axios from 'Helpers/axios';

export default class {
  async save(resume) {
    const axios = await Axios.GetInstance();
    const res = await axios.post('/resumes', resume);
    return res;
  }
}
