<template>
  <div class="d-flex justify-center mt-12">
    <g-card :lg="600" :md="500">
      <template v-slot:card-content>
        <g-card-header :title="$t('common.signup')" :description="$t('signup.description')" />
        <form-input class="mt-6" :title="$t('signup.name.title')" />
        <v-text-field
          data-cy="name"
          outlined
          :rules="[rules.min(3, user.name)]"
          v-model="user.name"
        />
        <form-input v-if="askForUsername" :title="$t('signup.username.title')" />
        <v-text-field
          data-cy="username"
          v-if="askForUsername"
          outlined
          :rules="[rules.min(3, user.username)]"
          :error-messages="localRules.usernameUnavaliable"
          v-model="user.username"
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
        <g-btn @click="goToAuthGithubLink()" block type="primary" label="Signup with Github" />
        <g-btn class="mt-4" disabled block type="primary" label="Signup with Linkedin" />
        <v-checkbox
          data-cy="terms-and-conditions"
          v-model="termsAndConditions"
          :rules="[rules.termsAndConditions]"
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
            @click="signup"
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
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
  },
  data() {
    return {
      askForUsername: true,
      requestError: false,
      showPassword: false,
      showConfirmPassword: false,
      termsAndConditions: false,
      rules: {
        min: () => true,
        equalPassword: () => true,
        equalEmail: () => true,
        email: () => true,
        termsAndConditions: () => true,
      },
      localRules: {
        emailAlreadyRegistered: null,
        usernameUnavaliable: null,
        termsAndConditions: null,
      },
      user: {
        name: '',
        email: '',
        confirmEmail: '',
        username: '',
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
    async signup() {
      const userController = new UserController();

      if (!this.termsAndConditions) {
        this.localRules.termsAndConditions = this.$t('rules.termsAndConditions');
        return false;
      }
      if (!this.askForUsername) {
        this.user.username =
          this.user.email.split('@')[0] +
          Math.random()
            .toString()
            .slice(3, 10);
      }

      const validEmail = await this.validEmail();
      const validUsername = await this.validUsername();
      if (!validEmail || !validUsername) {
        return false;
      }

      this.loading.register = true;
      try {
        await userController.saveUser({
          name: this.user.name,
          username: this.user.username,
          email: this.user.email,
          password: this.user.password,
          birthDate: '1990-12-12',
        });
      } catch (e) {
        if (e.response.status === 500) {
          this.errorMessage = this.$t('errors.500');
        }
        this.$toast.error(this.errorMessage);
        this.loading.register = false;
        return false;
      }

      this.loading.register = false;

      this.$router.push({
        path: '/confirm-registration',
        params: {
          _username: this.user.username,
          _email: this.user.email,
        },
      });
    },
    async validEmail() {
      const userController = new UserController();
      if (this.rules.email(this.user.email) !== true) {
        return false;
      }
      try {
        const user = await userController.getByEmail(this.user.email);
        if (user.length) {
          this.localRules.emailAlreadyRegistered = this.$t('rules.emailAlreadyRegistered');
          return false;
        }
        return true;
      } catch (e) {
        return true;
      }
    },
    async validUsername() {
      const userController = new UserController();

      if (this.rules.min(3, this.user.username) !== true) {
        this.localRules.usernameUnavaliable = this.$t('rules.lessThanXCharacters').replace('X', 4);
        return false;
      }

      try {
        const user = await userController.getByUsername(this.user.username);
        if (user) {
          this.localRules.usernameUnavaliable = this.$t('rules.usernameUnavaliable');
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
