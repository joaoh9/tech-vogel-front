<template>
  <div>
    <v-app-bar app :color="getBgColor()" hide-on-scroll elevation="0" tile>
      <v-app-bar-nav-icon
        v-if="!$vuetify.breakpoint.smAndUp"
        @click="drawer = true"
        :color="isHome() ? 'bg' : 'dark'"
      />
      <v-btn class="bdy-2" text color="transparent" tile elevation="0" to="/">
        <v-avatar width="150" tile>
          <v-img contain height="60" width="1" :src="isHome() ? logoHome : logo" />
        </v-avatar>
      </v-btn>
      <v-spacer />
      <div v-if="$vuetify.breakpoint.smAndUp && handlePrevent()" class="d-flex">
        <g-btn
          v-for="(item, i) in getPrimaryButtons()"
          :key="i"
          type="primary"
          :data-cy="item.dataCy"
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
      <v-list nav dense>
        <v-list-item-group v-model="drawer">
          <v-list-item v-for="(item, i) in getPrimaryButtons()" :key="i" @click="item.goTo">
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
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
  mounted() {
    this.checkIfCompany();
  },
  data() {
    return {
      drawer: false,
      logo: Logo,
      logoHome: LogoHome,
      company: '',
      isCompany: false,
    };
  },
  methods: {
    async checkIfCompany() {
      const userController = new UserController();
      const userInfo = userController.decodeUserToken();
      this.isCompany = userInfo.side >= 20;
    },
    goToDashboard() {
      this.$router.push({
        path: this.getDashboardRoute(),
      });
    },
    getDashboardRoute() {
      return this.isCompany ? '/company/dashboard' : '/user/dashboard';
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
        this.$toast.success(this.$t('toast.success.logout'));
      } catch (e) {
        this.$emit('logout');
        this.$router.push({
          path: '/',
        });
        this.$toast.success(this.$t('toast.success.logout'));
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
      return this.$router.currentRoute.name === 'Home' ? 'secondary' : 'bg';
    },
    isHome() {
      return this.$router.currentRoute.name === 'Home';
    },
    handlePrevent() {
      const routes =
        this.$router.currentRoute.name !== 'Side Pick' &&
        this.$router.currentRoute.name !== 'New Company';

      return routes;
    },
    getPrimaryButtons() {
      return [
        {
          text: this.isCompany ? this.$t('common.postAJob') : this.$t('common.findAJob'),
          goTo: this.isCompany ? this.goToNewJob : this.goToJobList,
          dataCy: 'nav-job',
        },
        { text: this.$t('common.dashboard'), goTo: this.goToDashboard, dataCy: 'nav-dashboard' },
      ];
    },
  },
};
</script>

<style scoped></style>
