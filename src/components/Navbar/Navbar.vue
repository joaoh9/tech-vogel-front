<template>
  <div class="mx-16">
    <v-app-bar app :color="getBgColor()" hide-on-scroll elevation="0" tile class="mx-16">
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mobile"
        @click="drawer = true"
        :color="isHome() ? 'bg' : 'dark'"
        class="mx-16"
      />
      <v-btn text color="transparent" tile elevation="0" to="/">
        <v-avatar width="150" tile>
          <v-img contain height="60" width="1" :src="isHome() ? logoHome : logo" />
        </v-avatar>
      </v-btn>
      <g-btn
        class="cursor-pointer mx-n2 button-text text-buttons"
        type="text"
        :color="isHome() ? 'bg' : 'dark'"
        v-for="(item, index) in getTextButtons()"
        :key="index"
        @click="item.goTo()"
        :label="item.text"
      />

      <v-spacer />

      <v-btn
        dataCy="nav-login"
        to="/login"
        class="mx-4 py-5"
        :color="isHome() ? 'white' : 'dark'"
        text
      >
        {{ $t('common.login') }}
      </v-btn>

      <v-btn
        v-if="!$vuetify.breakpoint.mobile"
        color="primary"
        dataCy="nav-new-company"
        class="py-5 px-12"
        to="/signup"
      >
        {{ $t('common.signup') }}
      </v-btn>
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
      this.$router.push({
        path: '/login',
      });
    },
    goToJobList() {
      this.$router.push({
        path: '/jobs',
      });
    },
    goToPricing() {
      this.$router.push({
        path: '/pricing',
      });
    },
    goToHowItWorks() {
      this.$router.push({
        path: '/how-it-works',
      });
    },

    goToAboutUs() {
      return this.$router.push({
        path: '/about-us',
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
        { text: this.$t('common.howItWorks'), goTo: this.goToHowItWorks },
        { text: this.$t('common.pricing'), goTo: this.goToPricing },
        { text: this.$t('common.aboutUs'), goTo: this.goToAboutUs },
      ];
    },
    getPrimaryButtons() {
      return [
        { text: this.$t('common.login'), goTo: this.goToSignup },
        { text: this.$t('common.signup'), goTo: this.goToSignup },
      ];
    },
  },
};
</script>

<style scoped>
.button-text {
  font-weight: 500;
}

.text-buttons {
  text-transform: initial;
}
</style>
