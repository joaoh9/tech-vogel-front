import Axios from 'Helpers/axios';

export default class TagController {
  async getTestTags() {
    const axios = await Axios.GetInstance();
    const { data } = await axios.get('/v1/tags/tests');

    return data;
  }

  async getSkillsTags(skillType) {
    const axios = await Axios.GetInstance();
    const { data } = await axios.get('/v1/tags/input/' + skillType);

    return data;
  }

  async getSkillsMapping(skillType) {
    const axios = await Axios.GetInstance();
    const { data } = await axios.get('/v1/tags/mapping/' + skillType);

    return data;
  }
}
