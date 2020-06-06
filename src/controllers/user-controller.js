import Axios from '../helpers/axios';

export default function UserController() {
  return {
    saveUser: async ({
      name, username, email, password,
    }) => {
      const axios = await Axios.GetInstance();
      return new Promise((resolve, reject) => {
        axios
          .post('/users', {
            name: name || 'name',
            username: username || `user-${new Date().getTime().toString()}`,
            birthDate: '1996-10-10',
            email: email || 'email@email.com',
            password: password || '1234567',
          })
          .then(resolve)
          .catch(reject);
      });
    },
  };
}
