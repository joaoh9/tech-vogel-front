import Axios from 'Helpers/axios';

export default class JobController {
  async saveJob(jobDetails) {
    const axios = await Axios.GetInstance();
    const res = await axios.post('/job', jobDetails);
    return res;
  }

  async getAllJobs() {
    const axios = await Axios.GetInstance();
    const res = await axios.get('/job');
    return res;
  }

  async getJobById(jobId) {
    const axios = await Axios.GetInstance();
    const res = await axios.get(`/job/${jobId}`);
    return res;
  }
}
