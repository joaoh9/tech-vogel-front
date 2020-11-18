import jwtDecode from 'jwt-decode';
import StorageHelper from 'Helpers/storage';
import Axios from 'Helpers/axios';

export default class CompanyController {
  async save(details) {
    const userToken = StorageHelper.loadState('userToken');
    const userInfo = jwtDecode(userToken);

    const axios = await Axios.GetInstance({
      api: '/serve',
      token: userToken,
    });

    const { data } = await axios.post('/v1/companies', { ...details, authorId: userInfo.id });
    return data;
  }

  async getById(companyId) {
    const axios = await Axios.GetInstance();
    const { data } = await axios.get(`/v1/companies/${companyId}`);
    return data;
  }

  async getUserToken(){
    const userToken = StorageHelper.loadState('userToken');
    return jwtDecode(userToken);
  }

  async getByUserEmail(email) {
    const axios = Axios.GetInstance({ api: '/serve' });
    const { data } = await axios.get(`/v1/companies/author/email/${email}`);

    return data;
  }

  async getByUserId(userId) {
    if (userId === 'current') {
      userId = this.getUserToken().id
    }
    const axios = Axios.GetInstance({ api: '/serve' });
    const { data } = await axios.get(`/v1/companies/author/${userId}`);

    return data;
  }

  getByAuthorId(authorId) {
    return this.getByUserId(authorId)
  }
}
