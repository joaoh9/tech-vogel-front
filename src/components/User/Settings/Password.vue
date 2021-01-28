<template>
  <div>
    <form-input :title="$t('common.currentPassword.label')" />
    <v-text-field
      outlined
      :rules="[rules.min(6, user.password)]"
      v-model="user.password"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPassword = !showPassword"
      :type="showPassword ? 'text' : 'password'"
      @input="$emit('updates', user)"
      :error-messages="localRules.requiredPassword"
    />

    <form-input :title="$t('common.newPassword.label')" />
    <v-text-field
      outlined
      :rules="[rules.min(6, user.newPassword)]"
      v-model="user.newPassword"
      :append-icon="showNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showNewPassword = !showNewPassword"
      :type="showNewPassword ? 'text' : 'password'"
      @input="$emit('updates', user)"
      :error-messages="localRules.equalPassword"
    />

    <form-input :title="$t('common.confirmPassword.label')" />
    <v-text-field
      outlined
      :rules="[rules.equalPassword(user.newPassword, user.confirmPassword)]"
      v-model="user.confirmPassword"
      :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showConfirmPassword = !showConfirmPassword"
      :type="showConfirmPassword ? 'text' : 'password'"
      :error-messages="localRules.equalPassword"
    />
  </div>
</template>

<script>
import RulesHelper from 'Helpers/rules';

export default {
  name: 'Password',
  mounted() {
    this.rules = new RulesHelper(this.$i18n.messages[this.$i18n.locale]);
  },
  data() {
    return {
      showPassword: false,
      showNewPassword: false,
      showConfirmPassword: false,
      user: {
        password: '',
        newPassword: '',
        confirmPassword: '',
      },
      localRules: {
        requiredPassword: '',
        equalPassword: '',
      },
      rules: {
        min: () => true,
        equalPassword: () => true,
      },
    };
  },
  methods: {
    validatePassword() {
      const requiredPassword = this.rules.min(6, this.user.password) === true;

      if (!requiredPassword) {
        this.localRules.requiredPassword = this.rules.min(6, this.user.password);
        return;
      }

      const equalPassword =
        this.rules.equalPassword(this.user.newPassword, this.user.confirmPassword) === true;

      if (!equalPassword) {
        this.localRules.equalPassword = this.rules.equalPassword(
          this.user.newPassword,
          this.user.confirmPassword,
        );
        return;
      }
    },
  },
};
</script>

<style></style>
