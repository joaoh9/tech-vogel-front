import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#FF9200',
        secondary: '#FFD500',
        middleYellow: '#FFDD75',
        primaryYellow: '#FFD500',
        secondaryYellow: '#FF9200',
        darkBlue: '#1A193C',
        darkBlue2: '#312e5f',
        lightBlue: '#3AA3FF',
        primaryBlue: '#433693',
        error: colors.red.darken1,
        success: colors.teal.darken1,
        lightText: colors.red.lighten3,
        bg: colors.deepPurple.lighten5,
      },
    },
  },
  icons: {
    iconfont: 'fa',

  },
});
