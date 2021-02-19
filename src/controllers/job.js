import Axios from 'Helpers/axios';
import CompanyController from 'Controllers/company';
import qs from 'qs';

export default class JobController {
  async save(jobDetails) {
    const axios = await Axios.GetInstance();
    const { data } = await axios.post('/v1/jobs', jobDetails);

    return data;
  }

  async getAll({ limit = 15, skip = 0 } = {}) {
    const query = qs.stringify({ limit, skip }, { addQueryPrefix: true });
    const axios = await Axios.GetInstance();
    const { data: jobs } = await axios.get('/v1/jobs' + query);

    const companyController = new CompanyController();
    for (let i = 0; i < jobs.length; i++) {
      jobs[i].company = await companyController.getById(jobs[i].companyId);
    }

    return jobs;
  }

  async getCardJobs({ limit = 15, skip } = {}) {
    const query = qs.stringify({ limit, skip }, { addQueryPrefix: true });
    const axios = await Axios.GetInstance();
    const { data } = await axios.get('/v1/jobs/cards' + query);

    return data;
  }

  async getJobsPostedCount(companyId) {
    const axios = await Axios.GetInstance();

    const { data } = await axios.get(`/v1/jobs/company/${companyId}/count`);

    return data.amount;
  }

  async getCompanyJobs(companyId, { limit = 15, skip = 0 } = {}) {
    const axios = await Axios.GetInstance();
    const query = qs.stringify({ limit, skip }, { addQueryPrefix: true });
    const { data } = await axios.get(`/v1/jobs/company/${companyId}` + query);

    return data;
  }

  async getCurrentCompanyJobs({ limit = 15, skip = 0 } = {}) {
    const axios = await Axios.GetInstance();
    const query = qs.stringify({ limit, skip }, { addQueryPrefix: true });
    const { data } = await axios.get('/v1/jobs/company/me' + query);

    return data;
  }

  async getAppliedJobs(userId, { limit = 15, skip = 0 } = {}) {
    const axios = await Axios.GetInstance();
    const query = qs.stringify({ limit, skip }, { addQueryPrefix: true });
    const { data } = await axios.get(`/v1/jobs/user/${userId}` + query);

    return data;
  }

  async getCurrentUserAppliedJobsCardInfo({ limit = 15, skip = 0 } = {}) {
    const axios = await Axios.GetInstance();
    const query = qs.stringify({ limit, skip }, { addQueryPrefix: true });
    const { data } = await axios.get(`/v1/jobs/card/user/me${query}`);

    return data;
  }

  async getById(jobId) {
    const axios = await Axios.GetInstance();
    const { data } = await axios.get(`/v1/jobs/${jobId}`);

    return data;
  }

  async update(jobId, updates) {
    const axios = await Axios.GetInstance();
    const { data } = await axios.put(`/v1/jobs/me/${jobId}`, updates);

    return data;
  }

  async remove(jobId) {
    const axios = await Axios.GetInstance();
    const { data } = await axios.put(`/v1/jobs/${jobId}`);

    return data;
  }

  async apply(jobId) {
    const axios = await Axios.GetInstance();
    const { data } = await axios.post(`/v1/jobs/${jobId}/apply/me`);

    return data;
  }

  async getReport(jobId) {
    const axios = await Axios.GetInstance();
    const { data } = await axios.get(`/v1/reports/${jobId}`);

    return data;
  }

  async getApplicationCount(jobId) {
    const axios = await Axios.GetInstance();
    const { data } = await axios.get(`/v1/jobs/${jobId}/applications/count`);

    return data;
  }
}
