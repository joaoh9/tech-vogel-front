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
    />

    <form-input :title="$t('common.confirmPassword.label')" />
    <v-text-field
      outlined
      :rules="[rules.equalPassword(user.password, user.confirmPassword)]"
      v-model="user.confirmPassword"
      :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showConfirmPassword = !showConfirmPassword"
      :type="showConfirmPassword ? 'text' : 'password'"
    />
  </div>
</template>

<script>
import UserController from 'Controllers/user';

export default {
  name: 'Password',
  mounted() {
    this.getUserInfo();
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
      rules: {
        min: () => true,
        equalPassword: () => true,
      },
    };
  },
  methods: {
    async getUserInfo() {
      const userController = new UserController();
      const { password } = await userController.getById();

      this.password = password || '';
    },
  },
};
</script>

<style></style>
