import Vue from 'vue';

import VueI18n from 'vue-i18n';
import Config from '../config';
import locales from '../locales';

Vue.use(VueI18n);

export default new VueI18n({
  locale: Config.defaultLocale,
  messages: locales,
  fallbackLocale: 'en-us',
});
