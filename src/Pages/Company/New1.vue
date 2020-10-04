<template>
  <div>
    <form-input :title="$t('Company.new.companyName')" />
    <v-text-field
      tile
      outlined
      :rules="[rules.min(3, companyName)]"
      v-model="companyName"
      @input="$emit('company-name', companyName)"
    />
    <form-input :title="$t('Company.new.representativeName')" />
    <v-text-field
      tile
      outlined
      :rules="[rules.min(3, representativeName)]"
      v-model="representativeName"
      @input="$emit('representative-name', representativeName)"
    />
    <form-input :title="$t('Company.new.representativeEmail')" />
    <v-text-field
      tile
      outlined
      :rules="[rules.email(representativeEmail)]"
      v-model="representativeEmail"
      @input="$emit('representative-email', representativeEmail)"
      :error-messages="localRules.emailAlreadyRegistered"
    />
    <v-row>
      <v-col cols="12" md="6">
        <form-input :title="$t('Company.new.password')" />
        <v-text-field
          :rules="[rules.min(8, password)]"
          tile
          outlined
          v-model="password"
          @input="$emit('password', password)"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
        />
      </v-col>
      <v-col cols="12" md="6">
        <form-input :title="$t('Company.new.confirmPassword')" />
        <v-text-field
          :rules="[rules.equalPassword(password, confirmPassword)]"
          tile
          outlined
          v-model="confirmPassword"
          :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showConfirmPassword ? 'text' : 'password'"
          @click:append="showConfirmPassword = !showConfirmPassword"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import RulesHelper from 'Helpers/rules';
import UserController from 'Controllers/user';

export default {
  name: 'New',
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
  },
  data() {
    return {
      showPassword: false,
      showConfirmPassword: false,
      profilePhoto: null,
      profilePhotURL: null,
      companyName: '',
      representativeName: '',
      representativeEmail: '',
      password: '',
      confirmPassword: '',
      localRules: {
        emailAlreadyRegistered: null,
        lessThanXCharacters: null,
        usernameUnavaliable: null,
      },
      rules: {
        min: () => true,
        equalPassword: () => true,
        email: () => true,
      },
    };
  },
  methods: {
    async validEmail() {
      this.$t('Rules.emailAlreadyRegistered');
      this.$t('Rules.lessThanXCharacters');
      this.$t('Rules.usernameUnavaliable');
    },
  },
  watch: {
    async representativeEmail() {
      console.log(this.rules.email(this.representativeEmail));
      if (this.rules.email(this.representativeEmail) === true) {
        const userController = new UserController();
        try {
          const user = await userController.getByEmail(this.representativeEmail);
          alert(user);
          if (user.length) {
            this.localRules.emailAlreadyRegistered = this.$t('Rules.emailAlreadyRegistered');
            return false;
          }
          return true;
        } catch (e) {
          return true;
        }
      }
    },
  },
};
</script>
