import Vue from 'vue';
import App from './App';

import i18n from './plugins/i18n';
import vuetify from './plugins/vuetify';
import './plugins/cookies'
import './plugins/toast'

import router from './router';

import '@babel/polyfill';

import './components/global';

Vue.config.productionTip = false;

export default new Vue({
  vuetify,
  i18n,
  router,
  render: h => h(App),
}).$mount('#app');
