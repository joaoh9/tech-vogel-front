import Axios from 'Helpers/axios';

export default class NotificationController {
  async sendNotification({ user, data, type }) {
    const axios = await Axios.GetInstance();

    const { data: notifications } = await axios.post('/v1/notifications', {
      user,
      data,
      type,
    });

    return notifications;
  }

  async deleteAccount() {
    const axios = await Axios.GetInstance();

    const { data } = await axios.post('/v1/notifications/account-delete');

    return data;
  }
}
