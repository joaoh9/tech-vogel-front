import Axios from 'Helpers/axios';

export default function UserController() {
  return {
    saveUser: async ({ name, username, email }) => {
      const axios = await Axios.GetInstance();
      return new Promise((resolve, reject) => {
        axios
          .post('/user', {
            name: name || 'name',
            username: username || `user-${new Date().getTime().toString()}`,
            // birthDate: '1996-10-10',
            email: email || 'email@email.com',
            // password: password || '1234567',
          })
          .then(resolve)
          .catch(reject);
      });
    },

    saveLPUser: async ({ name, email, skills }) => {
      const axios = await Axios.GetInstance();
      return new Promise((resolve, reject) => {
        axios
          .post('/v1/users/', {
            name,
            email,
            skills,
          })
          .then(resolve)
          .catch(reject);
      });
    },
  };
}
