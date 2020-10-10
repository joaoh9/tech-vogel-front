<template>
  <div>
    <div class="d-flex justify-center mt-12">
      <g-card :lg="600" :md="500">
        <template v-slot:card-content>
          <g-card-header :title="$t('Common.login')" :description="$t('login.subtitle')" />
          <form-input class="mt-6" :title="$t('Common.username.label')" />
          <v-text-field
            :rules="[v => !!v || $t('Rules.requiredField')]"
            outlined
            v-model="user.username"
          />
          <form-input :title="$t('Common.password.label')" />
          <v-text-field
            :rules="[v => !!v || $t('Rules.requiredField')]"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            :type="showPassword ? 'text' : 'password'"
            outlined
            v-model="user.password"
          />
          <div class="d-flex justify-start ">
            <p color="secondary" class="button-text align-self-center body-2 color-cinza-lighten-1">
              {{ $t('login.forgotPassword') }}
            </p>
          </div>
        </template>
        <template v-slot:buttons>
          <div class="d-flex justify-space-between my-6">
            <v-btn to="/signup" color="secondary" tile outlined text large>
              {{ $t('Common.signup') }}
            </v-btn>
            <v-btn :loading="loading.login" color="primary" elevation="0" large @click="login()">
              {{ $t('login.title') }}
            </v-btn>
          </div>
        </template>
      </g-card>
    </div>
    <g-alert
      :errorMessage="requestErrorMessage"
      v-on:error="s => (requestError = s)"
      :errorVar="requestError"
    />
  </div>
</template>

<script>
import UserController from 'Controllers/user';
import RulesHelper from 'Helpers/rules';
import StorageHelper from 'Helpers/storage';
import JwtHelper from 'Helpers/jwt';

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
  },
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
    this.rulesLoaded = true;
    console.log(this.nextRoute);
    console.log(this.userEmail);
    console.log(this.username);
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
      requestError: false,
      requestErrorMessage: this.$t('login.error'),
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
        this.requestError = true;
        this.loading.login = false;
      } catch (e) {
        if (e.response.status === 500) {
          this.requestErrorMessage = this.$t('DefaultErrors.500');
        }
        this.loading.login = false;
        this.requestError = true;
      }
      this.loading.login = false;
    },
    async saveUserCredentials() {
      const userController = new UserController();
      const jwtHelper = new JwtHelper();

      const userInfo = await userController.getByUsername(this.user.username);
      const userToken = jwtHelper.createToken(userInfo);

      StorageHelper.saveOnSession('user', userToken);

      this.seeIfUserIsACompanyOwner();
    },
    async seeIfUserIsACompanyOwner() {
      const userController = new UserController();
      const jwtHelper = new JwtHelper();
      try {
        const company = await userController.getCompany(this.user.username);
        const companyToken = jwtHelper.createToken({ companyId: company[0] }); // WARNING: salvando apenas o primeiro indice do array de companies do user
        StorageHelper.saveOnSession('company', companyToken);

        this.goToDashboard(true);
      } catch (e) {
        alert(e); // TODO: melhorar tratamento de erro
      }
    },
    goToDashboard(company = false) {
      this.$emit('login', { logged: true, company });
      this.$router.push({
        path: this.nextRoute || company ? '/company/dashboard' : '/dashboard',
      });
    },
  },
};
</script>

<style></style>
