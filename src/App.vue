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
      @logout="() => checkIfLoggedIn()"
    />
    <v-main :style="getPageStyle()" :key="loggedIn.logged.toString() + 'main'">
      <router-view @login="() => checkIfLoggedIn()" class="view"></router-view>
    </v-main>
    <Footer :style="getPageStyle(true)" />
  </v-app>
</template>

<script>
import Navbar from 'Components/Navbar/Navbar';
import LoggedInNavbar from 'Components/Navbar/LoggedInNavbar';
import Footer from 'Components/Footer';
import StorageHelper from 'Helpers/storage';
import 'Public/css';

export default {
  name: 'app',
  mounted() {
    this.checkIfLoggedIn();
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
      if (StorageHelper.loadState('user')) {
        this.loggedIn.logged = true;
      } else {
        this.loggedIn.logged = false;
      }

      if (StorageHelper.loadState('companyId')) {
        this.loggedIn.company = true;
      } else {
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
