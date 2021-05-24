import Axios from 'Helpers/axios';
import i18n from '../plugins/i18n';

export default class TagController {
  constructor(toast) {
    this.toast = toast;
  }

  async save(test) {
    const axios = await Axios.GetInstance();
    try {
      const { data } = await axios.post('/v1/tests', test);

      return data;
    } catch (e) {
      for (const error of e.response.data.message.split(', ')) {
        this.toast.info(i18n.t('toast.info.tests.' + error));
      }

      throw e;
    }
  }

  async getById(id) {
    const axios = await Axios.GetInstance();

    try {
      const { data } = await axios.get(`/v1/tests/${id}`);

      return data;
    } catch (e) {
      if (e.response.data.message) {
        for (const error of e.response.data.message.split(', ')) {
          this.toast.info(i18n.t('toast.info.tests.' + error));
        }
      }
      if (e.response.status) {
        this.toast.warning(i18n.t('toast.error.requests.' + e.response.status.toString()));
      }

      throw e;
    }
  }

  async getAllByType(type) {}

  async getAllByTagId(tagId) {
    const axios = await Axios.GetInstance();
    try {
      const { data } = await axios.get(`/v1/tests/tags/${tagId}`);

      return data;
    } catch (e) {
      for (const error of e.response.data.message.split(', ')) {
        this.toast.info(i18n.t('toast.info.tests.' + error));
      }

      throw e;
    }
  }
}
