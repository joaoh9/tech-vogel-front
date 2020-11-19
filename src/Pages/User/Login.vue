<template>
  <div class="d-flex justify-center mt-12">
    <g-card :lg="600" :md="500">
      <template v-slot:card-content>
        <g-card-header :title="$t('common.login')" :description="$t('login.subtitle')" />
        <form-input class="mt-6" :title="$t('common.email.label')" />
        <v-text-field outlined v-model="user.email" :rules="[rules.required(user.email)]" />
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
import StorageHelper from 'Helpers/storage';
import RulesHelper from 'Helpers/rules';

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
    email: {
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
    if (this.email) {
      this.user.email = this.email;
    }
    this.decodeUserToken();
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
      rules: {
        required: () => true,
      },
      errorMessage: this.$t('login.error'),
    };
  },
  methods: {
    async login() {
      const userController = new UserController();

      try {
        const { data: userInfo } = await userController.auth({
          email: this.user.email,
          password: this.user.password,
        });

        userController.saveUserToken(userInfo.token);

        const user = userController.decodeUserToken(userInfo.token);
        StorageHelper.saveState('user', user);

        if (userInfo.side === 2) {
          return this.goToCompanyDashboard();
        } else if (userInfo.side === 1) {
          return this.goToUserDashboard();
        } else {
          return this.goToSidePick();
        }
      } catch (e) {
        this.$toast.error('Something went wrong on your login');
      }
    },

    goToSidePick() {
      console.log('going to side pick');
      this.$router.push({
        name: 'Side Pick',
      });
    },

    goToCompanyDashboard() {
      this.$router.push({
        name: 'Company Dashboard',
      });
    },

    goToUserDashboard() {
      this.$router.push({
        name: 'User Dashboard',
      });
    },
  },
};
</script>

<style></style>
