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
      <g-btn
        v-if="!$vuetify.breakpoint.mobile"
        dataCy="nav-new-company"
        type="primary"
        class="ml-4"
        to="/signup"
        :label="$t('common.postAJob')"
      />
      <g-btn
        v-if="!$vuetify.breakpoint.mobile"
        dataCy="nav-login"
        type="primay"
        color="primary"
        elevation="0"
        :to="getDashboardRoute()"
        class="mx-4"
        :label="$t('common.dashboard')"
      />
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-icon v-on="on" v-bind="attrs">mdi-chevron-down</v-icon>
          <!-- <h3 data-cy="user-name" v-on="on" v-bind="attrs" style="color: white" class="ml-3">
          {{ user.name }}
        </h3> -->
          <v-icon v-on="on" v-bind="attrs" large>mdi-account-circle</v-icon>
          <!-- <v-avatar v-on="on" v-bind="attrs" class="ml-3" color="grey"></v-avatar> -->
        </template>
        <v-list>
          <v-list-item @click="m.action" v-for="(m, i) of getMenuList()" :key="i">
            <v-list-item-title>{{ m.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item @click="goToSignup">
          <v-list-item-title>{{ $t('common.postAJob') }}</v-list-item-title>
        </v-list-item>
        <v-list-item @click="goToDashboard">
          <v-list-item-title>{{ $t('common.dashboard') }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Logo from 'Assets/logo-escrita-preto-amarelo.svg';
import LogoHome from 'Assets/logo-escrita-branco-amarelo.svg';
import UserController from 'Controllers/user';

export default {
  name: 'LoggedInNavbar',
  props: {
    company: Boolean,
  },
  data() {
    return {
      drawer: false,
      logo: Logo,
      logoHome: LogoHome,
    };
  },
  methods: {
    goToDashboard() {
      this.$router.push({
        path: this.getDashboardRoute(),
      });
    },
    getDashboardRoute() {
      return this.company ? '/company/dashboard' : '/dashboard';
    },
    getMenuList() {
      return [
        {
          title: this.$t('common.logout'),
          action: this.logout,
        },
      ];
    },
    async logout() {
      const userController = new UserController();
      try {
        await userController.logout();
        this.$emit('logout', { logged: false, company: false });
        this.$router.push({
          path: '/',
        });
      } catch (e) {
        alert(e);
      }
    },
    goToSignup() {
      this.$router.push({
        path: '/signup',
      });
    },
    getBgColor() {
      return this.$router.currentRoute.name === 'Home' ? 'transparent' : 'bg';
    },
    isHome() {
      return this.$router.currentRoute.name === 'Home';
    },
  },
};
</script>

<style scoped></style>
