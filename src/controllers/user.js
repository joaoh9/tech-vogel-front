import Axios from 'Helpers/axios';

export default class UserController {
  async saveUser({ name, username, email, password, birthDate = '1990-12-12' }) {
    const axios = Axios.GetInstance({ api: '/api' });

    const { data: res } = await axios.post('/users', {
      username,
      name,
      email,
      password,
      birthDate,
    });
    return res;
  }

  async getByEmail(email) {
    const axios = Axios.GetInstance({ api: '/api' });
    const { data: res } = await axios.get(`/users/byEmail/${email}`);

    return res;
  }

  async getByUsername(username) {
    const axios = Axios.GetInstance({ api: '/api' });
    const { data: res } = await axios.get(`/users/${username}`);

    return res;
  }

  async login({ username, password }) {
    const axios = Axios.GetInstance({ api: '/api' });
    const { data: res } = await axios.post('login', {
      username,
      password,
    });

    return res;
  }

  async resendConfirmationEmail({ email }) {
    const axios = Axios.GetInstance({ api: '/resend-confirmation-link' });

    const { data: res } = await axios.get('/');

    return { ...res, email };
  }

  async confirmAccount(confirmationId){
    const axios = Axios.GetInstance()

    return await axios.get(`/users/confirmAccount/${confirmationId}`)
  }
}
