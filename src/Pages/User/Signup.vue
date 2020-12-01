<template>
  <div class="d-flex justify-center mt-12">
    <g-card :lg="600" :md="500">
      <template v-slot:card-content>
        <g-card-header :title="$t('common.signup')" :description="$t('signup.description')" />
        <g-btn
          @click="goToAuthGithubLink()"
          block
          v-if="!_email"
          type="disabled"
          :title="`${$t('common.loginGithub')} (${$t('common.comingSoon')})`"
          :label="`${$t('common.loginGithub')} (${$t('common.comingSoon')})`"
          icon="fab fa-github"
        />

        <!-- <g-btn
          class="mt-4"
          disabled
          block
          v-if="!_email"
          type="disabled"
          :label="$t('user.linkedInSignup')"
        /> -->

        <form-input class="mt-6" :title="$t('signup.name.title')" />
        <v-text-field
          data-cy="name"
          outlined
          :rules="[rules.min(3, user.name)]"
          v-model="user.name"
          autofocus
        />

        <form-input :title="$t('signup.email.title')" />
        <v-text-field
          data-cy="email"
          outlined
          v-model="user.email"
          :rules="[rules.email(user.email)]"
          :error-messages="localRules.emailAlreadyRegistered"
        />

        <form-input :title="$t('common.confirm') + ' ' + $t('signup.email.title')" />
        <v-text-field
          data-cy="confirm-email"
          outlined
          v-model="user.confirmEmail"
          :rules="[rules.equalEmail(user.email, user.confirmEmail)]"
          :error-messages="localRules.emailAlreadyRegistered"
        />

        <form-input :title="$t('common.password.label')" />
        <v-text-field
          data-cy="password"
          :rules="[rules.min(8, user.password)]"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          :type="showPassword ? 'text' : 'password'"
          outlined
          v-model="user.password"
        />

        <form-input :title="$t('common.confirmPassword.label')" />
        <v-text-field
          data-cy="confirm-password"
          :rules="[rules.equalPassword(user.password, user.confirmPassword)]"
          :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showConfirmPassword = !showConfirmPassword"
          :type="showConfirmPassword ? 'text' : 'password'"
          outlined
          v-model="user.confirmPassword"
        />

        <v-checkbox
          data-cy="terms-and-conditions"
          v-model="termsAndConditions"
          :rules="[rules.required(termsAndConditions)]"
          :error-messages="localRules.termsAndConditions"
        >
          <template v-slot:label>
            <div>
              {{ $t('signup.termsAndConditions.text') }}
              <strong @click="$router.push('/terms-of-service')" class="primary--text">
                {{ $t('common.termsAndConditions') }}
              </strong>
              {{ $t('common.and') }}
              <strong @click="$router.push('/privacy-policy')" class="primary--text">
                {{ $t('common.privacyPolicy') }}
              </strong>
            </div>
          </template>
        </v-checkbox>
      </template>
      <template v-slot:buttons>
        <div class="d-flex justify-space-between my-6">
          <v-btn data-cy="go-to-login" to="/login" color="secondary" tile outlined text large>
            {{ $t('common.login') }}
          </v-btn>
          <v-btn
            data-cy="signup"
            :loading="loading.register"
            @click="validateForm"
            color="primary"
            elevation="0"
            large
          >
            {{ $t('common.signup') }}
          </v-btn>
        </div>
      </template>
    </g-card>
  </div>
</template>

<script>
import UserController from 'Controllers/user';

import RulesHelper from 'Helpers/rules';

import settings from '@config';

export default {
  name: 'Login',
  props: {
    _email: String,
    _name: String,
  },
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
    this.user.email = this._email || '';
    this.user.name = this._name || '';
  },
  data() {
    return {
      requestError: false,
      showPassword: false,
      showConfirmPassword: false,
      termsAndConditions: false,
      rules: {
        min: () => true,
        equalPassword: () => true,
        equalEmail: () => true,
        email: () => true,
        required: () => true,
      },
      localRules: {
        emailAlreadyRegistered: null,
        termsAndConditions: null,
      },
      user: {
        name: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
      },
      loading: {
        register: false,
      },
      errorMessage: this.$t('signup.error.errorSavingUser'),
    };
  },
  methods: {
    async validateForm() {
      if (!this.termsAndConditions) {
        this.localRules.termsAndConditions = this.$t('rules.termsAndConditions');
      } else {
        this.localRules.termsAndConditions = '';
      }
      const emailRuleOk = this.rules.email(this.user.email) === true;
      if (!emailRuleOk) {
        this.localRules.emailAlreadyRegistered = this.$t('common.emailRequired');
      }

      const validEmail = await this.validEmail();
      if (!validEmail) {
        this.$toast.warning(this.$t('toast.warning.emailRegistered'));
      }
      if (emailRuleOk && validEmail) {
        this.localRules.emailAlreadyRegistered = '';
      }

      const nameRuleOk = this.rules.min(3, this.user.name) === true;
      if (!nameRuleOk) {
        this.user.name = '';
        this.$toast.warning(this.$t('toast.warning.nameGreater'));
      }

      const equalEmail = this.rules.equalEmail(this.user.email, this.user.confirmEmail) === true;
      if (!equalEmail) {
        this.$toast.warning(this.$t('toast.warning.emailValidation'));
      }

      const equalPassword =
        this.rules.equalPassword(this.user.password, this.user.confirmPassword) === true;
      console.log(equalPassword);
      if (!equalPassword) {
        this.$toast.warning(this.$t('toast.warning.passwordValidation'));
      }

      if (
        !this.termsAndConditions ||
        !emailRuleOk ||
        !validEmail ||
        !nameRuleOk ||
        !equalEmail ||
        !equalPassword
      ) {
        return false;
      }

      this.signup();
    },
    async signup() {
      const userController = new UserController();
      this.loading.register = true;
      try {
        await userController.saveUser({
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
        });
        this.loading.register = false;

        this.$router.push({
          path: '/confirm-registration',
          params: {
            _email: this.user.email,
          },
        });
      } catch (e) {
        if (e.response.status === 500) {
          this.errorMessage = this.$t('errors.500');
        }
        this.$toast.error(this.errorMessage);
        this.loading.register = false;
        return false;
      }
    },
    async validEmail() {
      const userController = new UserController();
      try {
        const user = await userController.getByEmail(this.user.email);

        if (user.email) {
          this.localRules.emailAlreadyRegistered = this.$t('rules.emailAlreadyRegistered');
          return false;
        }
        return true;
      } catch (e) {
        return true;
      }
    },
    goToAuthGithubLink() {
      window.open(
        `https://github.com/login/oauth/authorize?client_id=${settings.github.client_id}`,
        '_blank',
      );
    },
  },
};
</script>

<style></style>
