import Axios from 'Helpers/axios';
import i18n from '../plugins/i18n';

export default class TagController {
  constructor(toast) {
    this.toast = toast;
    console.log(
      '🚀 ~ file: tests.js ~ line 7 ~ TagController ~ constructor ~ this.toast',
      this.toast,
    );
  }

  async save(test) {
    const axios = await Axios.GetInstance();
    try {
      const { data } = await axios.post('/v1/tests', test);

      return data;
    } catch (e) {
      for (const error of e.response.data.message.split(', ')) {
        console.log('🚀 ~ file: tests.js ~ line 22 ~ TagController ~ save ~ error', error);
        this.toast.info(i18n.t('toast.info.tests.' + error));
      }

      throw e;
    }
  }
}
