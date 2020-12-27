import jwtDecode from 'jwt-decode';
import StorageHelper from 'Helpers/storage';
import Axios from 'Helpers/axios';

export default class CompanyController {
  async save(details) {
    const userToken = StorageHelper.loadState('userToken');

    const axios = Axios.GetInstance(userToken);

    const { data } = await axios.post('/v1/companies', details);

    StorageHelper.saveState('userToken', data.token);

    return data;
  }

  async getByCurrentUser() {
    const userToken = StorageHelper.loadState('userToken');

    const axios = Axios.GetInstance(userToken);

    const { data } = await axios.get('/v1/company/me');

    return data;
  }

  async getByUserId(userId) {
    if (userId === 'current' || !userId) {
      userId = this.decodeUserToken().id;
    }
    const axios = Axios.GetInstance();
    const { data } = await axios.get(`/v1/companies/user/${userId}`);

    return data;
  }

  async getById(companyId) {
    const axios = await Axios.GetInstance();
    const { data } = await axios.get(`/v1/companies/${companyId}`);
    return data;
  }

  async update(companyId, updates) {
    const userToken = StorageHelper.loadState('userToken');
    const axios = await Axios.GetInstance(userToken);
    const { data } = await axios.put(`/v1/companies/${companyId}`, updates);
    return data;
  }

  async remove(companyId) {
    const userToken = StorageHelper.loadState('userToken');
    const axios = await Axios.GetInstance(userToken);
    const { data } = await axios.delete(`/v1/companies/${companyId}`);
    return data;
  }

  decodeUserToken(_token) {
    const token = _token || StorageHelper.loadState('userToken');
    return jwtDecode(token);
  }
}
