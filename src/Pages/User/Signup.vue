<template>
  <div class="d-flex justify-center mt-12">
    <v-card
      class="primary-card"
      :elevation="$vuetify.breakpoint.smAndUp ? 6 : 0"
      color="bg"
      max-width="600"
      :min-width="$vuetify.breakpoint.smAndUp ? 500 : 320"
    >
      <card-template :title="$t('Common.signup')" :description="$t('Signup.description')">
        <template v-slot:content="{}">
          <form-input class="mt-6" :title="$t('Signup.name.title')" />
          <v-text-field outlined :rules="[rules.min(3, user.name)]" v-model="user.name" />
          <form-input :title="$t('Signup.username.title')" />
          <v-text-field
            outlined
            :rules="[rules.min(3, user.username)]"
            :error-messages="localRules.usernameUnavaliable"
            v-model="user.username"
          />
          <form-input :title="$t('Signup.email.title')" />
          <v-text-field
            outlined
            v-model="user.email"
            :rules="[rules.email(user.email)]"
            :error-messages="localRules.emailAlreadyRegistered"
          />
          <form-input :title="$t('Common.password.label')" />
          <v-text-field
            :rules="[rules.min(8, user.password)]"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            :type="showPassword ? 'text' : 'password'"
            outlined
            v-model="user.password"
          />
          <form-input :title="$t('Common.confirmPassword.label')" />
          <v-text-field
            :rules="[rules.equalPassword(user.password, user.confirmPassword)]"
            :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showConfirmPassword = !showConfirmPassword"
            :type="showConfirmPassword ? 'text' : 'password'"
            outlined
            v-model="user.confirmPassword"
          />
          <v-checkbox
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
          <v-row class="mt-6">
            <v-col cols="6" md="6" class="text-left">
              <v-btn to="/login" color="secondary" tile outlined text large>
                {{ $t('Common.login') }}
              </v-btn>
            </v-col>
            <v-col cols="6" md="6" class="text-right">
              <v-btn
                :loading="loading.register"
                @click="signup"
                color="primary"
                elevation="0"
                large
              >
                {{ $t('Common.signup') }}
              </v-btn>
            </v-col>
          </v-row>
        </template>
      </card-template>
    </v-card>
  </div>
</template>

<script>
import CardTemplate from 'Components/Interface/CardTemplate';
import UserController from 'Controllers/user';
import RulesHelper from 'Helpers/rules';

export default {
  name: 'Login',
  components: {
    CardTemplate,
  },
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
    this.rulesLoaded = true;
  },
  data() {
    return {
      rulesLoaded: false,
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
    };
  },
  methods: {
    async signup() {
      const userController = new UserController();

      if (!this.termsAndConditions) {
        this.localRules.termsAndConditions = this.$t('Rules.termsAndConditions');
        return false;
      }
      const validEmail = await this.validEmail();
      const validUsername = await this.validUsername();
      if (!validEmail || !validUsername) {
        return false;
      }

      this.loading.register = true;

      await userController.saveUser({
        name: this.user.name,
        username: this.user.username,
        email: this.user.email,
        password: this.user.password,
        birthDate: '1990-12-12',
      });

      this.loading.register = false;

      this.$router.push({
        path: '/confirm-registration',
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
        alert(JSON.stringify(e));
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
        alert('username' + JSON.stringify(e));
        return true;
      }
    },
  },
};
</script>

<style></style>
