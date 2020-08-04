import Axios from 'Helpers/axios';

export default function UserController() {
  return {
    saveUser: ({ name, username, email, password, birthDate = '1990-12-12' }) => {
      const axios = Axios.GetInstance();
      return new Promise((resolve, reject) => {
        axios.post('/users', {
          username,
          name,
          email,
          password,
          birthDate,
        })
          .then(resolve)
          .catch(reject);
      });
    },

    getByEmail: async (email) => {
      const axios = Axios.GetInstance();
      return new Promise((resolve, reject) => {
        axios.get(`/users/byEmail/${email}`)
          .then(res => res.data)
          .then(resolve)
          .catch(reject)
      })
    },

    getByUsername: async (username) => {
      const axios = Axios.GetInstance();
      return new Promise((resolve, reject) => {
        axios.get(`/users/${username}`)
          .then(res => res.data)
          .then(resolve)
          .catch(reject)
      })
    },

    login: async ({ username, password }) => {
      const axios = Axios.GetInstance();
      return new Promise((resolve, reject) => {
        axios.post('login', {
          username,
          password,
        })
          .then(resolve)
          .catch(reject)
      })
    },
  };
}
