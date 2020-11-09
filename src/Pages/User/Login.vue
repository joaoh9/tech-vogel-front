<template>
  <div class="d-flex justify-center mt-12">
    <g-card :lg="600" :md="500">
      <template v-slot:card-content>
        <g-card-header :title="$t('common.login')" :description="$t('login.subtitle')" />
        <form-input class="mt-6" :title="$t('common.username.label')" />
        <v-text-field outlined v-model="user.username" :rules="[rules.required(user.username)]" />
        <form-input :title="$t('common.password.label')" />
        <v-text-field
          v-model="user.password"
          :rules="[rules.required(user.password)]"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          :type="showPassword ? 'text' : 'password'"
          outlined
        />
        <div class="d-flex justify-start ">
          <p color="secondary" class="button-text align-self-center bdy-2 color-cinza-lighten-1">
            {{ $t('login.forgotPassword') }}
          </p>
        </div>
      </template>
      <template v-slot:buttons>
        <div class="d-flex justify-space-between my-6">
          <v-btn to="/signup" color="secondary" tile outlined text large>
            {{ $t('common.signup') }}
          </v-btn>
          <v-btn :loading="loading.login" color="primary" elevation="0" large @click="login()">
            {{ $t('login.title') }}
          </v-btn>
        </div>
      </template>
    </g-card>
  </div>
</template>

<script>
import UserController from 'Controllers/user';
import ResumeController from 'Controllers/resume';

import RulesHelper from 'Helpers/rules';
import StorageHelper from 'Helpers/storage';

export default {
  name: 'Login',
  props: {
    nextRoute: {
      type: String,
      default: '',
    },
    userEmail: {
      type: String,
    },
    username: {
      type: String,
    },
    firstLogin: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
    this.rulesLoaded = true;
    if (this.username) {
      this.user.username = this.username;
    }
  },
  data() {
    return {
      showPassword: false,
      user: {
        username: '',
        password: '',
      },
      loading: {
        login: false,
      },
      rules: {
        required: () => true,
      },
      errorMessage: this.$t('login.error'),
    };
  },
  methods: {
    async login() {
      const userController = new UserController();
      if (!this.user.username || !this.user.password) {
        return;
      }
      this.loading.login = true;
      try {
        const statusCode = await userController.login({
          username: this.user.username,
          password: this.user.password,
        });
        if (statusCode === 200) {
          return this.saveUserCredentials();
        }
        this.$toast.error(this.errorMessage);
        this.loading.login = false;
      } catch (e) {
        if (e.response.status === 500) {
          this.errorMessage = this.$t('errors.500');
        }
        this.loading.login = false;
        this.$toast.error(this.errorMessage);
      }
      this.loading.login = false;
    },
    async saveUserCredentials() {
      const userController = new UserController();

      const userInfo = await userController.getByUsername(this.user.username);

      StorageHelper.saveState('user', userInfo);

      this.seeIfUserIsACompanyOwner();
    },
    async seeIfUserIsACompanyOwner() {
      const userController = new UserController();

      const company = await userController.getCompany(this.user.username);
      if (company) {
        StorageHelper.saveState('companyId', company[0]);
        this.goToNextRoute('/company/dashboard');
      } else {
        this.seeIfUserHasSavedResume();
      }
    },
    async seeIfUserHasSavedResume() {
      const resumeController = new ResumeController();

      try {
        const resume = await resumeController.getByUsername(this.user.username);

        if (!resume || (resume && resume.length === 0)) {
          return this.goToSidePick();
        }
      } catch (e) {
        if (e.response.status === 404) {
          return this.goToSidePick();
        }
      }

      this.goToNextRoute('/dashboard');
    },
    goToSidePick() {
      this.$emit('login');
      this.$router.push({
        name: 'Side Pick',
      });
    },

    goToNextRoute(route) {
      route = this.nextRoute ? this.nextRoute : route;
      route = this.firstLogin ? '/onboarding' : route;
      this.$toast.open(this.$t('toast.open.login'));
      this.$emit('login');
      this.$router.push({
        path: route,
      });
    },
  },
};
</script>

<style></style>
