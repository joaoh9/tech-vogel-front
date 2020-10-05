<template>
  <div>
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
  </div>
</template>

<script>
import UserController from 'Controllers/user';
import RulesHelper from 'Helpers/rules';
import StorageHelper from 'Helpers/storage';
import JwtHelper from 'Helpers/jwt';

export default {
  name: 'LoginComponent',
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
          this.saveUserCredentials();
        } else {
          this.requestError = true;
        }
        this.loading.login = false;

        this.$router.push({
          path: '/resume/new',
        });
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
    },
  },
};
</script>

<style></style>
