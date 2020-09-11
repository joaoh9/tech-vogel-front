<template>
  <div>
    <h3 class="mb-12 h4">{{ $t('User.register.page1.title') }}</h3>

    <form-input
      position="left"
      :title="$t('User.register.fullName.title')"
      :tooltip="$t('User.register.fullName.tooltip')"
    />
    <v-text-field
      :rules="[rules.name]"
      :error-messages="alerts.usernameUnavaliable"
      tile
      outlined
      v-model="fullName"
      @input="$emit('full-name', fullName)"
    ></v-text-field>

    <form-input
      position="left"
      :title="$t('User.register.email.title')"
      :tooltip="$t('User.register.email.tooltip')"
    />
    <v-text-field
      :rules="[rules.email]"
      :error-messages="alerts.emailAlreadyRegistered"
      tile
      outlined
      v-model="email"
      @input="$emit('email', email)"
    ></v-text-field>

    <form-input
      position="left"
      :title="$t('User.register.username.title')"
      :tooltip="$t('User.register.username.tooltip')"
    />
    <v-text-field
      :rules="[rules.min(3, username), rules.lettersAndNumbers]"
      tile
      outlined
      v-model="username"
      @input="$emit('username', username)"
    ></v-text-field>

    <v-row>
      <v-col cols="12" md="6">
        <form-input
          position="left"
          :title="$t('User.register.password.title')"
          :tooltip="$t('User.register.password.tooltip')"
        />
        <v-text-field
          tile
          outlined
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
          v-model="password"
          @input="$emit('password', password)"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <form-input
          position="left"
          :title="$t('User.register.confirmPassword.title')"
          :tooltip="$t('User.register.confirmPassword.tooltip')"
        />
        <v-text-field
          tile
          outlined
          :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showConfirmPassword ? 'text' : 'password'"
          @click:append="showConfirmPassword = !showConfirmPassword"
          v-model="confirmPassword"
          @input="$emit('confirm-password', confirmPassword)"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Rules from 'Helpers/rules';
import FormInput from 'Components/FormInput';
import UserController from 'Controllers/user';

export default {
  name: 'New',
  props: {},
  components: {
    FormInput,
  },
  mounted() {
    this.rules = new Rules(this.$t);
  },
  data() {
    return {
      rules: {
        name: () => true,
        email: () => true,
        min: () => true,
        lettersAndNumbers: () => true,
      },
      fullName: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      currentStep: 1,
      showPassword: false,
      showConfirmPassword: false,
      alerts: {
        emailRegistered: '',
        usernameUnavaliable: '',
      },
    };
  },
  methods: {
    async verifyUsers() {
      const userController = new UserController();
      if (
        this.rules.email(this.email) === true &&
        this.rules.min(3, this.username) === true &&
        this.rules.lettersAndNumbers(this.username) === true
      ) {
        this.alerts.emailRegistered = '';
        this.alerts.usernameUnavaliable = '';
        try {
          const res = await userController.getByEmail(this.email);
          console.log(res);
          if (res.length) {
            this.alerts.emailRegistered = this.$t('Rules.emailAlreadyRegistered');
          }
        } catch (e) {
          console.log(e);
        }

        try {
          const res = await userController.getByUsername(this.username);
          console.log(res);
          if (res) {
            this.alerts.usernameUnavaliable = this.$t('Rules.usernameUnavaliable');
          }
        } catch (e) {
          console.log(e);
        }

        if (this.alerts.emailRegistered || this.alerts.usernameUnavaliable) {
          return;
        }

        this.step++;
      }
    },
  },
};
</script>
