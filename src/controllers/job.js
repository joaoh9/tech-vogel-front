import Axios from 'Helpers/axios';
import StorageHelper from 'Helpers/storage';
import CompanyController from 'Controllers/company';

export default class JobController {
  async save(jobDetails) {
    const userToken = StorageHelper.loadState('userToken');

    const companyController = new CompanyController();
    const companyInfo = await companyController.getByUserId('current');

    const finalObj = {
      ...jobDetails,
      companyId: companyInfo.id,
    };

    const axios = await Axios.GetInstance(userToken);
    const { data } = await axios.post('/v1/jobs', finalObj);

    return data;
  }

  async getAll() {
    const axios = await Axios.GetInstance();
    const { data } = await axios.get('/v1/jobs');
    return data;
  }

  async getCompanyJobs(companyId) {
    const userToken = StorageHelper.loadState('userToken');
    const axios = await Axios.GetInstance(userToken);
    const { data } = await axios.get(`/v1/jobs/company/${companyId}`);
    return data;
  }

  async getAppliedJobs(id) {
    const userToken = StorageHelper.loadState('userToken');
    const axios = await Axios.GetInstance(userToken);
    const { data } = await axios.get(`/v1/jobs/user/${id}`);
    return data;
  }

  async getById(jobId) {
    const axios = await Axios.GetInstance();
    const { data } = await axios.get(`/v1/jobs/${jobId}`);
    return data;
  }

  async update(jobId, updates) {
    const userToken = StorageHelper.loadState('userToken');
    const axios = await Axios.GetInstance(userToken);
    const { data } = await axios.put(`/v1/jobs/${jobId}`, updates);
    return data;
  }

  async remove(jobId) {
    const userToken = StorageHelper.loadState('userToken');
    const axios = await Axios.GetInstance(userToken);
    const { data } = await axios.put(`/v1/jobs/${jobId}`);
    return data;
  }

  async apply(userId, jobId) {
    const userToken = StorageHelper.loadState('userToken');
    const axios = await Axios.GetInstance(userToken);
    const { data } = await axios.post(`/v1/jobs/${jobId}/apply/${userId}`);
    return data;
  }
}
