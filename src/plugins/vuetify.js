import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.blue.lighten1,
        secondary: colors.purple.lighten2,
        accent: colors.purple.accent2,
        error: colors.red.darken1,
        success: colors.teal.darken1,
        lightText: colors.red.lighten3,
      },
    },
  },
  icons: {
    iconfont: 'fa',
  },
});
