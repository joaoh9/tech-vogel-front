import Axios from 'Helpers/axios';

export default class CompanyController {
  async save(details) {
    details.companyId = details.name.replace(/ /g, '-');
    const axios = await Axios.GetInstance();

    const { data } = await axios.post('/company', details);
    return data;
  }

  async getById(companyId) {
    const axios = await Axios.GetInstance();
    const { data } = await axios.get(`/company/${companyId}`);
    return data;
  }
}
