<template>
  <v-app>
    <UserNavbar v-if="userIsLoggedIn()"></UserNavbar>
    <Navbar v-if="notLP()"></Navbar>
    <v-content style="background-color: #FCFCFF">
      <router-view class="view"></router-view>
    </v-content>
    <LPFooter> </LPFooter>
  </v-app>
</template>

<script>
import Navbar from 'Components/Navbar/Navbar';
import UserNavbar from 'Components/Navbar/UserNavbar';
import Storage from 'Helpers/storage';
import LPFooter from 'Components/LP/LPFooter';
import '../public/css/typography.css';

export default {
  name: 'app',
  data() {
    return {
      user: null,
    };
  },
  components: {
    Navbar,
    UserNavbar,
    LPFooter,
  },
  methods: {
    userIsLoggedIn() {
      const user = Storage.loadState('user');
      if (!user) {
        return false;
      }
      this.user = user;
      return true;
    },
    notLP() {
      return this.$router.history.current.name !== 'LandingPage';
    },
  },
};
</script>

<style>
.v-application {
  font-family: 'Nunito Sans' !important;
}

.v-btn {
  border-radius: 6px !important;
}

.v-btn__content {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
  /* or 27px */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.035em;
  font-feature-settings: 'liga' off;

  /* color: #000000aa; */
}

.v-text-field .v-textarea .v-card .v-card:not() {
  border-radius: 6px !important;
}

h6 {
  margin-bottom: 10px !important;
}
</style>
