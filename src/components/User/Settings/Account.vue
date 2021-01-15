<template>
  <div class="d-flex align-start flex-column">
    <form-input :title="$t('signup.name.title')" />
    <v-text-field
      outlined
      :rules="[rules.min(3, user.name), rules.max(200, user.name)]"
      v-model="user.name"
      @input="$emit('updates', user)"
      autofocus
    />

    <form-input :title="$t('signup.email.title')" />
    <v-text-field
      outlined
      :rules="[rules.email(user.email)]"
      v-model="user.email"
      @input="$emit('updates', user)"
    />
  </div>
</template>

<script>
import UserController from 'Controllers/user';

export default {
  name: 'Account',
  mounted() {
    this.getUserInfo();
  },
  data() {
    return {
      user: {
        name: '',
        email: '',
      },
      rules: {
        min: () => true,
        max: () => true,
        email: () => true,
      },
    };
  },
  methods: {
    async getUserInfo() {
      const userController = new UserController();

      try {
        const { name, email } = await userController.getById();
        this.name = name || '';
        this.email = email || '';
      } catch (e) {
        this.$toast.error(this.$t('toast.error.retrieveUser'));
      }

      this.$emit('updates', this.user);
    },
  },
};
</script>

<style></style>
