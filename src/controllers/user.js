import Axios from 'Helpers/axios';

export default function UserController() {
  return {
    saveUser: async ({ name, username, email, password }) => {
      const axios = Axios.GetInstance();
      return new Promise((resolve, reject) => {
        axios
          .post('/user', {
            name,
            username,
            email,
            password,
          })
          .then(resolve)
          .catch(reject);
      });
    },

    getByEmail: async(email) => {
      const axios = Axios.GetInstance();
      return new Promise((resolve, reject) => {
        axios.get(`/users/byEmail/${email}`)
          .then(resolve)
          .catch(reject)
      })
    },

    getByUsername: async(username) => {
      const axios = Axios.GetInstance();
      return new Promise((resolve, reject) => {
        axios.get(`/users/${username}`)
          .then(resolve)
          .catch(reject)
      })
    },
  };
}
