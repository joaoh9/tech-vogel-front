import Vue from 'vue';
import App from './App.vue';

import i18n from './plugins/i18n';
import vuetify from './plugins/vuetify';

import router from './router';

import '@babel/polyfill';

console.log(i18n);
console.log(vuetify);

Vue.config.productionTip = false;

export default new Vue({
  vuetify,
  i18n,
  router,
  render: (h) => h(App),
}).$mount('#app');
