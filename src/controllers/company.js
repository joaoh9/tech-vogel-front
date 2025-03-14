import jwtDecode from 'jwt-decode';
import StorageHelper from 'Helpers/storage';
import Axios from 'Helpers/axios';

export default class CompanyController {
  async save(details) {
    const axios = Axios.GetInstance();

    const { data } = await axios.post('/v1/companies', details);

    StorageHelper.saveState('userToken', data.token);

    return data;
  }

  async getByCurrentUser() {
    const axios = Axios.GetInstance();

    const { data } = await axios.get('/v1/companies/me');

    return data;
  }

  async getById(id) {
    const axios = await Axios.GetInstance();
    const { data } = await axios.get(`/v1/companies/${id}`);

    return data;
  }

  async getDashboardInfo() {
    const axios = await Axios.GetInstance();
    const { data } = await axios.get('/v1/companies/me/dashboard');

    return data;
  }

  async update(updates) {
    const axios = await Axios.GetInstance();
    const { data } = await axios.put('/v1/companies/me', updates);

    return data;
  }

  async remove(companyId) {
    const axios = await Axios.GetInstance();
    const { data } = await axios.delete(`/v1/companies/${companyId}`);
    return data;
  }

  decodeUserToken(_token) {
    const token = _token || StorageHelper.loadState('userToken');
    return jwtDecode(token);
  }
}
