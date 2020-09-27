import Axios from 'Helpers/axios';

export default class CompanyController {
  async sendFeedback(details) {
    const axios = await Axios.GetInstance();

    const res = await axios.post('/feedback', details);
    return res;
  }
}
