import Axios from 'Helpers/axios';
import StorageHelper from 'Helpers/storage';

export default class JobController {
  async save(jobDetails) {
    const axios = await Axios.GetInstance();

    const companyId = StorageHelper.loadState('companyId');

    const finalObj = {
      ...jobDetails,
      companyId,
    };

    const { data } = await axios.post('/jobs', finalObj);
    return data;
  }

  async getAll() {
    const axios = await Axios.GetInstance();
    const { data } = await axios.get('/jobs');
    return data;
  }

  async getById(jobId) {
    const axios = await Axios.GetInstance();
    const { data } = await axios.get(`/jobs/${jobId}`);
    return data;
  }

  async getAppliedJobs(username) {
    // TODO: atualizar com rota do back
    return this.getAll();
  }

  async apply(username, jobId) {
    const axios = await Axios.GetInstance();
    const { data } = await axios.post('/jobs/apply', {
      username,
      jobId,
    });
    return data;
  }

  async patch(job) {
    const axios = await Axios.GetInstance();
    const { data } = await axios.patch('/jobs', job);
    return data;
  }
}
