export default class Inactivity {
  constructor(vueContext) {
    this.vueContext = vueContext;
  }

  userLogin(e, message, showNotification = true) {
    if (e.response && e.response.status === 403) {
      if (showNotification) {
        this.vueContext.$toast.info('Your session has expired. Please login again');
      }
      this.vueContext.$emit('logout');
      return this.vueContext.$router.push({
        name: 'User Login',
        params: {
          message: 'Você foi deslogado por inatividade. Por gentileza refaça o Login.',
        },
      });
    } else {
      if (showNotification) {
        this.vueContext.$toast.error(message);
      }
    }
  }
}
