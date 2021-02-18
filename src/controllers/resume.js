import Axios from 'Helpers/axios';

export default class {
  async save(resume) {
    const axios = await Axios.GetInstance();

    const { data } = await axios.post('/v1/resume', resume);

    return data;
  }

  async getCurrentResume() {
    const axios = Axios.GetInstance();
    const { data } = await axios.get('/v1/resume/me');

    return data;
  }

  async getByUserId(userId) {
    const axios = Axios.GetInstance();
    const { data } = await axios.get(`/v1/resume/${userId}`);

    return data;
  }

  async update(updates) {
    const axios = Axios.GetInstance();
    const { data } = await axios.put('/v1/resume/me', updates);

    return data;
  }
}
