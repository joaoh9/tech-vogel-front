<template>
  <div>
    <v-app-bar app :color="getBgColor()" hide-on-scroll elevation="0" tile>
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mobile"
        @click="drawer = true"
        :color="isHome() ? 'bg' : 'dark'"
      ></v-app-bar-nav-icon>
      <v-btn class="bdy-2" text color="transparent" tile elevation="0" to="/">
        <v-avatar width="150" tile>
          <v-img contain height="60" width="1" :src="isHome() ? logoHome : logo" />
        </v-avatar>
      </v-btn>
      <v-spacer />
      <v-btn
        v-if="!$vuetify.breakpoint.mobile"
        class="bdy-2"
        @click="goToJobList"
        :color="isHome() ? 'bg' : 'dark'"
        text
      >
        {{ $t('common.jobs') }}
      </v-btn>
      <v-btn
        v-if="!$vuetify.breakpoint.mobile"
        class="bdy-2"
        @click="goToPricing"
        :color="isHome() ? 'bg' : 'dark'"
        text
      >
        {{ $t('common.pricing') }}
      </v-btn>
      <v-btn
        v-if="!$vuetify.breakpoint.mobile"
        class="bdy-2"
        @click="goToHowItWorks"
        :color="isHome() ? 'bg' : 'dark'"
        text
      >
        {{ $t('common.howItWorks') }}
      </v-btn>
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
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item v-for="(item, i) in getNavbarList()" :key="i" @click="item.goTo">
          <h5>{{ item.text }}</h5>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Logo from 'Assets/logo-escrita-preto-amarelo.svg';

export default {
  name: 'Navbar',
  components: {},
  data() {
    return {
      drawer: false,
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
      return this.$router.currentRoute.name === 'Home';
    },
    getNavbarList() {
      return [
        { text: this.$t('common.jobs'), goTo: this.goToJobList },
        { text: this.$t('common.pricing'), goTo: this.goToPricing },
        { text: this.$t('common.howItWorks'), goTo: this.goToHowItWorks },
        { text: this.$t('common.findAJob'), goTo: this.goToLogin },
        { text: this.$t('common.postAJob'), goTo: this.goToLogin },
      ];
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
