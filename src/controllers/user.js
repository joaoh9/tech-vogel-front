import Axios from 'Helpers/axios';

export default class UserController {
  saveUser({ name, username, email, password, birthDate = '1990-12-12' }) {
    const axios = Axios.GetInstance();
    return new Promise((resolve, reject) => {
      axios
        .post('/users', {
          username,
          name,
          email,
          password,
          birthDate,
        })
        .then(resolve)
        .catch(reject);
    });
  }

  async getByEmail(email) {
    const axios = Axios.GetInstance();
    return new Promise((resolve, reject) => {
      axios
        .get(`/users/byEmail/${email}`)
        .then(res => res.data)
        .then(resolve)
        .catch(reject);
    });
  }

  async getByUsername(username) {
    const axios = Axios.GetInstance();
    return new Promise((resolve, reject) => {
      axios
        .get(`/users/${username}`)
        .then(res => res.data)
        .then(resolve)
        .catch(reject);
    });
  }

  async login({ username, password }) {
    const axios = Axios.GetInstance();
    return new Promise((resolve, reject) => {
      axios
        .post('login', {
          username,
          password,
        })
        .then(resolve)
        .catch(reject);
    });
  }
}
