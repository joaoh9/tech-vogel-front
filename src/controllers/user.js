import Axios from 'Helpers/axios';

export default function UserController() {
  return {
    saveUser: ({ name, username, email, password, birthDate }) => {
      const axios = Axios.GetInstance();
      return new Promise((resolve, reject) => {
        axios.post('/users', {
          name,
          username,
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
        axios.get(`/users/byUsername/${username}`)
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
          .then(res => res.data)
          .then(resolve)
          .catch(reject)
      })
    },
  };
}
