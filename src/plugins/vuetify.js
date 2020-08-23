import Vue from 'vue';
import Vuetify from 'vuetify/lib';
// import colors from 'vuetify/lib/util/colors';
import '@fortawesome/fontawesome-free/css/all.css';

import 'Public/css/card.css';

Vue.use(Vuetify);

Vue.component('primary-card', {
  template: '<v-card class="primary-card"> </v-card>',
});

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#FF9200',
        'primary-lighten-1': '#F0BD78',
        'primary-lighten-2': '#F1D6B2',
        'primary-darken-1': '#E78707',
        'primary-darken-2': '#C27713',
        secondary: '#403691',
        'secondary-lighten-1': '#3B3973',
        'secondary-lighten-2': '#706F98',
        // 'secondary-darken-1': '#332A73',
        // 'secondary-darken-2': '#282159',
        danger: '#F86241',
        success: '#97CA86',
        tag1: '#CDE4F8',
        tag2: '#FFF6C9',
        tag3: '#E2FAF3',
        tag4: '#F0E5F9',
        tag5: '#FCECED',
        dark: '#29292F',
        ligth: '#F7F7FB',
        support1: '#1E85DF',
        support2: '#FFD500',
        'cinza-lighten-1': '#6C6C77',
        'cinza-lighten-2': '#A1A1AC',
        'cinza-lighten-3': '#D0D0D8',
        'cinza-lighten-4': '#EBEBEE',
        bg: '#FCFCFF',
        'cinza-border': '#9c9c9e',
      },
    },
  },
  icons: {
    iconfont: 'fa',
  },
});
