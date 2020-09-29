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
          <div class="d-flex justify-space-between ma-6">
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
      :errorMessage="$t('login.error')"
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
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
    this.rulesLoaded = true;
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
          this.saveUserCredentials();
        } else {
          this.requestError = true;
        }
        this.loading.login = false;

        this.$router.push({
          path: '/resume/new',
        });
      } catch (e) {
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
    },
  },
};
</script>

<style></style>
