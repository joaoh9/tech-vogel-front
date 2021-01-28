import Axios from 'Helpers/axios';
import StorageHelper from 'Helpers/storage';

export default class NotificationController {
  async sendNotification({ user, data, type }) {
    const userToken = StorageHelper.loadState('userToken');
    const axios = await Axios.GetInstance(userToken);

    const { data: notifications } = await axios.post('/v1/notifications', {
      user,
      data,
      type,
    });

    return notifications;
  }

  async deleteAccount() {
    const userToken = StorageHelper.loadState('userToken');
    const axios = await Axios.GetInstance(userToken);

    const { data } = await axios.post('/v1/notifications/account-delete');

    return data;
  }
}
