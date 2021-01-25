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
      },
      rules: {
        min: () => true,
        max: () => true,
      },
    };
  },
  methods: {
    async getUserInfo() {
      const userController = new UserController();

      try {
        const { name } = await userController.getById();
        this.user.name = name || '';
      } catch (e) {
        this.$toast.error(this.$t('toast.error.retrieveUser'));
      }

      this.$emit('updates', this.user);
    },
  },
};
</script>

<style></style>
