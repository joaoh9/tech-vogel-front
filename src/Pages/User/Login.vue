<template>
  <div class="d-flex justify-center mt-12">
    <g-card :lg="600" :md="500">
      <template v-slot:card-content>
        <g-card-header :title="$t('common.login')" :description="$t('login.subtitle')" />
        <form-input required class="mt-6" :title="$t('common.email.label')" />
        <v-text-field
          outlined
          v-model="user.email"
          :rules="[rule.required(user.email)]"
          autofocus
          data-cy="email"
          :error-messages="localRules.checkEmail"
        />
        <form-input required :title="$t('common.password.label')" />
        <v-text-field
          v-model="user.password"
          :rules="[rule.required(user.password)]"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          :type="showPassword ? 'text' : 'password'"
          v-on:keyup.enter="login"
          outlined
          data-cy="password"
          :error-messages="localRules.checkPassword"
        />
        <div class="d-flex justify-space-between">
          <p
            @click="goToPasswordReset"
            color="secondary"
            class="button-text align-self-center bdy-2 color-cinza-lighten-1 cursor-pointer"
          >
            {{ $t('login.forgotPassword') }}
          </p>

          <p
            @click="getAccessCode"
            color="secondary"
            class="button-text align-self-center bdy-2 color-cinza-lighten-1 cursor-pointer"
          >
            {{ $t('login.resendConfirmationCode') }}
          </p>
        </div>
      </template>
      <template v-slot:buttons>
        <div class="d-flex justify-space-between my-6">
          <v-btn to="/signup" color="secondary" tile outlined text large>
            {{ $t('common.signup') }}
          </v-btn>
          <v-btn
            :loading="loading.login"
            color="primary"
            elevation="0"
            large
            @click="login()"
            data-cy="login"
          >
            {{ $t('login.title') }}
          </v-btn>
        </div>
      </template>
    </g-card>
  </div>
</template>

<script>
import UserController from 'Controllers/user';
import RulesHelper from 'Helpers/rules';

import StorageHelper from 'Helpers/storage';

export default {
  name: 'Login',
  props: {
    nextRoute: {
      type: String,
      default: '',
    },
    email: {
      type: String,
    },
    firstLogin: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.rule = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);

    this.rulesLoaded = true;
    if (this.email) {
      this.user.email = this.email;
    }
    this.retrieveUserDataFromLocalStorage();

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  },
  data() {
    return {
      showPassword: false,
      user: {
        email: '',
        password: '',
      },
      loading: {
        login: false,
      },
      rule: {
        required: () => true,
      },
      localRules: {
        checkEmail: null,
        checkPassword: null,
      },
      errorMessage: this.$t('login.error'),
    };
  },
  methods: {
    retrieveUserDataFromLocalStorage() {
      const userController = new UserController();
      const trashedToken = StorageHelper.loadState('trashedToken');
      if (!trashedToken) {
        return;
      }
      const userInfo = userController.decodeUserToken(trashedToken);

      this.user.email = userInfo.email;
    },
    async login() {
      const userController = new UserController();
      try {
        const { data: userInfo } = await userController.auth({
          email: this.user.email,
          password: this.user.password,
        });

        userController.saveUserToken(userInfo.token);
        this.$emit('login');

        return this.goToCompanyDashboard();
      } catch (e) {
        if (e.response.status === 422) {
          const validEmail = await userController.emailExists(this.user.email);

          if (!validEmail) {
            return (this.localRules.checkEmail = this.$t('rules.wrongEmailLogin'));
          } else if (!this.user.email) {
            return (this.localRules.checkEmail = this.$t('rules.emailRequired'));
          } else {
            this.localRules.checkEmail = '';
          }

          if (!this.user.password) {
            return (this.localRules.checkPassword = this.$t('rules.passwordRequired'));
          }
        }

        if (e.response.status === 404) {
          return (this.localRules.checkPassword = this.$t('rules.wrongPasswordLogin'));
        }

        if (e.response.data.message === 'USER_NOT_CONFIRMED') {
          return this.$toast.info(this.$t('toast.info.USER_NOT_CONFIRMED'));
        }

        return this.$toast.error(this.$t('toast.error.loginFailed'));
      }
    },
    goToCompanyDashboard() {
      this.$router.push({
        name: 'Company Dashboard',
      });
    },

    goToPasswordReset() {
      this.$router.push({
        name: 'Password Reset',
      });
    },

    getAccessCode() {
      this.$router.push({
        name: 'Get Access Code',
      });
    },
  },
};
</script>

<style></style>
