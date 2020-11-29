<template>
  <v-app :style="getPageStyle()" :key="loggedIn.logged.toString() + 'app'">
    <Navbar
      :key="'navbar' + $router.currentRoute.name + loggedIn.logged.toString()"
      v-if="!loggedIn.logged"
    />
    <LoggedInNavbar
      :key="'loggedInNabar' + $router.currentRoute.name + loggedIn.logged.toString()"
      v-if="loggedIn.logged"
      :company="loggedIn.company"
      @logout="() => logout()"
    />
    <v-main :key="loggedIn.logged.toString() + 'main'">
      <router-view @login="() => checkIfLoggedIn()" @logout="() => logout()" class="view" />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from 'Components/Navbar/Navbar';
import LoggedInNavbar from 'Components/Navbar/LoggedInNavbar';
import Footer from 'Components/Footer';

import UserController from 'Controllers/user';

import StorageHelper from 'Helpers/storage';

import 'Public/css';

export default {
  name: 'app',
  mounted() {
    this.checkIfLoggedIn();
    window.name = 'Tech Vogel';
    document.title = 'Tech Vogel';
  },
  data() {
    return {
      loggedIn: {
        logged: false,
        company: false,
      },
    };
  },
  components: {
    Navbar,
    LoggedInNavbar,
    Footer,
  },
  methods: {
    notLP() {
      return this.$router.history.current.name !== 'LandingPage';
    },
    logout() {
      const userToken = StorageHelper.loadState('userToken');
      const [ , payload  ] = userToken.split('.');
      const trashedToken = [ '', payload, '' ].join('.');
      StorageHelper.saveState('trashedToken', trashedToken);
      StorageHelper.removeState('userToken');
      StorageHelper.removeState('access_token');
      StorageHelper.removeState('github_username');

      this.checkIfLoggedIn();
    },
    getPageStyle(footer = false) {
      const pageStyle = {
        'background-color': '#FCFCFF',
        background: '#FCFCFF',
      };

      if (this.$router.currentRoute.name === 'Home') {
        pageStyle.background = 'linear-gradient(180deg, #1A193C 2.83%,  #3AA3FF 62.18%), #433693';
      }
      if (footer && this.$router.currentRoute.name === 'Home') {
        pageStyle.background = 'transparent';
        pageStyle['background-color'] = 'transparent';
      }

      return pageStyle;
    },
    async checkIfLoggedIn() {
      const userController = new UserController();
      try {
        const user = userController.decodeUserToken();
        console.log(
          '🚀 ~ file: App.vue ~ line 80 ~ checkIfLoggedIn ~ userController',
          userController,
        );
        console.log('🚀 ~ file: App.vue ~ line 81 ~ checkIfLoggedIn ~ user', user);

        this.loggedIn.logged = true;
        this.loggedIn.company = user.side == 2 ? true : false;
      } catch (e) {
        this.loggedIn.logged = false;
        this.loggedIn.company = false;
      }
    },
  },
};
</script>

<style>
.v-application {
  font-family: 'Open Sans' !important;
}

.v-btn {
  border-radius: 6px !important;
}

.v-text-field .v-textarea .v-card .v-card:not() {
  border-radius: 6px !important;
}

h6 {
  margin-bottom: 10px !important;
}
</style>
