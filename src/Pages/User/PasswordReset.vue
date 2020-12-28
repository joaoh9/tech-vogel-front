<template>
  <div class="d-flex justify-center mt-12">
    <g-card :lg="600" :md="500">
      <template v-slot:card-header>
        <g-card-header
          class="px-n10"
          :title="$t('user.passwordReset.title')"
          :description="$t('user.passwordReset.description')"
        />
      </template>
      <template v-slot:card-content>
        <div v-if="step === 1">
          <form-input class="mt-6" :title="$t('common.email.label')" />
          <v-text-field
            outlined
            v-model="user.email"
            :rules="[rules.required(user.email), rules.email(user.email)]"
            autofocus
            data-cy="password-reset-email"
          />
        </div>
        <div v-if="step === 2">
          <form-input class="mt-6" :title="$t('user.passwordReset.confirmationCode')" />
          <v-text-field
            outlined
            v-model="user.confirmationCode"
            :rules="[rules.required(user.confirmationCode)]"
            autofocus
            data-cy="password-reset-confirmation-code"
          />
        </div>
        <div v-if="step === 3">
          <form-input class="mt-6" :title="$t('common.password.label')" />
          <v-text-field
            outlined
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            :type="showPassword ? 'text' : 'password'"
            v-model="user.password"
            :rules="[rules.required(user.password), rules.min(6, user.password)]"
            autofocus
            data-cy="password-reset-password"
          />
          <form-input class="mt-2" :title="$t('common.confirmPassword.label')" />
          <v-text-field
            outlined
            :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showConfirmPassword = !showConfirmPassword"
            :type="showConfirmPassword ? 'text' : 'password'"
            v-model="user.confirmPassword"
            :rules="[
              rules.required(user.confirmPassword),
              rules.equalPassword(user.password, user.confirmPassword),
              rules.min(6, user.confirmPassword),
            ]"
            :error-messages="localRules.passwordRequired"
            data-cy="password-reset-confirm-password"
          />
        </div>
      </template>
      <template v-slot:buttons>
        <div class="d-flex justify-space-between my-6">
          <v-btn @click="$router.go(-1)" color="secondary" tile outlined text large>
            {{ $t('common.back') }}
          </v-btn>
          <g-btn
            :loading="loading"
            type="primary"
            large
            @click="getButtonAction()"
            data-cy="password-reset"
            :label="$t('common.confirm')"
          />
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
  name: 'password-reset',
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
  },
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
    this.rulesLoaded = true;
    if (this.email) {
      this.user.email = this.email;
    }
    this.retrieveUserDataFromLocalStorage();
  },
  data() {
    return {
      showPassword: false,
      showConfirmPassword: false,
      user: {
        email: '',
        confirmationCode: '',
        password: '',
        confirmPassword: '',
      },
      localRules: {
        passwordRequired: '',
      },
      loading: false,
      rules: {
        required: () => true,
        email: () => true,
        min: () => true,
        equalPassword: () => true,
      },
      step: 1,
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

    async resetPasswordNotification() {
      this.loading = true;

      const userController = new UserController();
      try {
        await userController.resetPasswordNotification(this.user.email);
        this.$toast.success(this.$t('toast.success.passwordResetEmailSent'));
        this.loading = false;
        this.step = 2;
      } catch (e) {
        if (e.response.status === 404) {
          this.loading = false;
          return this.$toast.error(this.$t('toast.error.userNotFound'));
        }
        this.$toast.error(this.$t('toast.error.passwordResetEmailSent'));
        this.loading = false;
      }
    },
    async checkCorrectCode() {
      this.loading = true;

      const userController = new UserController();

      try {
        const { exists } = await userController.checkCorrectCode(
          this.user.email,
          this.user.confirmationCode,
        );
        console.log('🚀 ~ file: PasswordReset.vue ~ line 159 ~ checkCorrectCode ~ exists', exists);
        if (!exists) {
          this.$toast.error(this.$t('toast.error.passwordReset.incorrectInternalKey'));
          this.loading = false;
          return;
        }
        this.loading = false;
        this.step = 3;
      } catch (e) {
        this.$toast.error(this.$t('errors.500'));
      }
    },
    validatePassword() {
      const validPassword = this.rules.min(6, this.user.password) === true;
      if (!validPassword) {
        this.localRules.passwordRequired = this.rules.min(6, this.user.password);
      } else {
        this.localRules.passwordRequired = this.$t('rules.passwordRequired');
      }

      if (validPassword) {
        this.localRules.passwordRequired = '';
      }

      const equalPassword =
        this.rules.equalPassword(this.user.password, this.user.confirmPassword) === true;

      if (!equalPassword) {
        return false;
      }

      this.resetPassword();
    },

    async resetPassword() {
      const userController = new UserController();
      this.loading = true;
      try {
        await userController.resetPassword(
          this.user.email,
          this.user.confirmationCode,
          this.user.password,
        );
        this.login();
      } catch (e) {
        if (e.response.status === 404) {
          this.$toast.error(this.$t('toast.error.userNotFound'));
        }
      } finally {
        this.loading = false;
      }
    },

    async login() {
      const userController = new UserController();
      this.loading = true;

      try {
        const { data: userInfo } = await userController.auth({
          email: this.user.email,
          password: this.user.password,
        });

        userController.saveUserToken(userInfo.token);
        this.$emit('login');

        return this.goToCompanyDashboard();
      } catch (e) {
        if (e.response.status === 404) {
          return (this.localRules.checkPassword = this.$t('rules.wrongPasswordLogin'));
        }

        return this.$toast.error(this.$t('toast.error.loginFailed'));
      } finally {
        this.loading = false;
      }
    },

    getButtonAction() {
      switch (this.step) {
        case 1:
          return this.resetPasswordNotification();
        case 2:
          return this.checkCorrectCode();
        case 3:
          return this.validatePassword();
      }
    },

    goToSidePick() {
      this.$router.push({
        name: 'Side Pick',
      });
    },

    goToCompanyDashboard() {
      this.$router.push({
        name: 'Company Dashboard',
      });
    },

    goToRegisterCompany() {
      this.$router.push({
        name: 'New Company',
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
