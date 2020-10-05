import Axios from 'Helpers/axios';

export default class CompanyController {
  async registerCompany(details) {
    details.companyId = details.name.replace(/ /g, '-');
    const axios = await Axios.GetInstance();
    const res = await axios.post('/company', details);
    return res;
  }

  async getCompanyById(companyId) {
    const axios = await Axios.GetInstance();
    const res = await axios.get(`/company/${companyId}`);
    return res;
  }
}
