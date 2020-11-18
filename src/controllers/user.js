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

    console.log(res);

    return res.data;
  }

  async getByEmail(email) {
    const axios = Axios.GetInstance();
    const { data } = await axios.get(`/v1/users/email/${email}`);

    return data;
  }

  decodeUserToken(_token) {
    const token = _token || StorageHelper.loadState('userToken');
    return jwtDecode(token);
  }

  async update(updates) {
    const userToken = StorageHelper.loadState('userToken');
    const userId = updates.id || updates.userId || this.decodeUserToken().id;

    const userInfo = jwtDecode(userToken);
    userInfo.side = updates;

    const axios = Axios.GetInstance(userToken);
    const { data } = await axios.put(`/v1/users/${userId}`, userInfo.side);
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

  async getProfilePicture(username) {
    const axios = Axios.GetInstance();

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
}
