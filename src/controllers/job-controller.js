import Axios from '../helpers/axios';

export default function UserController() {
  return {
    registerJob: async (jobDetails) => {
      const axios = await Axios.GetInstance();
      return new Promise((resolve, reject) => {
        axios
          .post('/job', jobDetails)
          .then(resolve)
          .catch(reject);
      });
    },
  };
}
