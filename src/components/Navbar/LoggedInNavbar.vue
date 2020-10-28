<template>
  <div>
    <v-app-bar app :color="getBgColor()" hide-on-scroll elevation="0" tile>
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mobile"
        @click="drawer = true"
        :color="isHome() ? 'bg' : 'dark'"
      />
      <v-btn
        class="bdy-2"
        text
        color="transparent"
        tile
        elevation="0"
        :to="company ? getDashboardRoute() : '/jobs'"
      >
        <v-avatar width="150" tile>
          <v-img contain height="60" width="1" :src="isHome() ? logoHome : logo" />
        </v-avatar>
      </v-btn>
      <v-spacer />
      <div v-if="!$vuetify.breakpoint.mobile" class="d-flex">
        <g-btn
          v-for="(item, i) in getPrimaryButtons()"
          :key="i"
          type="primary"
          :label="item.text"
          @click="item.goTo()"
          class="mr-6"
        />
      </div>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-icon :color="isHome() ? 'light' : 'secondary'" v-on="on" v-bind="attrs">
            mdi-chevron-down
          </v-icon>
          <v-icon :color="isHome() ? 'light' : 'secondary'" v-on="on" v-bind="attrs" large>
            mdi-account-circle
          </v-icon>
        </template>
        <v-list>
          <v-list-item @click="m.action" v-for="(m, i) of getMenuList()" :key="i">
            <v-list-item-title>{{ m.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <MobileDrawer :items="getPrimaryButtons()" />
    </v-navigation-drawer>
  </div>
</template>

<script>
import Logo from 'Assets/logo-escrita-preto-amarelo.svg';
import LogoHome from 'Assets/logo-escrita-branco-amarelo.svg';

import UserController from 'Controllers/user';

import StorageHelper from 'Helpers/storage';

import MobileDrawer from './MobileDrawer';

export default {
  name: 'LoggedInNavbar',
  components: {
    MobileDrawer,
  },
  mounted() {
    this.checkIfCompany();
  },
  data() {
    return {
      drawer: false,
      logo: Logo,
      logoHome: LogoHome,
      company: '',
    };
  },
  methods: {
    checkIfCompany() {
      this.company = StorageHelper.loadState('companyId');
    },
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
        this.$emit('logout');
        this.$router.push({
          path: '/',
        });
        this.$toast.success('Logout successfull');
      } catch (e) {
        this.$emit('logout');
        this.$router.push({
          path: '/',
        });
        this.$toast.success('Logout successfull');
      }
    },
    goToNewJob() {
      this.$router.push({
        path: '/jobs/new',
      });
    },
    goToJobList() {
      this.$router.push({
        path: '/jobs',
      });
    },
    getBgColor() {
      return this.$router.currentRoute.name === 'Home' ? 'transparent' : 'bg';
    },
    isHome() {
      return this.$router.currentRoute.name === 'Home';
    },
    getPrimaryButtons() {
      return [
        {
          text: this.company ? this.$t('common.postAJob') : this.$t('common.findAJob'),
          goTo: this.company ? this.goToNewJob : this.goToJobList,
        },
        { text: this.$t('common.dashboard'), goTo: this.goToDashboard },
      ];
    },
  },
};

</script>

<style scoped></style>
