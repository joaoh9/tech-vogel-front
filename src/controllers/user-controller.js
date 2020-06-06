import Axios from '../helpers/axios';

export default class UserController {
  constructor() {
    this.axios = new Axios.GetInstance();
  }

  saveUser({
    name, username, email, password,
  }) {
    return new Promise((resolve, reject) => {
      this.axios
        .post('/users', {
          name,
          userId: username,
          email,
          password,
        })
        .then(resolve)
        .catch(reject);
    });
  }
}
