<template>
  <v-app-bar app :color="getBgColor()" hide-on-scroll elevation="0" tile>
    <v-btn class="body-2" text color="white darken-4" tile elevation="0" to="/">
      <v-avatar width="150" tile>
        <v-img contain height="60" width="1" :src="logo" />
      </v-avatar>
    </v-btn>
    <v-spacer />
    <v-btn class="body-2" @click="goToJobList" color="bg" text>Jobs</v-btn>
    <v-btn class="body-2" @click="goToPricing" color="bg" text>Pricing</v-btn>
    <v-btn class="body-2" @click="goToHowItWorks" color="bg" text>How It Works</v-btn>
    <v-spacer />
    <g-btn
      :type="isHome() ? 'text' : 'text'"
      :text="isHome() ? true : false"
      :color="isHome() ? 'primary' : 'dark'"
      :textColor="isHome() ? 'primary' : 'dark'"
      to="/signup"
      :label="$t('Common.findAJob')"
    />
    <g-btn type="primary" class="ml-4" to="/company/new" :label="$t('Common.postAJob')" />
    <g-btn
      type="outlined"
      :color="isHome() ? 'bg' : 'dark'"
      to="/login"
      class="mx-4"
      :label="$t('Common.login')"
    />
  </v-app-bar>
</template>

<script>
import Logo from 'Assets/logo-escrita-preto-amarelo.svg';

export default {
  name: 'Navbar',
  components: {},
  data() {
    return {
      logo: Logo,
    };
  },
  methods: {
    goToSignup() {
      this.$router.push({
        path: '/signup',
      });
    },
    goToLogin() {
      this.$router.push({
        path: '/login',
      });
    },
    goToJobList() {
      // TODO
    },
    goToPricing() {
      // TODO
    },
    goToHowItWorks() {
      // TODO
    },
    getBgColor() {
      return this.$router.currentRoute.name === 'Home' ? 'transparent' : 'bg';
    },
    isHome() {
      console.log(this.$router.currentRoute.name === 'Home');
      return this.$router.currentRoute.name === 'Home';
    },
  },
};
</script>

<style scoped>
.v-toolbar {
  box-shadow: 0px 2px 8px -1px rgba(0, 0, 0, 0.2), 0px 8px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
</style>
