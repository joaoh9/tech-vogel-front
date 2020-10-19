<template>
  <div>
    <v-app-bar app :color="getBgColor()" hide-on-scroll elevation="0" tile>
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mobile"
        @click="drawer = true"
        :color="isHome() ? 'bg' : 'dark'"
      />
      <v-btn text color="transparent" tile elevation="0" to="/">
        <v-avatar width="150" tile>
          <v-img contain height="60" width="1" :src="isHome() ? logoHome : logo" />
        </v-avatar>
      </v-btn>
      <g-btn
        class="cursor-pointer mx-n2"
        type="text"
        :color="isHome() ? 'bg' : 'dark'"
        v-for="(item, i) in getTextButtons()"
        :key="i"
        @click="item.goTo()"
        :label="item.text"
      />
      <v-spacer />
      <g-btn
        v-if="!$vuetify.breakpoint.mobile"
        dataCy="nav-signup"
        :type="isHome() ? 'text' : 'text'"
        :text="isHome() ? true : false"
        :color="isHome() ? 'primary' : 'dark'"
        :textColor="isHome() ? 'primary' : 'dark'"
        to="/signup"
        :label="$t('common.findAJob')"
      />

      <g-btn
        v-if="!$vuetify.breakpoint.mobile"
        dataCy="nav-new-company"
        type="primary"
        class="ml-4"
        to="/signup"
        :label="$t('common.postAJob')"
      />
      <g-btn
        dataCy="nav-login"
        type="outlined"
        :color="isHome() ? 'bg' : 'dark'"
        to="/login"
        class="mx-4"
        :label="$t('common.login')"
      />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary class="">
      <MobileDrawer :items="getTextButtons().concat(getPrimaryButtons())" />
    </v-navigation-drawer>
  </div>
</template>

<script>
import LogoHome from 'Assets/logo-escrita-branco-amarelo.svg';
import Logo from 'Assets/logo-escrita-preto-amarelo.svg';
import MobileDrawer from './MobileDrawer';

export default {
  name: 'Navbar',
  components: {
    MobileDrawer,
  },
  data() {
    return {
      drawer: false,
      logo: Logo,
      logoHome: LogoHome,
    };
  },
  methods: {
    goToSignup() {
      this.$router.push({
        path: '/signup',
      });
    },
    goToLogin() {
      console.log('goToLogin');
      this.$router.push({
        path: '/login',
      });
    },
    goToJobList() {
      console.log('goToJobList');
      this.$router.push({
        path: '/jobs',
      });
    },
    goToPricing() {
      console.log('goToPricing');
      this.$router.push({
        path: '/pricing',
      });
    },
    goToHowItWorks() {
      console.log('goToHowItWorks');
      this.$router.push({
        path: '/how-it-works',
      });
    },
    getBgColor() {
      return this.$router.currentRoute.name === 'Home' ? 'transparent' : 'bg';
    },
    isHome() {
      return this.$router.currentRoute.name === 'Home';
    },
    getTextButtons() {
      return [
        { text: this.$t('common.jobs'), goTo: this.goToJobList },
        { text: this.$t('common.pricing'), goTo: this.goToPricing },
        { text: this.$t('common.howItWorks'), goTo: this.goToHowItWorks },
      ];
    },
    getPrimaryButtons() {
      return [
        { text: this.$t('common.findAJob'), goTo: this.goToLogin },
        { text: this.$t('common.postAJob'), goTo: this.goToLogin },
      ];
    },
  },
};
</script>

<style scoped></style>
