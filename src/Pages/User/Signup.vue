<template>
  <div>
    <div class="d-flex justify-center mt-12">
      <g-card :lg="600" :md="500">
        <template v-slot:card-content>
          <g-card-header :title="$t('Common.signup')" :description="$t('Signup.description')" />
          <form-input class="mt-6" :title="$t('Signup.name.title')" />
          <v-text-field
            data-cy="name"
            outlined
            :rules="[rules.min(3, user.name)]"
            v-model="user.name"
          />
          <form-input v-if="askForUsername" :title="$t('Signup.username.title')" />
          <v-text-field
            data-cy="username"
            v-if="askForUsername"
            outlined
            :rules="[rules.min(3, user.username)]"
            :error-messages="localRules.usernameUnavaliable"
            v-model="user.username"
          />
          <form-input :title="$t('Signup.email.title')" />
          <v-text-field
            data-cy="email"
            outlined
            v-model="user.email"
            :rules="[rules.email(user.email)]"
            :error-messages="localRules.emailAlreadyRegistered"
          />
          <form-input :title="$t('Common.password.label')" />
          <v-text-field
            data-cy="password"
            :rules="[rules.min(8, user.password)]"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            :type="showPassword ? 'text' : 'password'"
            outlined
            v-model="user.password"
          />
          <form-input :title="$t('Common.confirmPassword.label')" />
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
            :rules="[v => !!v || $t('Rules.termsAndConditions')]"
            :error-messages="localRules.termsAndConditions"
          >
            <template v-slot:label>
              <div>
                {{ $t('Signup.termsAndConditions.text') }}
                <strong @click="$router.push('/terms-and-conditions')" class="primary--text">
                  {{ $t('Signup.termsAndConditions.termsAndConditions') }}
                </strong>
              </div>
            </template>
          </v-checkbox>
        </template>
        <template v-slot:buttons>
          <div class="d-flex justify-space-between my-6">
            <v-btn data-cy="go-to-login" to="/login" color="secondary" tile outlined text large>
              {{ $t('Common.login') }}
            </v-btn>
            <v-btn
              data-cy="signup"
              :loading="loading.register"
              @click="signup"
              color="primary"
              elevation="0"
              large
            >
              {{ $t('Common.signup') }}
            </v-btn>
          </div>
        </template>
      </g-card>
    </div>
    <div>
      <g-alert
        :errorMessage="requestErrorMessage"
        v-on:error="s => (requestError = s)"
        :errorVar="requestError"
      />
    </div>
  </div>
</template>

<script>
import UserController from 'Controllers/user';
import RulesHelper from 'Helpers/rules';

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
        email: () => true,
      },
      localRules: {
        emailAlreadyRegistered: null,
        usernameUnavaliable: null,
        termsAndConditions: null,
      },
      user: {
        name: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
      },
      loading: {
        register: false,
      },
      requestErrorMessage: this.$t('Signup.error.errorSavingUser'),
    };
  },
  methods: {
    async signup() {
      const userController = new UserController();

      if (!this.termsAndConditions) {
        this.localRules.termsAndConditions = this.$t('Rules.termsAndConditions');
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
          this.requestErrorMessage = this.$t('DefaultErrors.500');
        }
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
          this.localRules.emailAlreadyRegistered = this.$t('Rules.emailAlreadyRegistered');
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
        this.localRules.usernameUnavaliable = this.$t('Rules.lessThanXCharacters').replace('X', 4);
        return false;
      }

      try {
        const user = await userController.getByUsername(this.user.username);
        if (user) {
          this.localRules.usernameUnavaliable = this.$t('Rules.usernameUnavaliable');
          return false;
        }
        return true;
      } catch (e) {
        return true;
      }
    },
  },
};
</script>

<style></style>
