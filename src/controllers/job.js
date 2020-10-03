import Axios from 'Helpers/axios';

export default class JobController {
  async save(jobDetails) {
    const axios = await Axios.GetInstance();

    const { data } = await axios.post('/job', jobDetails);
    return data;
  }

  async getAll() {
    const axios = await Axios.GetInstance();
    const { data } = await axios.get('/job');
    return data;
  }

  async getById(jobId) {
    const axios = await Axios.GetInstance();
    const { data } = await axios.get(`/job/${jobId}`);
    return data;
  }
}
