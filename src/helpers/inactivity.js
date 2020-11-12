export default class Inactivity {
  constructor(vueContext) {
    this.vueContext = vueContext;
  }

  userLogin(e, message, showNotification = true) {
    if (e.response && e.response.status === 403) {
      if (showNotification) {
        this.vueContext.$toast.info(this.$t('toast.info.sessionExpired'));
      }
      this.vueContext.$emit('logout');
      return this.vueContext.$router.push({
        name: 'User Login',
      });
    } else {
      if (showNotification) {
        this.vueContext.$toast.error(message);
      }
    }
  }
}
