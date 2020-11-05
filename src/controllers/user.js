import Axios from 'Helpers/axios';
import StorageHelper from 'Helpers/storage';

export default class UserController {
  async saveUser({ name, username, email, password, birthDate = '1990-12-12' }) {
    const axios = Axios.GetInstance({ api: '/api' });

    const res = await axios.post('/users', {
      username,
      name,
      email,
      password,
      birthDate,
    });


    return res.data;
  }

  async getByEmail(email) {
    const axios = Axios.GetInstance({ api: '/api' });
    const { data } = await axios.get(`/users/byEmail/${email}`);

    return data;
  }

  getById(id) {
    return this.getByUsername(id);
  }

  async getByUsername(username) {
    const axios = Axios.GetInstance({ api: '/api' });
    const { data } = await axios.get(`/users/${username}`);

    return data;
  }

  async getCompany(username) {
    const axios = Axios.GetInstance({ api: '/api' });
    const { data } = await axios.get(`/users/companies/${username}`);

    return data;
  }

  async login({ username, password }) {
    const axios = Axios.GetInstance({ api: '/api' });
    const { status } = await axios.post('login', {
      username,
      password,
    });

    return status;
  }

  async logout() {
    const axios = Axios.GetInstance({ api: '/api' });
    const { status } = await axios.post('logout');
    if (status === 200) {
      StorageHelper.removeState('user');
      StorageHelper.removeState('company');
    }

    return status;
  }

  async getProfilePicture(username) {
    const axios = Axios.GetInstance({ api: '/serve' });

    try {
      const { data } = await axios.get(`/v1/profile-picture/${username}`);

      return data;
    } catch (e) {
      if (e.response.status === 404) {
        return null;
      }
      throw e;
    }
  }

  async emailLogin({ email, password }) {
    const axios = Axios.GetInstance({ api: '/api' });
    const { data } = await axios.post('/emailLogin', {
      email,
      password,
    });

    return data;
  }

  async resendConfirmationEmail(email) {
    const user = await this.getByEmail(email);

    const axios = Axios.GetInstance();

    const { data } = await axios.get(`/users/sendConfirmationEmail/${user.username}`);

    return { ...data, email };
  }

  async confirmAccount(confirmationId) {
    const axios = Axios.GetInstance();

    const { data } = await axios.get(`/users/confirmAccount/${confirmationId}`);

    return data;
  }
}
