import Axios from 'Helpers/axios';

export default class TagController {
  async getTestTags() {
    const axios = await Axios.GetInstance();
    const { data } = await axios.get('/v1/tags/tests');

    return data;
  }
}
