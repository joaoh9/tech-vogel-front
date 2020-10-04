import Axios from 'Helpers/axios';

export default class UserController {
  async saveUser({ name, username, email, password, birthDate = '1990-12-12' }) {
    const axios = Axios.GetInstance({ api: '/api' });

    const { data } = await axios.post('/users', {
      username,
      name,
      email,
      password,
      birthDate,
    });
    return data;
  }

  async getByEmail(email) {
    const axios = Axios.GetInstance({ api: '/api' });
    const { data } = await axios.get(`/users/byEmail/${email}`);

    return data;
  }

  async getByUsername(username) {
    const axios = Axios.GetInstance({ api: '/api' });
    const { data } = await axios.get(`/users/${username}`);

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
