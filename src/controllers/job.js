import Axios from 'Helpers/axios';
import JwtHelper from 'Helpers/jwt';

export default class JobController {
  async save(jobDetails) {
    const axios = await Axios.GetInstance();
    const jwtHelper = new JwtHelper();

    const company = jwtHelper.getData('company');
    console.log('company', company);

    const finalObj = {
      ...jobDetails,
      companyId: company.companyId,
    };
    console.log(JSON.stringify(finalObj));

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
}
