import Axios from 'Helpers/axios';

export default function CompanyController() {
  return {
    registerCompany: async (details) => {
      const axios = await Axios.GetInstance();
      return new Promise((resolve, reject) => {
        axios
          .post('/company', details)
          .then(resolve)
          .catch(reject);
      });
    },
  };
}
