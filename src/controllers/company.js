import Axios from 'Helpers/axios';

export default class CompanyController {
  async save(details) {
    const axios = await Axios.GetInstance();
    const { data } = await axios.post('/company', { ...details, tokenId: 'teste' });
    return data;
  }

  async getById(companyId) {
    const axios = await Axios.GetInstance();
    const { data } = await axios.get(`/company/${companyId}`);
    return data;
  }

  async getByUserEmail(email) {
    const axios = Axios.GetInstance({ api: '/serve' });
    const { data } = await axios.get(`/v1/companies/author/email/${email}`);

    return data;
  }

  async getByUserId(userId) {
    const axios = Axios.GetInstance({ api: '/serve' });
    const { data } = await axios.get(`/v1/companies/author/${userId}`);

    return data;
  }
}
