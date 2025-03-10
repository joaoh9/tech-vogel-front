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

  async getDashboardInfo() {
    const axios = await Axios.GetInstance();

    const { data } = await axios.get('/v1/users/me/dashboard');

    return data;
  }

  async getMyProfilePicture() {
    const axios = await Axios.GetInstance();

    const { data } = await axios.get('/v1/users/me/profile-pic');

    return data;
  }

  async checkCorrectCode(email, key) {
    const axios = await Axios.GetInstance();

    const { data } = await axios.post('/v1/users/email-key', {
      email,
      key,
    });

    return data;
  }

  async resetPasswordNotification(email) {
    const axios = await Axios.GetInstance();

    const { data } = await axios.post('/v1/users/reset-password', {
      email,
    });

    return data;
  }

  async resetPassword(email, confirmationCode, password) {
    const axios = await Axios.GetInstance();

    const { data } = await axios.post(`/v1/users/${email}/reset-password/${confirmationCode}`, {
      newPassword: password,
    });

    return data;
  }

  async resendConfirmationEmail(email) {
    const axios = await Axios.GetInstance();

    await axios.post(`/v1/users/notification/welcome/${email}`);
  }

  async confirmUser(email, confirmationKey) {
    const axios = await Axios.GetInstance();

    const { data } = await axios.post(`/v1/users/${email}/confirm/${confirmationKey}`);

    this.saveUserToken(data.token);

    return data;
  }

  decodeUserToken(_token) {
    const token = _token || StorageHelper.loadState('userToken');

    try {
      return jwtDecode(token);
    } catch (e) {
      return null;
    }
  }

  saveUserToken(token) {
    StorageHelper.saveState('userToken', token);
  }

  async update(updates) {
    const axios = Axios.GetInstance();
    await axios.put('/v1/users/me', updates);

    const { data: newUserData } = await axios.post('/v1/users/me/token');
    this.saveUserToken(newUserData.token);

    delete newUserData.token;

    return newUserData;
  }

  async getMe() {
    const axios = await Axios.GetInstance();
    const { data } = await axios.get('/v1/users/me');

    return data;
  }

  async getById(id) {
    const axios = await Axios.GetInstance();
    const { data } = await axios.get(`/v1/users/${id}`);

    return data;
  }

  async auth({ email, password }) {
    const axios = await Axios.GetInstance();
    const { data, status } = await axios.post('/v1/users/auth', {
      email,
      password,
    });

    return { data, statusCode: status };
  }

  async getProfilePicture() {
    const axios = Axios.GetInstance();

    try {
      const { data } = await axios.get('/v1/users/me/profile-picture');

      return data;
    } catch (e) {
      if (e.response.status === 404) {
        return null;
      }
      throw e;
    }
  }
}
