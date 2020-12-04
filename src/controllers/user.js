import Axios from 'Helpers/axios';
import StorageHelper from 'Helpers/storage';
import jwtDecode from 'jwt-decode';

export default class UserController {
  async saveUser({ name, email, password }) {
    const axios = Axios.GetInstance();

    const res = await axios.post('/v1/users', {
      name,
      email,
      password,
    });

    return res.data;
  }

  async getByEmail(email) {
    const axios = Axios.GetInstance();
    const { data } = await axios.get(`/v1/users/email/${email}`);

    return data;
  }

  async emailExists(email) {
    try {
      await this.getByEmail(email);
      return true;
    } catch (e) {
      if (e.response.status === 404) {
        return false;
      }
      return true;
    }
  }

  async resendConfirmationEmail(email) {
    const axios = await Axios.GetInstance();

    await axios.post(`/v1/users/notification/welcome/${email}`);
  }

  async confirmUser(userId, confirmationKey) {
    const axios = await Axios.GetInstance();

    const { data } = await axios.post(`/v1/users/${userId}/confirm/${confirmationKey}`);
    return data;
  }

  decodeUserToken(_token) {
    const token = _token || StorageHelper.loadState('userToken');

    return jwtDecode(token);
  }

  saveUserToken(token) {
    StorageHelper.saveState('userToken', token);
  }

  async update(updates) {
    const userToken = StorageHelper.loadState('userToken');
    const userInfo = this.decodeUserToken();
    const userId = updates.id || updates.userId || userInfo.id;

    const axios = Axios.GetInstance(userToken);
    const { data } = await axios.put(`/v1/users/${userId}`, updates);

    return data;
  }

  async getById(userId) {
    const axios = await Axios.GetInstance();
    const { data } = await axios.get(`/v1/users/${userId}`);
    return data;
  }

  async auth({ email, password }) {
    const axios = Axios.GetInstance();
    const { data, status } = await axios.post('/v1/users/auth', {
      email,
      password,
    });

    return { data, statusCode: status };
  }

  async getProfilePicture(userId) {
    const axios = Axios.GetInstance();

    try {
      const { data } = await axios.get(`/v1/profile-picture/${userId}`);

      return data;
    } catch (e) {
      if (e.response.status === 404) {
        return null;
      }
      throw e;
    }
  }
}
