import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        'primary': '#FF8C00',
        'primary-lighten-1': '#FFB459',
        'primary-lighten-2': '#FFE8CB',
        'primary-darken-1': '#D97700',
        'primary-darken-2': '#A65B00',
        'secondary': '#403691',
        'secondary-lighten-1': '#857EB9',
        'secondary-lighten-2': '#DBD9EB',
        'secondary-darken-1': '#332A73',
        'secondary-darken-2': '#282159',
        'error': '#F5A69B',
        'success': '#A8E1C2',
        'dark': '#1A193C',
        bg: colors.deepPurple.lighten5,
      },
    },
  },
  icons: {
    iconfont: 'fa',

  },
});
