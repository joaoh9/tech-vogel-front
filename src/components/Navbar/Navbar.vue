<template>
  <div>
    <v-app-bar app color="secondary" hide-on-scroll elevation="0" tile height="88">
      <v-app-bar-nav-icon
        v-if="!$vuetify.breakpoint.smAndUp"
        @click="drawer = true"
        color="bg"
      />
      <v-btn text color="transparent" tile elevation="0" to="/">
        <v-avatar width="150" tile>
          <v-img contain height="60" width="1" :src="logoHome" />
        </v-avatar>
      </v-btn>
      <div v-if="$vuetify.breakpoint.smAndUp" class="d-flex">
        <g-btn
          class="cursor-pointer mx-n2 button-text text-buttons"
          type="text"
          color="bg"
          v-for="(item, index) in getTextButtons()"
          :key="index"
          @click="item.goTo()"
          :label="item.text"
        />
      </div>
      <v-spacer />

      <v-btn
        v-if="$vuetify.breakpoint.smAndUp"
        dataCy="nav-login"
        to="/login"
        class="mx-4 py-5"
        color="white"
        text
      >
        {{ $t('common.login') }}
      </v-btn>

      <v-btn
        v-if="$vuetify.breakpoint.smAndUp"
        color="primary"
        dataCy="nav-new-company"
        class="py-5 px-12"
        to="/signup"
      >
        {{ $t('common.signup') }}
      </v-btn>
      <ChangeLanguage chooseLanguageText="" />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary v-if="!$vuetify.breakpoint.smAndUp">
      <v-list nav dense>
        <v-list-item-group v-model="drawer">
          <v-list-item v-for="(item, i) in getAllButtons()" :key="i" @click="item.goTo">
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import LogoHome from 'Assets/logo-escrita-branco-amarelo.svg';
import Logo from 'Assets/logo-escrita-preto-amarelo.svg';
import ChangeLanguage from 'Components/Static/ChangeLanguage';

export default {
  name: 'Navbar',
  data() {
    return {
      drawer: false,
      logo: Logo,
      logoHome: LogoHome,
    };
  },
  components: {
    ChangeLanguage,
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
    getAllButtons() {
      return this.getTextButtons().concat(this.getPrimaryButtons());
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
