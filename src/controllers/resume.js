import Axios from 'Helpers/axios';

export default function ResumeController() {
  return {
    register: async (details) => {
      console.log(details);
      const axios = await Axios.GetInstance();
      return new Promise((resolve, reject) => {
        axios
          .post('/resume', details)
          .then(resolve)
          .catch(reject);
      });
    },
  };
}
